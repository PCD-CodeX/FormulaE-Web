
import styled from 'styled-components';
const tracks = [
  {
    id: 1,
    sedePT: "São Paulo",
    track: 'brazil',
    flagCountry: 'br',
    date: "2024-12-07",
    round: 1,
  },
  {
    id: 2,
    sedePT: "Cidade do Mexico",
    track: 'mexico',
    flagCountry: 'mx',
    date: "2025-01-11",
    round: 2,
  },
  {
    id: 3,
    sedePT: "Miami",
    track: 'usa',
    flagCountry: 'us',
    date: "2024-10-10",
    round: 3,
  },
  {
    id: 4,
    sedePT: "Monaco",
    track: 'monaco',
    flagCountry: 'mc',
    date: "2024-10-12",
    round: 4,
  },
  {
    id: 5,
    sedePT: "Tokyo",
    track: 'japan',
    flagCountry: 'jp',
    date: "2024-10-15",
    round: 5,
  },
  {
    id: 6,
    sedePT: "Shangai",
    track: 'china',
    flagCountry: 'cn',
    date: "2024-10-28",
    round: 6,
  }
];

// Estilo para os cards das pistas
const TrackCard = styled.div`
    //colors 
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    text-align: center;
    background: linear-gradient(90deg, var(--color2) 20%, var(--color1) 80%); /* Define o gradiente de cor */
    background-size: 400% 400%; /* Define o tamanho do gradiente para permitir movimento */
    margin: 4vh;
    padding: 4vh;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 16vw;
    transition: all 0.3s ease-in;
    h2 {
        font-size: clamp(14px, 1.5vw, 26px);
        font-weight: bold;
        margin-bottom: 4vh;
        letter-spacing: 3px;
        font-weight: 900;
    }
    p {
        font-size: clamp(12px, 1.1vw, 20px);
        font-weight: 900;
        margin-bottom: 0.6vh;
    }
    .images{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &:hover {
        scale: 1.01;
        animation: gradientMoveHover 7s ease infinite; /* Acelera a animação no hover */
    }
    @keyframes gradientMoveHover {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
`;

// Estilo para as imagens das bandeiras
const FlagImage = styled.img`
    width: clamp(40px,4vw,100px);
    border-radius: 4px;
    height: auto;
    margin-bottom: 4vh;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.4));
`;


const TrackImage = styled.img`
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

const TrackList = () => {
    return (
        <GridContainer>
            {tracks.map((track, index) => (
                <TrackCard key={index}>
                    <div className="hover">
                        <h2>{track.sedePT}</h2>
                        <div className="images">
                            <TrackImage src={`/tracks/${track.track}.png`} alt={`Imagem da pista de ${track.sedePT}`} />
                            <FlagImage src={`/flags/${track.flagCountry}.svg`} alt={track.sedePT} />
                        </div>
                        <p>Rodada: {track.round}</p>
                        <p>Data: {new Date(track.date).toLocaleDateString()}</p>
                    </div>
                </TrackCard>
            ))}
        </GridContainer>
    );
};

export default TrackList;
