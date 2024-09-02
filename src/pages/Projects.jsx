import React from "react";
import styled, { keyframes } from "styled-components";
import { PiFileCssBold, PiFileHtmlBold, PiFileJsxBold } from "react-icons/pi";
import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
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

const ContainerProjects = styled.div`
 animation: ${fadeIn} 1s ease-out;
  width: 100%;
  height: 700px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  padding: 2rem 0;
  gap: 5rem;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  padding-inline: 50px;
`;

const Card = styled.div`
  width: 280px;
  min-height: 300px;
  background-color: #fff;
  border-radius: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  h5 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }

  div.icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    div{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      font-size: 1.5rem;
    }

    button {
      width: 50px;
      height: 40px;
      background-color: #6a0dad; /* Cor roxa */
      border-radius: 5px;
      border: none;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #550a8a;
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

const Projects = () => {
  return (
    <>
      <ContainerProjects>
        <h1>Projetos</h1>
        <ContainerCards>
          <Card>
            <h5>Título do projeto</h5>
            <p>Descrição breve do projeto.</p>
            <div className="icons">
              <div>
                <PiFileHtmlBold />
                <PiFileCssBold />
                <RiReactjsLine />
                <RiNodejsLine />
              </div>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </Card>
          <Card>
            <h5>Título do projeto</h5>
            <p>Descrição breve do projeto.</p>
            <div className="icons">
              <div>
                <PiFileHtmlBold />
                <PiFileCssBold />
                <RiReactjsLine />
                <RiNodejsLine />
              </div>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </Card>
          <Card>
            <h5>Título do projeto</h5>
            <p>Descrição breve do projeto.</p>
            <div className="icons">
              <div>
                <PiFileHtmlBold />
                <PiFileCssBold />
                <RiReactjsLine />
                <RiNodejsLine />
              </div>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </Card>
          <Card>
            <h5>Título do projeto</h5>
            <p>Descrição breve do projeto.</p>
            <div className="icons">
              <div>
                <PiFileHtmlBold />
                <PiFileCssBold />
                <RiReactjsLine />
                <RiNodejsLine />
              </div>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </Card>
        </ContainerCards>
      </ContainerProjects>
      {/* <BackButton to="/"><FaHome /></BackButton> */}
    </>
  );
};

export default Projects;
