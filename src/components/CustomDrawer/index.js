import React, { useContext } from 'react';
import { Container, LogoImage, WelcomeText, NameText } from './styles';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import colors from '../../styles/colors';
import { AuthContext } from '../../contexts/auth';
import logoImg from '../../assets/Logo.png';

export default function CustomDrawer(props) {

  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView  {...props}>

      <Container>
        <LogoImage source={logoImg} resizeMode='contain' />

        <WelcomeText>Bem-vindo</WelcomeText>
        <NameText>{user && user.name}</NameText>
      </Container>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label='Sair'
        inactiveBackgroundColor={colors.nine}
        onPress={() => signOut()}
      />

    </DrawerContentScrollView>
  );
}