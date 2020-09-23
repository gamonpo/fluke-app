import React, {useState, useEffect} from 'react';

import {FlatList, Alert} from 'react-native';

import api from '../../services/api';

import {Container, Header, Answer, Title, Description} from './styles';

export default function Informacao({route}) {
  const {item} = route.params;

  const [data, setData] = useState([]);

  try {
    useEffect(() => {
      async function loadData() {
        const response = await api.get(
          `usage/records/?startDate=2020-${item.id}-01&endDate=2020-${item.id}-31`,
        );

        setData(response.data);
      }

      loadData();
    });
  } catch (error) {
    Alert.alert('Não foi possível carregar os dados!');
  }

  const renderItem = ({item}) => (
    <Answer>
      <Description>Data: {item.date}</Description>
      <Description>Internet: {item.data} byte</Description>
      <Description>Ligação: {item.voice}s</Description>
    </Answer>
  );
  return (
    <Container>
      <Header>
        <Title>{item.month}</Title>
      </Header>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
