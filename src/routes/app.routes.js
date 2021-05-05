import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerStyle={{
        backgroundColor: colors.six
      }}
      drawerContentOptions={{
        labelStyle: {
          fontFamily: fonts.semiBold
        },
        activeTintColor: colors.one,
        activeBackgroundColor: colors.five,
        inactiveBackgroundColor: colors.seven,
        inactiveTintColor: colors.eight,
        itemStyle: {
          marginVertical: 5
        }
      }}
    >

      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Perfil" component={Profile} />
      <AppDrawer.Screen name="Registrar" component={New} />

    </AppDrawer.Navigator>
  );
}

export default AppRoutes;