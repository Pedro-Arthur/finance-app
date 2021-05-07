import React, { useState } from 'react';
import { Container } from './styles';
import { Keyboard } from 'react-native';
import { Input, SubmitButton, SubmitText, InputArea } from '../../pages/SignIn/styles';

import Header from '../../components/Header';
import Picker from '../../components/Picker';

export default function New() {

  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');

  return (
    <>
      <Header />

      <Container>

        <InputArea>
          <Input
            placeholder='Valor'
            keyboardType='numeric'
            maxLength={20}
            returnKeyType='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={(text) => setValue(text)}
          />

          <Picker onChange={setType} type={type} />
        </InputArea>

        <SubmitButton activeOpacity={0.7}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>

      </Container>
    </>
  );
}