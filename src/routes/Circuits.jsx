import styled from 'styled-components';
import { useState } from 'react';

// Lista de pistas com os continentes
const circuits = [
  { id: 1, sedePT: "Berlim", track: 'germany', flagCountry: 'Alemanha', continent: 'Europa' },
  { id: 2, sedePT: "Buenos Aires", track: 'argentina', flagCountry: 'Argentina',  continent: 'América' },
  { id: 3, sedePT: "Cidade do Mexico", track: 'mexico', flagCountry: 'México',  continent: 'América' },
  { id: 4, sedePT: "Londres", track: 'uk', flagCountry: 'Reino Unido', continent: 'Europa' },
  { id: 5, sedePT: "Madrid", track: 'spain', flagCountry: 'Espanha', continent: 'Europa' },
  { id: 6, sedePT: "Miami", track: 'usa', flagCountry: 'EUA', continent: 'América' },
  { id: 7, sedePT: "Monaco", track: 'monaco', flagCountry: 'Mônaco',  continent: 'Europa' },
  { id: 8, sedePT: "Montreal", track: 'canada', flagCountry: 'Canada', continent: 'América' },
  { id: 9, sedePT: "Moscou", track: 'russia', flagCountry: 'Rússia',  continent: 'Europa' },
  { id: 10, sedePT: "Nova Delhi", track: 'india', flagCountry: 'Índia',continent: 'Ásia' },
  { id: 11, sedePT: "Paris", track: 'france', flagCountry: 'França',  continent: 'Europa' },
  { id: 12, sedePT: "Roma", track: 'italy', flagCountry: 'Italia', continent: 'Europa' },
  { id: 13, sedePT: "Santiago", track: 'chile', flagCountry: 'Chile', continent: 'América' },
  { id: 14, sedePT: "São Paulo", track: 'brazil', flagCountry: 'Brasil', continent: 'América' },
  { id: 15, sedePT: "Shangai", track: 'china', flagCountry: 'China', continent: 'Ásia' },
  { id: 16, sedePT: "Tokyo", track: 'japan', flagCountry: 'Japão', continent: 'Ásia' },
  { id: 17, sedePT: "Zurich", track: 'swiss', flagCountry: 'Suiça', continent: 'Europa' },
];

// Função que agrupa as pistas por continente
const groupByContinent = (circuits) => {
  return circuits.reduce((groups, circuit) => {
    const { continent } = circuit;
    if (!groups[continent]) {
      groups[continent] = [];
    }
    groups[continent].push(circuit);
    return groups;
  }, {});
};

// Estilos para o card
const CircuitCard = styled.div`
  perspective: 1000px;
  margin: 2rem;
  width: 300px;
  height: 400px;
  position: relative;

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s ease-in-out;
    transform-style: preserve-3d;
    transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .card-front {
    background: linear-gradient(145deg, rgba(3, 83, 121, 0.8) 20%, rgba(154, 177, 255, 0.7));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    color: white;
  }

  .card-back {
    background: linear-gradient(145deg, rgba(0, 71, 255, 0.8), rgba(255, 255, 255, 0.7));
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }

  .images {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .back-info {
    font-size: 1.2rem;
    color: white;
    text-align: center;
  }
`;

const CircuitImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  transition: filter 0.3s ease;
`;

const FlipButton = styled.button`
 display: flex;
    justify-content: center;
    padding: clamp(6px,1vw,30px);
    border-radius: 1vw;
    margin-top: 1vh;
    background-color: var(--opacity);
    border: clamp(2px,0.2vw,4px) solid var(--opacity) ;
    font-size: clamp(16px, 0.9vw, 20px);
    transition: 0.2s ease;  
    font-style: none;
    text-decoration: none;
    p{
            color: white;
            font-weight: 800;
    }

    &:hover{
    background-color: var(--opacity);
    border: 0.2vw solid var(--color3) ;
    scale: 1.03;
}
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: auto;
  gap: 4rem;
  padding: 6vw 8vw;
`;

const ContinentContainer = styled.div`
  padding-top: 5vh;

  .continent {
    display: flex;
    justify-content: center;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: bold;
    margin-bottom: 3vh;
    letter-spacing: 3px;
    background: var(--color2);
    padding: 1rem;
    color: white;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    margin: 0 32vw;
  }

  .continent:hover {
    transform: translateY(-5px);
  }
`;

const CircuitsList = () => {
  const circuitsByContinent = groupByContinent(circuits);

  // Controla o estado de flip para cada card
  const [flippedCards, setFlippedCards] = useState({});

  // Função para alternar o estado de flip de um card específico
  const handleFlip = (id) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      {Object.keys(circuitsByContinent).map((continent) => (
        <ContinentContainer key={continent}>
          <h2 className='continent'>{continent}</h2>
          <GridContainer>
            {circuitsByContinent[continent].map((circuit) => (
              <CircuitCard
                key={circuit.id}
                flipped={flippedCards[circuit.id]}
                onClick={() => handleFlip(circuit.id)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <h2>{circuit.sedePT}</h2>
                    <div className="images">
                      <CircuitImage
                        src={`/tracks/${circuit.track}.png`}
                        alt={`Imagem da pista de ${circuit.sedePT}`}
                      />
                    </div>
                    <FlipButton>
                      <p>Clique aqui</p> 
                    </FlipButton>
                  </div>
                  <div className="card-back">
                    <div className="back-info">
                      <h2>{circuit.sedePT}</h2>
                      <p>País: {circuit.flagCountry}</p>
                    </div>
                  </div>
                </div>
              </CircuitCard>
            ))}
          </GridContainer>
        </ContinentContainer>
      ))}
    </div>
  );
};

export default CircuitsList;