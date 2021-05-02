import React, { useState } from 'react';
import {
  Background,
  Container,
  Logo,
  InputArea,
  EmailInput,
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

import logoImg from '../../assets/Logo.png';

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [iconName, setIconName] = useState('eye');
  const [isSecure, setIsSecure] = useState(true);

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
      <Container>

        <Logo source={logoImg} />

        <InputArea>
          <EmailInput
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

        <SubmitButton activeOpacity={0.7}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Register>
          <RegisterText>Não tem conta?</RegisterText>

          <RegisterButton activeOpacity={0.7}>
            <RegisterLinkText> Crie aqui </RegisterLinkText>
          </RegisterButton>
        </Register>

      </Container>
    </Background>
  );
}