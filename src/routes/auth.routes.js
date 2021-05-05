import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>

      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: colors.two,
            borderBottomWidth: 1,
            borderBottomColor: colors.five
          },
          headerTintColor: colors.one,
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
          headerTitleStyle: {
            fontFamily: fonts.regular,
          }
        }}
      />

    </AuthStack.Navigator>
  );
}

export default AuthRoutes;