import React from 'react';

import {FlatList} from 'react-native';

import {Container, Header, Title, Item, Info} from './styles';

export default function Historico({navigation}) {
  const data = [
    {
      id: '02',
      month: 'Fevereiro',
    },
    {
      id: '03',
      month: 'Março',
    },
    {
      id: '04',
      month: 'Abril',
    },
    {
      id: '05',
      month: 'Maio',
    },
    {
      id: '06',
      month: 'Junho',
    },
    {
      id: '07',
      month: 'Julho',
    },
    {
      id: '08',
      month: 'Agosto',
    },
  ];

  const renderItem = ({item}) => (
    <Item onPress={() => navigation.navigate('Informacao', {item: item})}>
      <Info>{item.month}</Info>
    </Item>
  );

  return (
    <Container>
      <Header>
        <Title>Fluke</Title>
      </Header>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
