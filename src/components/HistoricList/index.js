import React from 'react';
import {
  Container,
  Icon,
  FinanceType,
  FinanceTypeText,
  FinanceValue
} from './styles';

export default function HistoricList({ data }) {
  return (
    <Container>
      <FinanceType type={data.type}>
        <Icon name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} />
        <FinanceTypeText>{data.type}</FinanceTypeText>
      </FinanceType>

      <FinanceValue>R$ {data.value}</FinanceValue>
    </Container>
  );
}