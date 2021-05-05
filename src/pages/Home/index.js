import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Home() {

  const { user } = useContext(AuthContext);

  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.name}</Text>
    </View>
  );
}