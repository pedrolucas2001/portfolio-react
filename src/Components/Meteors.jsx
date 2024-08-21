// src/components/Meteors.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação dos meteoritos
const moveMeteor = keyframes`
  from {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  to {
    transform: translateX(-150vw) translateY(100vh) rotate(45deg);
  }
`;

const Meteor = styled.div`
  position: absolute;
  width: ${({ size }) => size || '4px'};
  height: ${({ size }) => size || '10px'};
  background: linear-gradient(45deg, #ffcc00, #ff6600);
  border-radius: 50%;
  animation: ${moveMeteor} ${({ duration }) => duration || '2s'} linear infinite;
  top: ${({ top }) => top || '0'};
  left: ${({ left }) => left || '0'};
  opacity: ${({ opacity }) => opacity || 0.8};
  transform-origin: top left;
`;

const MeteorsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const Meteors = () => {
  const meteorsArray = Array.from({ length: 50 }); // Número de meteoritos

  return (
    <MeteorsContainer>
      {meteorsArray.map((_, index) => (
        <Meteor
          key={index}
          size={`${Math.random() * 4 + 2}px`}
          duration={`${Math.random() * 3 + 2}s`}
          top={`${Math.random() * 50}vh`}
          left={`${Math.random() * 100}vw`}
          opacity={Math.random() * 0.5 + 0.5}
        />
      ))}
    </MeteorsContainer>
  );
};

export default Meteors;
