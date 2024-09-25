import styled from 'styled-components';

// Lista de pistas com os continentes
const circuits = [
  { id: 1, sedePT: "Berlim", track: 'germany', flagCountry: 'de', color: 'black , #d52c1e , #ecc000', continent: 'Europa' },
  { id: 2, sedePT: "Buenos Aires", track: 'argentina', flagCountry: 'ar', color: '#74acde , #f4b41a , white', continent: 'América' },
  { id: 3, sedePT: "Cidade do Mexico", track: 'mexico', flagCountry: 'mx', color: ' #1e9f45 , #d20100 , white', continent: 'América' },
  { id: 4, sedePT: "Londres", track: 'uk', flagCountry: 'gb', color: '#74acde , #f4b41a , white', continent: 'Europa' },
  { id: 5, sedePT: "Madrid", track: 'spain', flagCountry: 'es', color: '#c7291c , #e7be00 , #c7291c', continent: 'Europa' },
  { id: 6, sedePT: "Miami", track: 'usa', flagCountry: 'us', color: '#d52c1e , #1c34ae , white', continent: 'América' },
  { id: 7, sedePT: "Monaco", track: 'monaco', flagCountry: 'mc', color: '#d30002 , white', continent: 'Europa' },
  { id: 8, sedePT: "Montreal", track: 'canada', flagCountry: 'ca', color: ' #b92922 , #d52c1e', continent: 'América' },
  { id: 9, sedePT: "Moscou", track: 'russia', flagCountry: 'ru', color: '#0139a5 , #d52a1e', continent: 'Europa' },
  { id: 10, sedePT: "Nova Delhi", track: 'india', flagCountry: 'in', color: '#ff9935 , #138808 , white', continent: 'Ásia' },
  { id: 11, sedePT: "Paris", track: 'france', flagCountry: 'fr', color: '#74acde , #f4b41a , white', continent: 'Europa' },
  { id: 12, sedePT: "Roma", track: 'italy', flagCountry: 'it', color: '#ce2d35 , white', continent: 'Europa' },
  { id: 13, sedePT: "Santiago", track: 'chile', flagCountry: 'cl', color: '#ce2a28 , #2806e5', continent: 'América' },
  { id: 14, sedePT: "São Paulo", track: 'brazil', flagCountry: 'br', color: '#239e46 , #2b49a3 , #eddc26', continent: 'América' },
  { id: 15, sedePT: "Shangai", track: 'china', flagCountry: 'cn', color: '#74acde , #f4b41a , white', continent: 'Ásia' },
  { id: 16, sedePT: "Tokyo", track: 'japan', flagCountry: 'jp', color: '#74acde , #f4b41a , white', continent: 'Ásia' },
  { id: 17, sedePT: "Zurich", track: 'swiss', flagCountry: 'sw', color: ' white, #d30002', continent: 'Europa' },
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

// Estilos de componentes
const CircuitCard = styled.div`
    border-radius: 10px;
    color: white;
    font-size: 24px;
    text-align: center;
    background: linear-gradient(125deg, rgb(4, 175, 255) 60%, white 100%);
    margin: 4vh;
    padding: 4vh;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 16vw;
    transition: all 0.3s ease;
    h2 {
    font-size: clamp(14px, 1.2vw, 26px);
    font-weight: bold;
    margin-bottom: 4vh;
    letter-spacing: 3px;
    font-weight: 900;
    padding: 2vh;
    border-radius: 4px;
    }
    .images {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
  &:hover {
    scale: 1.02;
  }
`;

const CircuitImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 4vh;
  border-radius: 10px;
  filter: drop-shadow(0 0px 8px rgba(0, 0, 0, 0.4));
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-template-rows: repeat(2, 1fr); 
  gap: 4vw 10vw;
  padding: 4vw 14vw 0vw 14vw;
  filter: drop-shadow(0 0px 8px rgba(0, 0, 0, 0.3));
`;

const ContinentContainer = styled.div`
    background: linear-gradient(90deg, rgb(4, 66, 95) 5%, var(--color1) 100%);
    padding-top: 10vh; 

    .continent{
    display: flex;
    justify-content: center;
    font-size: clamp(20px, 2vw, 36px);
    font-weight: bold;
    margin-bottom: 4vh;
    letter-spacing: 3px;
    font-weight: 900;
    background: var(--color2);
    padding: 2vh;
    color: white; 
    margin: 0vh clamp(10px,40vw,1100px);
    border-radius: 30px;
    }
`;

const CircuitsList = () => {
  const circuitsByContinent = groupByContinent(circuits);

  return (
    <div>
      {Object.keys(circuitsByContinent).map((continent) => (
        <ContinentContainer key={continent}>
          <h2 className='continent'>{continent}</h2>
          <GridContainer>
            {circuitsByContinent[continent].map((circuit) => (
              <CircuitCard key={circuit.id} color={circuit.color}>
                <div className="hover">
                  <h2>{circuit.sedePT}</h2>
                  <div className="images">
                    <CircuitImage
                      src={`/tracks/${circuit.track}.png`}
                      alt={`Imagem da pista de ${circuit.sedePT}`}
                    />
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
