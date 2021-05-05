import React, { useContext } from 'react';
import {
  Container,
  UserName,
  UserAccountBalance,
  LatestMovesTitle,
  List
} from './styles';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import HistoricList from '../../components/HistoricList';

export default function Home() {

  const { user } = useContext(AuthContext);

  const historic = [
    {
      key: '1',
      type: 'despesa',
      value: 1200
    },
    {
      key: '2',
      type: 'despesa',
      value: 45
    },
    {
      key: '3',
      type: 'receita',
      value: 85.99
    },
  ];

  return (
    <>
      <Header />

      <Container>
        <UserName>{user && user.name}</UserName>
        <UserAccountBalance>R$ 125,00</UserAccountBalance>

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