import styled from 'styled-components/native';

import metrics from '../../styles/metrics';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const NameText = styled.Text`
  font-size: ${metrics.medium};
  color: ${colors.one};
  font-family: ${fonts.semiBold};
  margin-bottom: 25px;
`;

export const WelcomeText = styled.Text`
  font-size: ${metrics.medium};
  color: ${colors.one};
  font-family: ${fonts.regular};
`;

export const LogoImage = styled.Image`
  width: 85px;
  height: 85px;
`;