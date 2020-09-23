import React from 'react';

import {Alert} from 'react-native';

import {Container} from './styles';

export default function Sair({navigation}) {
  return (
    <Container>
      {Alert.alert('Sair', 'Tem certeza que deseja sair?', [
        {
          text: 'Sim',
          onPress: () => navigation.navigate('Bem Vindo'),
        },
      ])}
    </Container>
  );
}
