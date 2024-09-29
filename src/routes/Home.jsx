import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

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

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LogoContainer = styled.div`
  flex: 1.4; /* Ajusta o tamanho do lado direito baseado na propocao da tela (divida em 2)*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1987db; /* Fundo azul */
  position: relative; /* Permite posicionar o GIF em cima do fundo */
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/bg-cadastro-removed.gif'); /* Caminho do GIF */
    background-size: cover; /* Cobre toda a área */
    background-repeat: no-repeat;
    opacity: 1; /* Ajuste a opacidade conforme necessário */
    z-index: 1; /* Faz o GIF ficar abaixo do texto */
    filter: blur(20px);
    filter: drop-shadow(0 0 5px var(--color1));
  }

  img {
    z-index: 2; /* Faz a logo aparecer acima do GIF */
    margin: 0 5vw;
    animation: ${spin} 2s linear, ${floating} infinite ease-in-out 3s; 
    aspect-ratio: 5/2;
    width: 30vw;
    min-width: 300px;
    height: auto;
    filter: drop-shadow(0 0 1px #cecece);
  }

  h2 {
    z-index: 2; /* Faz o texto aparecer acima do GIF */
    color: white;
    font-size: clamp(16px, 5vw, 40px);
    text-align: center;
    padding: 0 5vw;
  }
`;



const CarouselContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  filter: contrast(1.1) saturate(1.1) brightness(0.95);
`;

const Card = styled(motion.div)`
  width: 90%; 
  max-width: 500px; 
  height: 700px; 
  position: relative; /* Necessário para o ::before funcionar corretamente */
  border-radius: 10px;
  display: flex;
  padding: 2vw;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden; /* Evitar que o ::before saia da área do card */

  /* Adicionando o background blur com ::before */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px); /* Efeito de desfoque */
    background: #000000c1; /* Fundo semi-transparente */
    z-index: 1; /* Fica atrás do conteúdo do card */
  }

  /* O conteúdo do card vai acima do ::before */
  .info {
    position: relative; /* Garante que o conteúdo esteja acima do ::before */
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
    filter: blur(20px);
    filter: contrast(0.9);
    filter: saturate(1.1);
  }
`;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = ['Wacth us any where', 'Replay', 'The Last 10 winners', 'Unplugged', 'Champions'];
  const desc = ['You can wacth FE from our mobile App and youtube channels ', 'wacth some last races replays in our Youtube channel', 'See the last 10 champions of the FE World Championship ', 'Wacht our series from 2 January', 'The last 10 champions Teams of the FE World Championship'];
  const images = [
    '/public/story1.webp',
    '/public/story2.jpeg',
    '/public/story3.jpeg',
    '/public/story4.webp',
    '/public/story6.jpeg',
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
          style={{
            background: `url(${images[currentIndex]})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
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
  );
};

export default Home;
