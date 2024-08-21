// src/components/Layout.js
import React from 'react';
// import Header from './Header'
// import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Stars from '../Components/Stars';


const ContainerLayout = styled.div`
  width: 100vw; 
  height: auto;
  font-family: "Trispace", sans-serif;
`

const ChildrenContainer = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #0B3D91 0%, #000000 100%);
`;

const Layout = ({ children }) => {
  return (
    <ContainerLayout>
    <Stars />
    {/* <Meteors /> */}
    <Header />
    <ChildrenContainer>{children}</ChildrenContainer>
    <Footer />
  </ContainerLayout>
  );
};

export default Layout;
