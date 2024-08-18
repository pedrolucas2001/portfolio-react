// src/components/Footer.js
import React from 'react';
import styled from "styled-components"

const ContainerFooter = styled.footer`
    width: 100vw;
    height: 7vh;
    background-color: #000000;
    color: #C0C0C0;
    padding: 20px;
    font-family: 'Orbitron', 'Bebas Neue';

    p{
        text-align: center;
        color:#C0C0C0;
    }
`

const Footer = () => {
    return (
        <ContainerFooter>
            <p>Desenvolvido por Pedro Lucas &copy; 2024 </p>
        </ContainerFooter>
    );
};

export default Footer;
