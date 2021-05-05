import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.two};
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.View`
  background-color: ${colors.five};
  border-radius: 100px;
  width: 90px;
  height: 90px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProfileImageText = styled.Text`
  font-size: ${metrics.giant};
  color: ${colors.one};
  font-family: ${fonts.regular};
`;

export const ProfileInfo = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
`;

export const ProfileName = styled.Text`
  font-size: ${metrics.big};
  color: ${colors.one};
  font-family: ${fonts.semiBold};
`;

export const ProfileEmail = styled.Text`
  font-size: ${metrics.small};
  color: ${colors.eight};
  font-family: ${fonts.regular};
`;

export const RegisterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${colors.five};
  width: 90%;
  height: 45px;
  border-radius: 7px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${metrics.medium};
  color: ${colors.one};
`;

export const LogOutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${colors.nine};
  width: 90%;
  height: 45px;
  border-radius: 7px;
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  font-size: ${metrics.large};
  color: ${colors.one};
  margin-left: 10px;
`;
