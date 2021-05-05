import React from 'react';
import { Container, Indicator } from './styles';

import colors from '../../styles/colors';

export default function Loading() {
  return (
    <Container>
      <Indicator size='large' color={colors.five} />
    </Container>
  );
}