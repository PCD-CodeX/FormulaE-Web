import styled from 'styled-components';

const circuits = [
        {
          id: 1,
          sedePT: "Berlim",
          track: 'germany',
          flagCountry: 'de',
          color: 'black , #d52c1e , #ecc000',
        },
        {
          id: 2,
          sedePT: "Buenos Aires",
          track: 'argentina',
          flagCountry: 'ar',
          color: '#74acde , #f4b41a , white',
        },
        {
          id: 3,
          sedePT: "Cidade do Mexico",
          track: 'mexico',
          flagCountry: 'mx',
          color: ' #1e9f45 , #d20100 , white',
        },
        {
          id: 4,
          sedePT: "Londres",
          track: 'uk',
          flagCountry: 'gb',
          color: '#74acde , #f4b41a , white',
        },
        {
          id: 5,
          sedePT: "Madrid",
          track: 'spain',
          flagCountry: 'es',
          color: '#c7291c , #e7be00 , #c7291c',
        },
        {
          id: 6,
          sedePT: "Miami",
          track: 'usa',
          flagCountry: 'us',
          color: '#d52c1e , #1c34ae , white',
        },
        {
          id: 7,
          sedePT: "Monaco",
          track: 'monaco',
          flagCountry: 'mc',
          color: '#d30002 , white',
        },
        {
          id: 8,
          sedePT: "Montreal",
          track: 'canada',
          flagCountry: 'ca',
          color: ' #b92922 , #d52c1e',
        },
        {
          id: 9,
          sedePT: "Moscou",
          track: 'russia',
          flagCountry: 'ru',
          color: '#0139a5 , #d52a1e',
        },
        {
          id: 10,
          sedePT: "Nova Delhi",
          track: 'india',
          flagCountry: 'in',
          color: '#ff9935 , #138808 , white',
        },
        {
          id: 11,
          sedePT: "Paris",
          track: 'france',
          flagCountry: 'fr',
          color: '#74acde , #f4b41a , white',
        },
        {
          id: 12,
          sedePT: "Roma",
          track: 'italy',
          flagCountry: 'it',
          color: '#ce2d35 , white',
        },
        {
          id: 13,
          sedePT: "Santiago",
          track: 'chile',
          flagCountry: 'cl',
          color: '#ce2a28 , #2806e5',
        },
        {
          id: 14,
          sedePT: "São Paulo",
          track: 'brazil',
          flagCountry: 'br',
          color: '#239e46 , #2b49a3 , #eddc26',
        },
        {
          id: 15,
          sedePT: "Shangai",
          track: 'china',
          flagCountry: 'cn',
          color: '#74acde , #f4b41a , white',
        },
        {
          id: 16,
          sedePT: "Tokyo",
          track: 'japan',
          flagCountry: 'jp',
          color: '#74acde , #f4b41a , white',
        },
        {
            id: 17,
            sedePT: "Zurich",
            track: 'swiss',
            flagCountry: 'sw',
            color: ' white, #d30002',
        }
      ]; 
    const CircuitCard = styled.div`
    //colors 
    border-radius: 10px;
    color: white;
    font-size: 24px;
    text-align: center;
    background: linear-gradient(0deg, var(--color1), var(--color2));
    margin: 4vh;
    padding: 4vh;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 16vw;
    transition: all 0.3s ease;
    h2 {
        font-size: clamp(14px, 1.5vw, 26px);
        font-weight: bold;
        margin-bottom: 4vh;
        letter-spacing: 3px;
        font-weight: 900;
    }
    .images{
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

// Estilo para o grid layout
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: auto;
    grid-template-rows: repeat(2, 1fr); 
    gap: 4vw 10vw;
    padding: 4vw 16vw 6vw 16vw;
    filter: drop-shadow(0 0px 8px rgba(0, 0, 0, 0.3));
`;
    const CircuitsList = () => {
        return (
            <GridContainer>
                {circuits.map((circuit, index) => (
                    <CircuitCard key={index} color={circuit.color}>
                        <div className="hover">
                            <h2>{circuit.sedePT}</h2>
                            <div className="images">
                                <CircuitImage src={`/tracks/${circuit.track}.png`} alt={`Imagem da pista de ${circuit.sedePT}`} />
                            </div>
                        </div>
                    </CircuitCard>
                ))}
            </GridContainer>
        );
    };
export default CircuitsList