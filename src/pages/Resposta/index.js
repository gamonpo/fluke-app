import React from 'react';

import {Container, Header, Answer, Title, Description} from './styles';

export default function Resposta({route}) {
  const {item} = route.params;

  return (
    <Container>
      <Header>
        <Title>{item.title}</Title>
      </Header>
      <Answer>
        <Description>{item.answer}</Description>
      </Answer>
    </Container>
  );
}
