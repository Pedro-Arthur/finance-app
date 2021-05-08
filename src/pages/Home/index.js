import React, { useContext, useState, useEffect } from 'react';
import {
  Container,
  UserName,
  UserAccountBalance,
  LatestMovesTitle,
  List,
  NoResults,
  Background,
  CalendarButton,
  Icon,
  CalendarBox
} from './styles';

import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebase';
import { format, isBefore } from 'date-fns';

import Header from '../../components/Header';
import HistoricList from '../../components/HistoricList';
import Loading from '../../components/Loading';
import ModalComponent from '../../components/Modal';
import DatePicker from '../../components/DatePicker';

export default function Home() {

  const [historic, setHistoric] = useState(['null']);
  const [accountBalance, setAccountBalance] = useState(0);
  const [newDate, setNewDate] = useState(new Date());

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [show, setShow] = useState(false);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  function handleDelete(data) {

    const [itemDay, itemMonth, itemYear] = data.date.split('/');
    const itemDate = new Date(`${itemYear}/${itemMonth}/${itemDay}`);

    const todayFormat = format(new Date(), 'dd/MM/yyyy');
    const [todayDay, todayMonth, todayYear] = todayFormat.split('/');
    const todayDate = new Date(`${todayYear}/${todayMonth}/${todayDay}`);

    if (isBefore(itemDate, todayDate)) {
      setModalVisible1(true);
    }
    else {
      setModalVisible2(true);
      setData(data);
    }
  }

  function handleShowPicker() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  const onChange = (date) => {
    setShow(Platform.OS === 'ios');
    setNewDate(date);
  }

  async function handleDeleteSuccess(data) {
    setModalVisible2(false);
    setLoading(true);
    await firebase.database().ref('historic')
      .child(uid).child(data.key).remove()
      .then(async () => {
        let currentBalance = accountBalance;
        data.type === 'despesa' ? currentBalance += parseFloat(data.value) : currentBalance -= parseFloat(data.value);

        await firebase.database().ref('users').child(uid).child('accountBalance').set(currentBalance);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setAccountBalance(snapshot.val().accountBalance);
      });

      await firebase.database().ref('historic')
        .child(uid)
        .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
        .limitToLast(10).on('value', (snapshot) => {
          setHistoric([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              type: childItem.val().type,
              value: childItem.val().value,
              date: childItem.val().date
            };

            setHistoric(oldArray => [...oldArray, list].reverse());
          })
        })

    }

    loadList();
  }, [newDate]);

  let m1 = accountBalance.toFixed(2);
  let m2 = m1.replace('.', ',');
  let m3 = m2.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  if (historic == 'null' || loading) {
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

        <CalendarBox>
          <CalendarButton activeOpacity={0.7} onPress={() => handleShowPicker()}>
            <Icon name='calendar' />
          </CalendarButton>
          <LatestMovesTitle>Últimas Movimentações</LatestMovesTitle>
        </CalendarBox>

        {historic.length == 0 ? (
          <Background>
            <NoResults>Sem movimentações recentes...</NoResults>
          </Background>
        ) : (
          <List
            contentContainerStyle={{ paddingTop: 15 }}
            showsVerticalScrollIndicator={false}
            data={historic}
            keyExtractor={item => item.key}
            renderItem={({ item }) => <HistoricList data={item} deleteItem={handleDelete} />}
          />
        )
        }

        {show && (
          <DatePicker
            onClose={handleClose}
            date={newDate}
            onChange={onChange}
          />
        )}
      </Container>

      <ModalComponent
        visible={modalVisible1}
        modal4={true}
        actionButtonOk={() => setModalVisible1(false)}
      />

      <ModalComponent
        visible={modalVisible2}
        modal5={true}
        actionButtonCancel={() => setModalVisible2(false)}
        actionButtonOk={() => handleDeleteSuccess(data)}
      />
    </>
  );
}