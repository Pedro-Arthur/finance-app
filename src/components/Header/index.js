import React from 'react';
import { Container, MenuButton, Icon } from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Header() {

  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton activeOpacity={0.7} onPress={() => navigation.toggleDrawer()}>
        <Icon name='menu' />
      </MenuButton>
    </Container>
  );
}