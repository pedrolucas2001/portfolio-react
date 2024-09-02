// src/components/Stars.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de flutuação das estrelas
const float = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
`;

// Estilo para as estrelas
const Star = styled.div.attrs((props) => ({
  style: {
    width: props.$size || '2px',
    height: props.$size || '2px',
    opacity: props.$opacity || 0.8,
    top: props.$top || '0',
    left: props.$left || '0',
    animationDuration: props.$duration || '2s',  // Define a duração da animação inline
  },
}))`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation-name: ${float};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const StarsContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none; /* Faz com que as estrelas não interfiram com cliques ou interações */
`;

const Stars = () => {
  const starsArray = Array.from({ length: 300 }); // Cria um array de 300 estrelas

  return (
    <StarsContainer>
      {starsArray.map((_, index) => (
        <Star
          key={index}
          $size={`${Math.random() * 3 + 1}px`}
          $opacity={Math.random() * 0.7 + 0.3}
          $duration={`${Math.random() * 3 + 2}s`}
          $top={`${Math.random() * 100}vh`}
          $left={`${Math.random() * 100}vw`}
        />
      ))}
    </StarsContainer>
  );
};

export default Stars;
