import React from 'react';
import {
  Container,
  Icon,
  FinanceType,
  FinanceTypeText,
  FinanceValue
} from './styles';

export default function HistoricList({ data, deleteItem }) {

  let m1 = parseFloat(data.value);
  let m2 = m1.toFixed(2);
  let m3 = m2.replace('.', ',');
  let m4 = m3.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  return (
    <Container activeOpacity={0.7} onLongPress={() => deleteItem(data)}>
      <FinanceType type={data.type}>
        <Icon name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} />
        <FinanceTypeText>{data.type}</FinanceTypeText>
      </FinanceType>

      <FinanceValue>R$ {m4}</FinanceValue>
    </Container>
  );
}