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
import { Indicator } from '../../components/Loading/styles';
import ModalComponent from '../../components/Modal';

import { AuthContext } from '../../contexts/auth';
import colors from '../../styles/colors';

export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [iconName, setIconName] = useState('eye');
  const [isSecure, setIsSecure] = useState(true);

  const { signUp, authLoading, authError, modalVisible2, setModalVisible2 } = useContext(AuthContext);

  const [modalVisible3, setModalVisible3] = useState(false);

  function handleSignUp() {
    if (!name || name.replace(/\s/g, "") === "") {
      setModalVisible3(true);
      return;
    }
    else {
      signUp(email, password, name);
    }
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
          {authLoading ? <Indicator size='small' color={colors.one} /> : <SubmitText>Cadastrar</SubmitText>}
        </SubmitButton>

        <ModalComponent
          visible={modalVisible2}
          modal3={true}
          error={authError}
          actionButtonOk={() => setModalVisible2(false)}
        />

        <ModalComponent
          visible={modalVisible3}
          modal2={true}
          actionButtonOk={() => setModalVisible3(false)}
        />

      </Container>
    </Background>
  );
}