import React, { useContext, useState, useEffect } from 'react';
import {
  Container,
  UserName,
  UserAccountBalance,
  LatestMovesTitle,
  List
} from './styles';

import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebase';
import { format } from 'date-fns';

import Header from '../../components/Header';
import HistoricList from '../../components/HistoricList';
import Loading from '../../components/Loading';

export default function Home() {

  const [historic, setHistoric] = useState(['null']);
  const [accountBalance, setAccountBalance] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setAccountBalance(snapshot.val().accountBalance);
      });

      await firebase.database().ref('historic')
        .child(uid)
        .orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
        .limitToLast(10).on('value', (snapshot) => {
          setHistoric([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              type: childItem.val().type,
              value: childItem.val().value
            };

            setHistoric(oldArray => [...oldArray, list].reverse());
          })
        })

    }

    loadList();
  }, []);

  let m1 = accountBalance.toFixed(2);
  let m2 = m1.replace('.', ',');
  let m3 = m2.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  if (historic == 'null') {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Header />

      <Container>
        <UserName>{user && user.name}</UserName>
        <UserAccountBalance>R$ {m3}</UserAccountBalance>

        <LatestMovesTitle>Últimas Movimentações</LatestMovesTitle>

        <List
          contentContainerStyle={{ paddingTop: 15 }}
          showsVerticalScrollIndicator={false}
          data={historic}
          keyExtractor={item => item.key}
          renderItem={({ item }) => <HistoricList data={item} />}
        />
      </Container>
    </>
  );
}