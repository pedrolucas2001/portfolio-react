import React from "react";
import styled, { keyframes } from "styled-components";
import { PiFileCssBold, PiFileHtmlBold, PiFileJsxBold } from "react-icons/pi";
import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

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
  width: 100vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  padding: 2rem 0;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
`;

const Card = styled.div`
  width: 280px;
  height: 300px;
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

    svg {
      font-size: 1.5rem;
      margin-right: 0.5rem;
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

const Projects = () => {
  return (
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
  );
};

export default Projects;
