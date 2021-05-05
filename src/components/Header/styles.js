import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import metrics from '../../styles/metrics';
import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100%;
  padding: 15px;
  background-color: ${colors.two};
`;

export const MenuButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  font-size: ${metrics.giant};
  color: ${colors.one};
`;