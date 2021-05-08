import styled from 'styled-components/native';

import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import fonts from '../../styles/fonts';

export const Container = styled.TouchableOpacity`
  background-color: ${Platform.OS === 'ios' ? colors.seven : 'transparent'};
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: ${colors.one};
  border-bottom-width: 1px;
  border-color: ${colors.four};
`;

export const CancelText = styled.Text`
  font-size: ${metrics.medium};
  color: ${colors.nine};
  font-family: ${fonts.regular};
`;