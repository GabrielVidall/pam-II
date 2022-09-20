import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: linear-gradient(150deg, #00BFFF, #006400);
  `;
const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 50px;
   
`;

export default () => (
  <Container>
    <Title>Seja Bem-vindo</Title>
  </Container>

);

