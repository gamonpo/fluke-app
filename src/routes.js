import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

import BemVindo from './pages/BemVindo';
import Consumo from './pages/Consumo';
import Historico from './pages/Historico';
import Ajuda from './pages/Ajuda';
import Sair from './pages/Sair';
import Resposta from './pages/Resposta';
import Informacao from './pages/Informacao';

function Menu() {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: 'rgb(40, 40, 40)',
        style: {
          backgroundColor: '#0ef500',
          borderTopWidth: 0,
          height: 60,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Quicksand-Bold',
          fontSize: 11,
          marginTop: 5,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Consumo') {
            iconName = focused ? 'activity' : 'activity';
          } else if (route.name === 'Historico') {
            iconName = focused ? 'list' : 'list';
          } else if (route.name === 'Ajuda') {
            iconName = focused ? 'help-circle' : 'help-circle';
          } else if (route.name === 'Sair') {
            iconName = focused ? 'log-out' : 'log-out';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Screen name="Consumo" component={Consumo} />
      <Screen name="Historico" component={Historico} />
      <Screen name="Ajuda" component={Ajuda} />
      <Screen name="Sair" component={Sair} />
    </Navigator>
  );
}

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Bem Vindo" component={BemVindo} />
        <Screen name="Menu" component={Menu} />
        <Screen name="Resposta" component={Resposta} />
        <Screen name="Informacao" component={Informacao} />
      </Navigator>
    </NavigationContainer>
  );
}
