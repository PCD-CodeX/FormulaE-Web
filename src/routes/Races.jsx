
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
    sedePT: "City of Mexico",   
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
    background: linear-gradient(90deg, #1e33ac 20%, var(--color1) 100%); /* Define o gradiente de cor */
    background-size: 400% 400%; /* Define o tamanho do gradiente para permitir movimento */
    margin: 4vh;
    padding: 4vh;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 20vw;
    transition: all 0.3s ease-in;
    border: 8px solid var(--color2);
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2vh 0vh;       
        font-size: clamp(14px, 1.8vw, 30px);
        background-color: var(--color1);
        margin-right: clamp(100px,30vh,500px);
        padding: 1vh 2vh;
        border-radius: 4px;

    }
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2vh;
        border-radius: 4px;
        font-size: clamp(14px, 1.2vw, 26px);
        font-weight: bold;
        margin-bottom: 2vh;
        margin-top: 2vh;
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
        animation: gradientMoveHover 5s ease infinite; /* Acelera a animação no hover */
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
    width: clamp(40px,3vw,100px);
    border-radius: 4px;
    height: auto;
    filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.4));
    margin-left: 2vw;
`;


const TrackImage = styled.img`
    width: 100%;
    width: clamp(200px,20vw,400px);
    height: auto;
    margin-top: 2vh;
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
    gap: 4vw 12vw;
    padding: 4vw 16vw 6vw 16vw;
    filter: drop-shadow(0 0px 8px rgba(0, 0, 0, 0.3));
`;

const TrackList = () => {
    return (
        <GridContainer>
            {tracks.map((track, index) => (
                <TrackCard key={index}>
                    <div className="hover">
                            <h1> 
                                {track.round}
                            </h1>
                            <h2>{track.sedePT}
                            <FlagImage src={`/flags/${track.flagCountry}.svg`} alt={track.sedePT} />
                            </h2>
                        <div className="images">
                            <TrackImage src={`/tracks/${track.track}.png`} alt={`Imagem da pista de ${track.sedePT}`} />
                        </div>
                        <p>{new Date(track.date).toLocaleDateString()}</p>
                    </div>
                </TrackCard>
            ))}
        </GridContainer>
    );
};

export default TrackList;
