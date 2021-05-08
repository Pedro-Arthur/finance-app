import styled from 'styled-components/native';

import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.two};
`;

export const UserName = styled.Text`
  font-size: ${metrics.medium};
  color: ${colors.one};
  font-family: ${fonts.regularItalic};
  margin: 15px 15px 0;
`;

export const UserAccountBalance = styled.Text`
  font-size: ${metrics.big};
  color: ${colors.one};
  font-family: ${fonts.semiBold};
  margin: 5px 15px 15px;
`;

export const LatestMovesTitle = styled.Text`
  font-size: ${metrics.medium};
  color: ${colors.five};
  font-family: ${fonts.regular};
  margin: 0 0 10px 15px;
`;

export const NoResults = styled.Text`
  font-size: ${metrics.medium};
  color: ${colors.two};
  font-family: ${fonts.regular};
`;

export const Background = styled.View`
  background-color: ${colors.one};
  border-radius: 7px;
  margin: 0 15px;
  padding: 10px;
`;

export const List = styled.FlatList`
  background-color: ${colors.one};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 15px;
`;