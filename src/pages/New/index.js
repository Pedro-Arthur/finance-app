import React, { useState, useContext } from 'react';
import { Container } from './styles';
import { Keyboard } from 'react-native';
import { Input, SubmitButton, SubmitText, InputArea } from '../../pages/SignIn/styles';

import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebase';
import { AuthContext } from '../../contexts/auth';
import colors from '../../styles/colors';

import Header from '../../components/Header';
import Picker from '../../components/Picker';
import { Indicator } from '../../components/Loading/styles';
import ModalComponent from '../../components/Modal';

export default function New() {

  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { user: client } = useContext(AuthContext);

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  function handleSubmit() {
    Keyboard.dismiss();

    if (isNaN(parseFloat(value))) {
      setModalVisible1(true);
      return;
    }
    else {
      setModalVisible2(true);
    }
  }

  async function handleAdd() {
    setModalVisible2(false);
    setLoading(true);
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
    setLoading(false);
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
          {loading ? <Indicator size='small' color={colors.one} /> : <SubmitText>Registrar</SubmitText>}
        </SubmitButton>

        <ModalComponent
          visible={modalVisible1}
          modal2={true}
          actionButtonOk={() => setModalVisible1(false)}
        />

        <ModalComponent
          visible={modalVisible2}
          modal1={true}
          value={value}
          type={type}
          actionButtonCancel={() => setModalVisible2(false)}
          actionButtonOk={() => handleAdd()}
        />

      </Container>
    </>
  );
}