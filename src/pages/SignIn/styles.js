import styled from 'styled-components/native';

import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import fonts from '../../styles/fonts';

import { Feather } from '@expo/vector-icons';

export const Background = styled.View`
  flex: 1;
  background-color: ${colors.two};
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 20px;
`;

export const InputArea = styled.View`
  width: 90%;
`;

export const EmailInput = styled.TextInput.attrs({
  placeholderTextColor: colors.four
})`
  background-color: ${colors.three};
  font-family: ${fonts.regular};
  font-size: ${metrics.medium};
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 7px;
  color: ${colors.one};
`;

export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: colors.four
})`
  font-family: ${fonts.regular};
  font-size: ${metrics.medium};
  padding: 10px 0 10px 10px;
  border-radius: 7px;
  color: ${colors.one};
  width: 86%;
`;

export const Icon = styled(Feather)`
  font-size: ${metrics.large};
  color: ${colors.one};
`;

export const PasswordArea = styled.View`
  background-color: ${colors.three};
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  border-radius: 7px;
`;

export const IconButton = styled.TouchableOpacity`
  width: 14%;
  align-items: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${colors.five};
  width: 90%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${metrics.medium};
  color: ${colors.one};
`;

export const Register = styled.View`
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
`;

export const RegisterButton = styled.TouchableOpacity``;

export const RegisterText = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${metrics.small};
  color: ${colors.one};
`;

export const RegisterLinkText = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: ${metrics.small};
  color: ${colors.five};
`;