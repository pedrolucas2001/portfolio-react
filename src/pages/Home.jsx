import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animação de flutuação do astronauta
const float = keyframes`
  0% {
    transform: translateY(0) rotate(3deg);
  }
  50% {
    transform: translateY(-10px) rotate(0deg);
  }
  100% {
    transform: translateY(0) rotate(3deg);
  }
`;

const ContainerHome = styled.div`
  font-size: 28px;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out;
`;

const ContainerAbout = styled.div`
  width: 40%;
  height: 100%;
  color: #ffffff;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    img{
        animation: ${float} 10s ease-in-out infinite; /* Adiciona a animação de flutuação */
    }

    span {
      font-size: 40px;
      color: #FFD700; 
    }
  }
`;

const ContainerImg = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 65%;
    aspect-ratio: 1 / 1; /* Mantém a proporção 1:1 para garantir o círculo perfeito */
    background-image: url("/img_fundo_astronatuta.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    min-width: 150px; 
    min-height: 150px;
    animation: ${float} 10s ease-in-out infinite; /* Adiciona a animação de flutuação */
  }
`;

const ContainerButton = styled.div`
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 0;
  background: #40325E;
  color: #ffffff;
  font-family: "Trispace", sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: 1s;

  &:hover {
    background: linear-gradient(145deg, #004c66, #4b0082);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const ButtonToAbout = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
`;

const ContainerET = styled.div`
 div{
    display: flex;
    flex-direction: row;
    align-items: center;
 }
  
  img {
    width: 80px; /* Defina a largura desejada para a imagem */
    height: auto; /* Manter a proporção da imagem */
  }
`;

const Home = () => {
  return (
    <ContainerHome>
      <ContainerAbout>
        <div>
          <ContainerET>
            <div><p>Olá, visitante!</p> <img src="/alien3d.png" alt="ET" /></div> 
          </ContainerET>
          <p>
            Sou <span>&lt;/Pedro&gt;</span>
          </p>
          <p>Desenvolvedor Front-End</p>
        </div>
        <ContainerButton>
          <ButtonToAbout to="/about">Saiba mais</ButtonToAbout>
        </ContainerButton>
      </ContainerAbout>
      <ContainerImg>
        <div></div>
      </ContainerImg>
    </ContainerHome>
  );
};

export default Home;
