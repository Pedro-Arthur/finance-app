import React, { useContext } from 'react';
import {
  Container,
  ProfileImage,
  ProfileImageText,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
  RegisterButton,
  ButtonText,
  LogOutButton,
  Icon
} from './styles';
import Header from '../../components/Header';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function Profile() {

  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  let firstLetter = user.name.substr(0, 1);

  return (
    <>
      <Header />

      <Container>
        <ProfileImage>
          <ProfileImageText>{firstLetter}</ProfileImageText>
        </ProfileImage>

        <ProfileInfo>
          <ProfileName>{user && user.name}</ProfileName>
          <ProfileEmail>{user && user.email}</ProfileEmail>
        </ProfileInfo>

        <RegisterButton activeOpacity={0.7} onPress={() => navigation.navigate('Registrar')}>
          <ButtonText>Registrar Gastos</ButtonText>
        </RegisterButton>

        <LogOutButton activeOpacity={0.7} onPress={() => signOut()}>
          <ButtonText>Sair</ButtonText>
          <Icon name='log-out' />
        </LogOutButton>

      </Container>
    </>
  );
}