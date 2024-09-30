import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Animação de rotação e flutuação
const spin = keyframes`
  0% {
    transform: rotate(0deg) translateX(-100%);
  }
  100%{
    transform: rotate(360deg) translateX(0%);
  }
`;

const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Estilo do container principal
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1987db;
  position: relative;
  overflow: hidden;
  z-index: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/bg-cadastro-removed.gif");
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 0;
    filter: blur(8px);
  }
`;

// Estilo da seção do logo
const LogoContainer = styled.div`
  flex: 1.4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    z-index: 2;
    margin: 0 5vw;
    animation: ${spin} 2s linear, ${floating} infinite ease-in-out 3s;
    aspect-ratio: 5/2;
    width: 30vw;
    min-width: 300px;
    height: auto;
    filter: drop-shadow(0 0 1px #cecece);
    pointer-events: none;
  }

  h2 {
    z-index: 2;
    color: white;
    font-size: clamp(16px, 5vw, 40px);
    text-align: center;
    padding: 0 5vw;
  }
`;

// Estilo do carrossel
const CarouselContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  filter: contrast(1.1) saturate(1.1) brightness(0.95);
`;

const Card = styled(motion.div)`
  z-index: 10;
  width: 90%;
  max-width: 500px;
  height: 700px;
  border-radius: 10px;
  display: flex;
  padding: 2vw;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  background: #051236c1;

  .info {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .titulo {
    margin: 10px 0;
    font-size: clamp(20px, 5vw, 40px);
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    text-align: center;
  }

  .desc {
    font-size: clamp(14px, 2vw, 20px);
    text-align: center;
    padding: 10px;
    color: white;
  }

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 1);
    filter: blur(40px), contrast(0.9), saturate(1.1);
    pointer-events: none;
  }
`;

const InfoSection = styled.section`
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
  text-align: center;

  h2 {
    width: 100%;
    font-size: clamp(28px, 4vw, 36px);
    margin-bottom: 40px;
    color: black;
  }
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color1), #1e3b70);
  border-radius: 15px;
  padding: 40px;
  margin: 40px;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: 22px;
    color: #e0f7fa;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #cfd8dc;
  }

  .link {
    display: flex;
    justify-content: center;
    margin: 2vw 2vw 0vw 2vw;
    padding: clamp(6px, 1vw, 30px);
    border-radius: 1vw;
    background-color: var(--opacity);
    border: clamp(2px, 0.2vw, 4px) solid var(--opacity);
    font-size: clamp(8px, 0.5vw, 20px);
    transition: 0.2s ease;
    text-decoration: none;
    color: #ffffff;
  }
  .link:hover {
    background-color: var(--opacity);
    border: 0.2vw solid var(--color1);
    scale: 1.03;
  }
  .h1 {
    margin-right: clamp(8px, 12vw, 240px); /* Margem controlada */
    font-size: clamp(8px, 0.6vw, 20px);
    font-weight: 700;
  }
`;

// Nova seção de curiosidades com ícones
const CuriositiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;

  color: #000000;

  h2 {
    font-size: clamp(26px, 4vw, 38px);
    margin-bottom: 30px;
    text-align: center;
    color: #000000;
  }

  ul {
    list-style: none;
    padding-left: 0;
    max-width: 800px;
    width: 100%;
  }

  li {
    font-size: clamp(16px, 2vw, 18px);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  li::before {
    content: "⚡";
    margin-right: 10px;
    font-size: 20px;
  }
`;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = ["Any where", "Replay", "Champions", "Unplugged", "Best Teams"];
  const desc = [
    "You can watch FE from our mobile App and YouTube channels",
    "Watch some last races replays in our YouTube channel",
    "See the last 10 champions of the FE World Championship",
    "Watch our series from 2 January",
    "The last 10 champion teams of the FE World Championship",
  ];
  const images = [
    "/public/story1.webp",
    "/public/story2.jpeg",
    "/public/story3.jpeg",
    "/public/story4.webp",
    "/public/story6.jpeg",
  ];

  const handleDragEnd = (event, info) => {
    if (info.offset.y < -50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    } else if (info.offset.y > 50) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <>
      <HomeContainer>
        <LogoContainer>
          <img src="/public/formulae-completo-branco.png" alt="Logo" />
        </LogoContainer>
        <CarouselContainer>
          <Card
            key={currentIndex}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="info">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
              />
              <div className="titulo">{cards[currentIndex]}</div>
              <div className="desc">{desc[currentIndex]}</div>
            </div>
          </Card>
        </CarouselContainer>
      </HomeContainer>

      <InfoSection>
        <h2>Informações e Estatísticas</h2>
        <StatCard>
          <h3>Equipes de Destaque</h3>
          <p>Confira as equipes e seu desempenho na temporada.</p>
          <Link to="/Teams" className="link">
            <h1>Equipes</h1>
          </Link>
        </StatCard>
        <StatCard>
          <h3>Onde Estamos?</h3>
          <p>
            Fique por dentro das próximas corridas e eventos dessa temporada.
          </p>
          <Link to="/Races" className="link">
            <h1>Corridas</h1>
          </Link>
        </StatCard>
        <StatCard>
          <h3>Fique por Dentro</h3>
          <p>Veja nossas notícias sobre a temporada, carros e novidades</p>
          <Link to="/News" className="link">
            <h1>Notícias</h1>
          </Link>
        </StatCard>
        <StatCard>
          <h3>Tem 1 minutinho?</h3>
          <p>nós mostraremos uma equipe que combina com você!</p>
          <Link to="/Quiz" className="link">
            <h1>Questionario</h1>
          </Link>
        </StatCard>
      </InfoSection>

      <CuriositiesSection>
        <h2>Sobre nós</h2>
        <ul>
          <li>
            Na Fórmula E, aspiramos acelerar a mudança em direção a um futuro
            elétrico, uma corrida e uma cidade de cada vez.
          </li>
          <li>
            Usando o espetáculo do esporte, estamos enviando uma mensagem
            poderosa e significativa para ajudar a alterar percepções e acelerar
            a mudança para a mobilidade elétrica.
          </li>
          <li>
            Também operamos como um banco de testes para impulsionar o
            desenvolvimento de novas tecnologias necessárias para um futuro
            elétrico e de baixo carbono.
          </li>
          <li>
            Trabalhamos em estreita colaboração com nossas cidades-sede para
            deixar um legado duradouro onde quer que corramos, correndo por um
            futuro mais limpo e mais rápido.
          </li>
          <li>
            A Temporada 9 expandiu as conquistas anteriores para realizar 16
            corridas em circuitos urbanos em 10 cidades diferentes ao redor do
            mundo, buscando sempre o desenvolvimento humano sustentável.
          </li>
        </ul>
      </CuriositiesSection>
    </>
  );
};

export default Home;
