import React, { useState, useContext } from 'react';
import {
  Background,
  Container,
  InputArea,
  Input,
  PasswordInput,
  SubmitButton,
  SubmitText,
  Icon,
  PasswordArea,
  IconButton
} from '../SignIn/styles';
import { Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [iconName, setIconName] = useState('eye');
  const [isSecure, setIsSecure] = useState(true);

  const { signUp } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, name);
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

        <InputArea>
          <Input
            placeholder='Nome'
            maxLength={100}
            value={name}
            autoCapitalize='words'
            onChangeText={(text) => setName(text)}
          />

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

        <SubmitButton activeOpacity={0.7} onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>
    </Background>
  );
}