import React, {useState, useEffect} from 'react';

import {Alert} from 'react-native';

import {Container, Header, Title, Info, Current, MbInfo} from './styles';

import api from '../../services/api';

export default function Consumo() {
  const [data, setData] = useState([]);

  try {
    useEffect(() => {
      async function loadData() {
        const response = await api.get('usage/packageinformation');

        setData(response.data);
      }

      loadData();
    });
  } catch (error) {
    Alert.alert('Não foi possível carregar os dados!');
  }

  const available = data.subscription + data.topup + data.bonus;

  return (
    <Container>
      <Header>
        <Title>Fluke</Title>
      </Header>
      <Info>
        <Current>
          <MbInfo>MB Contratado: {data.subscription}</MbInfo>
        </Current>

        <Current>
          <MbInfo>MB Adicionais: {data.topup}</MbInfo>
        </Current>

        <Current>
          <MbInfo>MB Bônus: {data.bonus}</MbInfo>
        </Current>

        <Current>
          <MbInfo>MB Disponível: {available}</MbInfo>
        </Current>
      </Info>
    </Container>
  );
}
