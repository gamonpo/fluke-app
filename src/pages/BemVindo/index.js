import React from 'react';

import {Container, Header, Title, Button, Enter} from './styles';

import img from '../../assets/pictures/fback.png';

export default function BemVindo({navigation}) {
  return (
    <Container source={img}>
      <Header>
        <Title>Fluke</Title>
      </Header>

      <Button onPress={() => navigation.navigate('Menu')}>
        <Enter>Entrar</Enter>
      </Button>
    </Container>
  );
}
