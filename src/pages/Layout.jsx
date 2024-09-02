import React from 'react';
import Header from '../Components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Stars from '../Components/Stars';

const ContainerLayout = styled.div`
  width: 100%; 
  height: auto;
  font-family: "Trispace", sans-serif;
  overflow-y: hidden;
  overflow-x: auto;
`;

const ChildrenContainer = styled.div`
  overflow-x: auto; /* Evita o scroll horizontal */
  width: 100%;
  height: auto;
  min-height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #01286c 0%, #000000 100%);

  > * {
    position: relative; 
    z-index: 1; 
  }
`;

const Layout = ({ children }) => {
  return (
    <ContainerLayout>
      <Stars />
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </ContainerLayout>
  );
};

export default Layout;
