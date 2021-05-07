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
import { Indicator } from '../../components/Loading/styles';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import colors from '../../styles/colors';

export default function Profile() {

  const { user, signOut, authLoading } = useContext(AuthContext);
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
          {authLoading ? <Indicator size='small' color={colors.one} /> : (
            <>
              <ButtonText>Sair</ButtonText>
              <Icon name='log-out' />
            </>
          )}
        </LogOutButton>

      </Container>
    </>
  );
}