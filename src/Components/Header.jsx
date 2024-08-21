import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 7vh;
    font-size: 18px;
    background-color: #0B3D91;
    font-family: 'Orbitron', 'Bebas Neue';


    span{
        width: 35%;
        height: 50%;
        color: #FFD700;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            color: #ffffff;
            cursor: pointer;
        }
    }

    nav{
        width: 35%;
        height: 50%;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    //Para cada filho da div ter 50% da tela sem precisar acessas propriedades de cada filho individualmente
    /* & > * {
    flex: 1;
    width: 50%;
  } */
`

const NavLinks = styled(Link)`
    text-decoration: none;
    color: #FFD700;
    transition: 0.5s;
    &:hover{
        color: #ffffff;
        font-size: 20px;
        cursor: pointer;
    }

`

const Header = () => {
    return (
        <ContainerHeader>
            <span></span>
            <nav>
                <NavLinks to="/">Home</NavLinks>
                <NavLinks to="/about">Sobre</NavLinks>
                <NavLinks to="/">Projetos</NavLinks>
                <NavLinks to="/">Contatos</NavLinks>
            </nav>
        </ContainerHeader>

    )
}

export default Header;