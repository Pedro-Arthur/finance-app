import styled from 'styled-components/native';

import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import fonts from '../../styles/fonts';

import { MaterialIcons } from '@expo/vector-icons';

export const PickerView = styled.View`
  background-color: ${colors.three};
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PickerValue = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${metrics.medium};
  color: ${colors.one};
`;

export const PickerIcon = styled(MaterialIcons)`
  font-size: ${metrics.medium};
  color: ${colors.one};
`;

export const PickerButton = styled.TouchableOpacity``;

export const PickerModal = styled.View`
  background-color: ${colors.one};
  border-radius: 10px;
`;

export const PickerOption = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 5px;
`;

export const PickerOptionValue = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${metrics.medium};
  color: ${colors.two};
  padding: 10px 0;
`;

export const PickerOptionCancel = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${metrics.medium};
  color: ${colors.nine};
  padding: 10px 0;
`;

export const PickerLine = styled.View`
  background-color: ${colors.eight};
  height: 0.5px;
  width: 95%;
  margin: 0 2.5%;
`;