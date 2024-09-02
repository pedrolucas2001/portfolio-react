import React from "react";
import styled, { keyframes } from "styled-components";

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

const ContainerNotFound = styled.div`
    animation: ${fadeIn} 1s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #fff;

    #textNotFound{
        color: #FF4500;
    }

    img{
        width: 400px;
        animation: ${float} 5s ease-in-out infinite; /* Adiciona a animação de flutuação */
    }
`

const Notfound = () =>{
    return(
        <ContainerNotFound>
            <h2>Algo de errado não está certo!</h2>
            <img src="/01_Page_Not_Found-512.png" alt="imgnotfound" />
            <h2 id="textNotFound">Página não localizada!</h2>
        </ContainerNotFound>

    )
}

export default Notfound;
