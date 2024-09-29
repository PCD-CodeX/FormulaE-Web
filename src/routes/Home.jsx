import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
//keyframe para animação de spin da logo

const spin = keyframes`
  0% {
    transform: rotate(0deg) translateX(-100%);
  }
  100%{
    transform: rotate(360deg) translateX(0%);
  }
`
// Keyframe para animação de flutuação da logo
const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LogoContainer = styled.div`
  flex: 0.4; // Ocupa 40% do espaço
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2978B5;
  img {
    margin: 0 10vw 0 0;
    animation: ${spin} 2s linear , ${floating} infinite ease-in-out 2s; 
    position: absolute;
    width: clamp(24vw,500px, 30vw);
    height: clamp(10vw,200px,12vw);
  }
  h2{
    color: white;
    font-size: clamp(20px, 5vw, 60px);
    display: flex;
    align-items: start;
    text-align: center;
    padding: 0vw 8vw 24vw 8vw;
  }
`;

const CarouselContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Card = styled(motion.div)`
  width: 56%; // Largura do card
  height: 300px; // Altura do card
  background: linear-gradient(135deg, var(--color2) 20%, var(--color3) 60%);
  margin: 10px 0;
  border-radius: 8px;
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  .info{

  }
  .titulo{
    display: flex;
    justify-content:start;
    align-items: start;
    font-size: 4vw;
    padding: 40px 0px 0px 40px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .desc{
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 2vw;
    padding: 40px;
    font-weight: 400;
  }
`;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = ['Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5'];
  const desc = ['Descricao 1', 'Descricao 2', 'Descricao 3', 'Descricao 4', 'Descricao 5'];

  // Adicionando função para manipular o arraste
  const handleDragEnd = (event, info) => {
    if (info.offset.y < -50) {
      // arrastou para cima
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    } else if (info.offset.y > 50) {
      // arrastou para baixo
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // Muda o card a cada 5 segundos

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <>
    <HomeContainer>
      <LogoContainer>
        <h2>Bem-Vindo ao futuro do automobilismo!!</h2>
        <img src="/public/formulae-completo-branco.png" alt="Logo"/>
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
          transition={{ duration: 0.5 }}
        >
          <div className="info">
            <div className='titulo'>
              {cards[currentIndex]}
            </div>
            <div className="desc">
              {desc[currentIndex]}
            </div>
          </div>
        </Card>
      </CarouselContainer>
    </HomeContainer>
    </>
  );
};

export default Home;
