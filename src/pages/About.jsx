import React from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom";
import { FaCss3Alt, FaHome, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

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

// Animação para o efeito de flip inicial
const flipIn = keyframes`
    from {
        transform: rotateY(90deg);
        opacity: 0;
    }
    to {
        transform: rotateY(0deg);
        opacity: 1;
    }
`;

// Animação para o efeito de flip ao passar o mouse
const flipHover = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(180deg);
    }
`;

const FullContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    animation: ${fadeIn} 1s ease-out;
    h3 {
        font-size: 24px;
    }
`

const ContainerAbout = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
`

const Profile = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 50%;
        aspect-ratio: 1 / 1; /* Mantém a proporção 1:1 para garantir o círculo perfeito */
        background-image: url("/astronauta-laptop.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; /* Ajusta o tamanho da imagem para cobrir toda a área */
        border-radius: 50%;
        min-width: 150px; /* Define um tamanho mínimo para a div */
        min-height: 150px; /* Define um tamanho mínimo para a div */
    }
`

const Text = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-inline: 3rem;
    justify-content: center;
    color: #ffffff;
    font-size: 18px;

    span {
        font-size: 20px;
        font-weight: bold;
    }
    #name {
        color: #FFD700;
    }

    #job {
        color: #E4822F; 
    }
`

const ContainerTechs = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    color: #ffffff;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;

    ul {
        list-style: none;
        display: flex;
        gap: 4rem;
        color: white;
    }

    li {
        font-size: 3rem; /* Aumenta o tamanho dos ícones */
        animation: ${flipIn} 1s ease-out;
        transition: transform 0.3s ease; /* Transição suave para o hover */
    }

    li:hover {
        cursor: pointer;
        animation: ${flipHover} 0.6s ease forwards; /* Efeito de flip ao passar o mouse */
    }
`

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

const About = () => {
    return (
        <FullContainer>
            <ContainerAbout>
                <Profile>
                    <div></div>
                </Profile>
                <Text>
                    <h3>Sobre</h3> <br/>
                    <p>Sou <span id='name'>Pedro Lucas</span></p>
                    <p><span id='job'>Dev Front End</span></p> <br/>
                    <p>Trabalho com desenvolvimento Web desde 2022.</p> <br/>
                    <p>Sou apaixonado por transformar ideias em realidade digital.</p> <br />
                    <p>Em constante aprendizado, dedicado a melhorar e manter aplicações web, com foco na experiência do usuário.</p>
                </Text>
            </ContainerAbout>
            <ContainerTechs>
                <h3>Principais Tecnologias</h3>
                <ul>
                    <li><FaHtml5 /></li>
                    <li><FaCss3Alt /></li>
                    <li><FaJs /></li>
                    <li><FaReact /></li>
                    <li><FaNodeJs /></li>
                    <li><SiMysql /></li>
                </ul>
            </ContainerTechs>
            <BackButton to="/"><FaHome /></BackButton>
        </FullContainer>
    );
};

export default About;
