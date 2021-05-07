import styled from 'styled-components/native';

import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import fonts from '../../styles/fonts';

import { Feather } from '@expo/vector-icons';

export const ModalView = styled.View`
  background-color: ${colors.one};
  border-radius: 10px;
  padding: 10px;
`;

export const ModalTitle = styled.Text`
  color: ${colors.five};
  font-size: ${metrics.medium};
  font-family: ${fonts.regular};
`;

export const ModalTitleError = styled.Text`
  color: ${colors.nine};
  font-size: ${metrics.medium};
  font-family: ${fonts.regular};
`;

export const ModalSubtitle = styled.Text`
  color: ${colors.two};
  font-size: ${metrics.medium};
  padding: 10px 0 40px;
  font-family: ${fonts.regular};
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ModalButtonOk = styled.TouchableOpacity`
  background-color: ${colors.five};
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-left: 10px;
`;

export const ModalButtonCancel = styled.TouchableOpacity`
  background-color: ${colors.nine};
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

export const ModalButtonError = styled.TouchableOpacity`
  background-color: ${colors.nine};
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

export const ButtonText = styled.Text`
  color: ${colors.one};
  font-size: ${metrics.medium};
  padding: 5px 10px;
  font-family: ${fonts.regular};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ErrorIcon = styled(Feather)`
  color: ${colors.nine};
  font-size: ${metrics.medium};
  margin-right: 5px;
`;

export const HeaderBox = styled.View`
  padding: 10px 0 0;
  flex-direction: row;
  align-items: center;
`;

export const ErrorText = styled.Text`
  color: ${colors.two};
  font-size: ${metrics.medium};
  font-family: ${fonts.regularItalic};
`;

export const ContrastText = styled.Text`
  color: ${colors.two};
  font-size: ${metrics.medium};
  font-family: ${fonts.semiBold};
`;

export const ErrorBox = styled.View`
  padding: 5px 0 40px;
  flex-direction: row;
  align-items: center;
`;