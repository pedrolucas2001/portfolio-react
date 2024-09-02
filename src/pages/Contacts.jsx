import React from "react";
import styled, { keyframes } from "styled-components";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

// Animação para o efeito de flip ao passar o mouse
const flipHover = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;

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

// Estilo do Container de Contatos
const ContainerContacts = styled.div`
  animation: ${fadeIn} 1s ease-out;
  width: 100%;
  height: 700px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 1rem;
  padding: 1rem;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-wrap: wrap;


    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-inline: 2rem;

      // Estilo para os ícones
      svg {
        font-size: 4rem; /* Aumenta o tamanho dos ícones */
        transition: transform 0.3s;

        &:hover {
            cursor: pointer;
          animation: ${flipHover} 0.6s forwards; /* Aplica a animação de flip ao passar o mouse */
        }
      }
    }
  }
`;

const BackButton = styled(Link)`
    position: fixed;
    bottom: 60px;
    right: 60px;
    background-color: #40325E;
    color: #ffffff;
    font-family: "Trispace", sans-serif;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 16px;
    transition: background 0.3s ease;
    font-size: 1.5rem; /* Aumenta o tamanho dos ícones */


    &:hover {
        background: linear-gradient(145deg, #004c66, #4b0082);
    }
`;

// Componente de Contatos
const Contacts = () => {
    return (
        <>
            <ContainerContacts>
                <h1>Contatos</h1> <br />
                <h3>Entre em contato</h3>
                <h4>Para que possamos conversar mais sobre</h4>
                <br />
                <ul>
                    <li><IoMdMail /></li>
                    <li><IoLogoGithub /></li>
                    <li><IoLogoLinkedin /></li>
                    <li><TiSocialInstagram /></li>
                </ul>

            </ContainerContacts>
            {/* <BackButton to="/"><FaHome /></BackButton> */}
        </>
    );
};

export default Contacts;
