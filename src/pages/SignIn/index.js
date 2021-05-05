import React, { useState, useContext } from 'react';
import {
  Background,
  Container,
  Logo,
  InputArea,
  Input,
  PasswordInput,
  SubmitButton,
  SubmitText,
  Register,
  RegisterButton,
  RegisterText,
  RegisterLinkText,
  Icon,
  PasswordArea,
  IconButton
} from './styles';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import logoImg from '../../assets/Logo.png';

export default function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [iconName, setIconName] = useState('eye');
  const [isSecure, setIsSecure] = useState(true);

  const { signIn } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  function secureControl() {
    if (iconName == 'eye' && isSecure == true) {
      setIconName('eye-off');
      setIsSecure(false);
    }
    else {
      setIconName('eye');
      setIsSecure(true);
    }
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled >

        <Logo source={logoImg} />

        <InputArea>
          <Input
            placeholder='E-mail'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            maxLength={50}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <PasswordArea>
            <PasswordInput
              placeholder='Senha'
              autoCorrect={false}
              secureTextEntry={isSecure}
              maxLength={50}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <IconButton activeOpacity={0.7} onPress={() => secureControl()}>
              <Icon name={iconName} />
            </IconButton>
          </PasswordArea>

        </InputArea>

        <SubmitButton activeOpacity={0.7} onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Register>
          <RegisterText>Não tem conta?</RegisterText>

          <RegisterButton activeOpacity={0.7} onPress={() => navigation.navigate('SignUp')}>
            <RegisterLinkText> Crie aqui </RegisterLinkText>
          </RegisterButton>
        </Register>

      </Container>
    </Background>
  );
}