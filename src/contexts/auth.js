import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  // Função para logar o usuário.
  async function signIn(email, password) {
    setAuthLoading(true);
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase.database().ref('users').child(uid).once('value')
          .then((snapshot) => {
            let data = {
              uid: uid,
              name: snapshot.val().name,
              email: value.user.email,
            };
            setAuthLoading(false);
            setUser(data);
            storageUser(data);
          })
      })
      .catch((error) => {
        setAuthLoading(false);
        setModalVisible1(true);
        setAuthError(error.code);
      });
  }

  // Cadastrar usuário.
  async function signUp(email, password, name) {
    setAuthLoading(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase.database().ref('users').child(uid).set({
          accountBalance: 0,
          name: name
        })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
            };
            setAuthLoading(false);
            setUser(data);
            storageUser(data);
          })
      })
      .catch((error) => {
        setAuthLoading(false);
        setModalVisible2(true);
        setAuthError(error.code);
      });
  }

  async function signOut() {
    setAuthLoading(true);
    await firebase.auth().signOut();
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
        setAuthLoading(false);
      })
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      loading,
      authLoading,
      authError,
      modalVisible1,
      modalVisible2,
      setModalVisible1,
      setModalVisible2,
      signUp,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;