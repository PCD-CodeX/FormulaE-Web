import styled from 'styled-components';

// Container do carrossel
export const CarouselContainer = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

// Componente base para os cards
export const Card = styled.div`
  width: 100%;
  height: 150px;
  background-color: #dde1e7;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  transition: transform ${({ animationDuration }) => animationDuration || '0.5s'} ease-in-out;
`;

// Estilos específicos para cada posição inicial dos cards
export const TopCard = styled(Card)`
  top: -170px; 
`;

export const MiddleCard = styled(Card)`
  top: 175px; 
`;

export const BottomCard = styled(Card)`
  top: 520px; 
`;

// Componentes de movimentação com transform
export const MoveToMiddle = styled(Card)`
  transform: translateY(-345px); 
`;

export const MoveToBottom = styled(Card)`
  transform: translateY(-345px);
`;

export const MoveToTop = styled(Card)`
  transform: translateY(690px); 
`;

// Botões de navegação

