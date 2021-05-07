import React, { useState, useContext } from 'react';
import { Container } from './styles';
import { Keyboard, Alert } from 'react-native';
import { Input, SubmitButton, SubmitText, InputArea } from '../../pages/SignIn/styles';

import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebase';
import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import Picker from '../../components/Picker';

export default function New() {

  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');

  const navigation = useNavigation();

  const { user: client } = useContext(AuthContext);

  function handleSubmit() {
    Keyboard.dismiss();

    if (isNaN(parseFloat(value))) {
      Alert.alert('Ops!', 'Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type}\nValor: ${parseFloat(value)}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Continuar', onPress: () => handleAdd() }
      ]
    )
  }

  async function handleAdd() {
    let uid = client.uid;

    let key = await firebase.database().ref('historic').child(uid).push().key;
    await firebase.database().ref('historic').child(uid).child(key).set({
      type: type,
      value: parseFloat(value),
      date: format(new Date(), 'dd/MM/yy')
    })

    // Atualizar o saldo.
    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let accountBalance = parseFloat(snapshot.val().accountBalance);

      type === 'despesa' ? accountBalance -= parseFloat(value) : accountBalance += parseFloat(value);

      user.child('accountBalance').set(accountBalance);

    });

    Keyboard.dismiss();
    setValue('');
    navigation.navigate('Home');

  }

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

        <SubmitButton activeOpacity={0.7} onPress={() => handleSubmit()}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>

      </Container>
    </>
  );
}