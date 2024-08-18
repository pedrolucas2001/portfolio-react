import React from "react";
import styled from "styled-components";

const ContainerHome = styled.div`
    font-family: "Trispace", sans-serif;
    font-weight: bold;
    font-size: 28px;
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContainerAbout = styled.div`
    width: 40%;
    height: 100%;
    color: #ffffff;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    padding-left: 5rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span {
            font-size: 40px;
            color: #FFD700; /* Amarelo dourado */
        }
    }

  button {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 0;
    background: linear-gradient(145deg, #4b0082, #00bfff); /* Gradiente azul e roxo */
    color: #ffffff;
    font-family: "Trispace", sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s ease; /* Tempo de transição aumentado para suavizar o efeito */

    &:hover {
        background: linear-gradient(145deg, #00bfff, #4b0082); /* Gradiente invertido no hover */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Sombra no hover */
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
        height: 65%;
        background-image: url("/astronauta-laptop.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        border-radius: 50%; /* Faz a div se tornar um círculo */
    }
`;

const ContainerButton = styled.div`
    width: 220px;
    height: 60px;
    position: relative;
`;

const Home = () => {
    return (
        <ContainerHome>
            <ContainerAbout>
                <div>
                    <p>Olá, sou </p>
                    <span>Pedro Lucas</span>
                    <p>Dev Full Stack</p>
                </div>
                <ContainerButton>
                    <button>
                        Saiba mais sobre mim                        
                    </button>
                </ContainerButton>
            </ContainerAbout>
            <ContainerImg>
                <div></div>
            </ContainerImg>
        </ContainerHome>
    );
};

export default Home;
