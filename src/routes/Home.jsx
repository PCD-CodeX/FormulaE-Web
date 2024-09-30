import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

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
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/bg-cadastro-removed.gif');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
    filter: blur(40%);
    filter: drop-shadow(0 0 5px var(--color1));
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
    filter: blur(40px),contrast(0.9),saturate(1.1);
    pointer-events: none;
  }
`;

const InfoSection = styled.section`
  padding: 40px 20px;
  background: linear-gradient(135deg, #091f36, #1e3b70);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
  text-align: center;

  h2 {
    width: 100%;
    font-size: clamp(28px, 4vw, 36px);
    margin-bottom: 40px;
  }
`;

const StatCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  margin: 20px;
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
    content: '⚡';
    margin-right: 10px;
    font-size: 20px;
  }
`;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = ['Any where', 'Replay', 'Champions', 'Unplugged', 'Best Teams'];
  const desc = [
    'You can watch FE from our mobile App and YouTube channels',
    'Watch some last races replays in our YouTube channel',
    'See the last 10 champions of the FE World Championship',
    'Watch our series from 2 January',
    'The last 10 champion teams of the FE World Championship'
  ];
  const images = [
    '/public/story1.webp',
    '/public/story2.jpeg',
    '/public/story3.jpeg',
    '/public/story4.webp',
    '/public/story6.jpeg'
  ];

  const handleDragEnd = (event, info) => {
    if (info.offset.y < -50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    } else if (info.offset.y > 50) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
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

      <CuriositiesSection>
        <h2>Curiosidades sobre a Fórmula E</h2>
        <ul>
          <li>A Fórmula E é o primeiro campeonato de monopostos totalmente elétrico do mundo, com a primeira corrida ocorrendo em 2014.</li>
          <li>Os carros da Fórmula E podem atingir velocidades de até 280 km/h, sendo alimentados exclusivamente por baterias elétricas.</li>
          <li>A categoria promove a sustentabilidade, com corridas realizadas em circuitos urbanos ao redor do mundo para reduzir a pegada de carbono.</li>
          <li>Algumas das maiores fabricantes de automóveis do mundo, como Audi, BMW, Mercedes-Benz e Porsche, já competiram na Fórmula E.</li>
          <li>Os carros de Fórmula E são muito silenciosos comparados aos da Fórmula 1, devido à ausência de motores a combustão, mas o som dos motores elétricos ainda é único.</li>
        </ul>
      </CuriositiesSection>

      <InfoSection>
        <h2>Informações e Estatísticas</h2>
        <StatCard>
          <h3>Equipes de Destaque</h3>
          <p>Confira as últimas classificações das equipes e seu desempenho nas corridas emocionantes desta temporada.</p>
        </StatCard>
        <StatCard>
          <h3>Próximas Corridas</h3>
          <p>Fique por dentro das próximas corridas e eventos, enquanto o mundo da Fórmula E continua a evoluir.</p>
        </StatCard>
      </InfoSection>
    </>
  );
};

export default Home;
