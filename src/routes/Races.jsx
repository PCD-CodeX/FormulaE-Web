
import styled from 'styled-components';
const tracks = [
  {
    id: 1,
    sedePT: "São Paulo",
    track: 'brazil',
    flagCountry: 'br',
    date: "2024-12-07",
    link:'https://feverup.com/m/195745?thm=487&thm=',
    round: 1,
  },
  {
    id: 2,
    sedePT: "City of Mexico",   
    track: 'mexico',
    flagCountry: 'mx',
    date: "2025-01-11",
    link: 'https://www.ticketmaster.com.mx/abb-fia-formula-e-mexico-boletos/artist/2190270',
    round: 2,
  },
  {
    id: 3,
    sedePT: "Miami",
    track: 'usa',
    flagCountry: 'us',
    date: "2024-10-10",
    link: 'https://www.fiaformulae.com/en/calendar/register/miami',
    round: 3,
  },
  {
    id: 4,
    sedePT: "Monaco",
    track: 'monaco',
    flagCountry: 'mc',
    date: "2025-04-12",
    link: 'https://monaco-eprix.com/en/edition/monaco-e-prix-2025/',
    round: 4,
  },
  {
    id: 5,
    sedePT: "Tokyo",
    track: 'japan',
    flagCountry: 'jp',
    date: "2025-10-15",
    link: 'https://www.fiaformulae.com/en/calendar/register/tokyo',
    round: 5,
  },
  {
    id: 6,
    sedePT: "Shangai",
    track: 'china',
    flagCountry: 'cn',
    date: "2025-05-31",
    link: 'https://www.fiaformulae.com/en/calendar/register/shanghai',   
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
    background: linear-gradient(90deg, rgba(4, 127, 184, 0.582) 20%, var(--color3) 100%); /* Define o gradiente de cor */
    background-size: 400% 400%; /* Define o tamanho do gradiente para permitir movimento */
    margin: 0vh;
    padding: 4vh;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 20vw;
    transition: all 0.3s ease-in;
    border: 7px solid #ebebebf0;

    //numero
    h1{
        display: flex;
        align-items: center;
        justify-content: center;      
        font-size: clamp(14px, 2vw, 30px);
        background-color: rgba(10, 35, 97, 0.2);
        margin-right: clamp(100px,30vh,500px);
        padding: 2vh;
        border-radius: 10px;
        border: clamp(2px,0.2vw,4px) solid var(--opacity) ;

    }

    //nome do circuito
    h2 {
        display: flex;
        align-items: center;
        padding: 2vh;
        border-radius: 4px;
        font-size: clamp(14px, 1.2vw, 26px);
        font-weight: bold;
        margin-bottom: 2vh;
        margin-top: 2vh;
        letter-spacing: 3px;
        font-weight: 900;
    }

    //data
    p {
        font-size: clamp(12px, 1vw, 20px);
        font-weight: 900;
        margin-bottom: 0.6vh;
    }

    //imagem da pista
    .images{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    //hover do card inteiro
    &:hover {
        //scale: 1.01;
        animation: gradientMoveHover 5s ease infinite; /* Acelera a animação no hover */
    }

    //animacao do gradiente
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
    filter: drop-shadow(0 0px 2px rgba(0, 0, 0, 0.6));
    margin-left: 2vw;
    border: 1px solid #ffffff55;
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
    background: white;
`;

const Links = styled.a`
    display: flex;
    justify-content: center;
    padding: clamp(6px,1vw,30px);
    border-radius: 1vw;
    background-color: var(--opacity);
    border: clamp(2px,0.2vw,4px) solid var(--opacity) ;
    font-size: clamp(8px, 0.9vw, 20px);
    transition: 0.2s ease;  
    margin-bottom: 4vh;
    font-style: none;
    text-decoration: none;
    a{
            color: white;
            font-weight: 800;
    }

    &:hover{
    background-color: var(--opacity);
    border: 0.2vw solid var(--color3) ;
    scale: 1.03;
}
    
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
                            <Links href={track.link}>
                            <a>
                                Comprar Ingressos
                            </a>
                            </Links>
                        </div>
                        <p>{new Date(track.date).toLocaleDateString()}</p>
                    </div>
                </TrackCard>
            ))}
        </GridContainer>
    );
};

export default TrackList;
