import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import metrics from '../../styles/metrics';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View.attrs({
  elevation: 5
})`
  width: 90%;
  margin: 0 5% 15px;
  box-shadow: 2px 2px ${colors.three};
  background-color: ${colors.one};
  border-radius: 7px;
  padding: 10px;
`;

export const Icon = styled(Feather)`
  font-size: ${metrics.large};
  color: ${colors.one};
`;

export const FinanceType = styled.View`
  background-color: ${props => props.type === 'despesa' ? colors.nine : colors.five};
  flex-direction: row;
  border-radius: 7px;
  padding: 5px 8px;
  align-items: center;
`;

export const FinanceTypeText = styled.Text`
  font-size: ${metrics.medium};
  color: ${colors.one};
  font-family: ${fonts.regularItalic};
  margin-left: 5px;
`;

export const FinanceValue = styled.Text`
  font-size: ${metrics.medium};
  color: ${colors.two};
  font-family: ${fonts.regular};
`;