import styled from 'styled-components';
// Exemplo de dados que você forneceu
const teams = [
    {
        name: 'Mahindra Racing',
        colorMain: '#df1e10',
        imageCar: 'mahindra.png',
        wins: 5,
        podiums: 24,
        races: 131,
        pilots: [
            {
                number: 48,
                name: 'Edoardo',
                lastName: 'Mortara'
            },
            {
                number: 21,
                name: 'Nyck',
                lastName: 'De Vries'
            }
        ]
    },
    {
        name: 'TAG Heuer Porsche Formula E Team',
        colorMain: '#880516',
        imageCar: 'porsche.png',
        wins: 12,
        podiums: 22,
        races: 74,
        pilots: [
            {
                number: 94,
                name: 'Pascal',
                lastName: 'Wehrlein'
            },
            {
                number: 13,
                name: 'Antonio Felix',
                lastName: 'Da Costa'
            }
        ]
    },
    {
        name: 'Nissan Formula E Team',
        colorMain: '#ee6190',
        imageCar: 'nissan.png',
        wins: 19,
        podiums: 47,
        races: 132,
        pilots: [
            {
                number: 22,
                name: 'Oliver',
                lastName: 'Rowland'
            },
            {
                number: 23,
                name: 'Sacha',
                lastName: 'Fenestraz'
            }
        ]
    },
    {
        name: 'Avalanche Andretti Formula E',
        colorMain: '#e22f2f99',
        imageCar: 'andretti.png',
        wins: 11,
        podiums: 37,
        races: 132,
        pilots: [
            {
                number: 1,
                name: 'Jake',
                lastName: 'Dennis'
            },
            {
                number: 17,
                name: 'Norman',
                lastName: 'Nato'
            }
        ]
    },
    {
        name: 'Maserati MSG Racing',
        colorMain: '#3290dd94',
        imageCar: 'maserati.png',
        wins: 10,
        podiums: 27,
        races: 132,
        pilots: [
            {
                number: 18,
                name: 'Jehan',
                lastName: 'Daruvala'
            },
            {
                number: 7,
                name: 'Maximilian',
                lastName: 'Guenther'
            }
        ]
    },
    {
        name: 'ABT CUPRA Formula E Team',
        colorMain: '#0b3c75c1',
        imageCar: 'cupra.png',
        wins: 14,
        podiums: 47,
        races: 115,
        pilots: [
            {
                number: 11,
                name: 'Lucas Di Grassi',
                lastName: 'Frijns'
            },
            {
                number: 51,
                name: 'Nico',
                lastName: 'Mueller'
            },
        ]
    },
    {
        name: 'ERT Formula E Team',
        colorMain: '#34363ace',
        imageCar: 'ert.png',
        wins: 2,
        podiums: 6,
        races: 132,
        pilots: [
            {
                number: 33,
                name: 'Dan',
                lastName: 'Ticktum'
            },
            {
                number: 3,
                name: 'Sérgio',
                lastName: 'Sette Cámara'
            }
        ]
    },
    {
        name: 'Jaguar TCS Racing',
        colorMain: '#000000ae',
        imageCar: 'jaguar.png',
        wins: 16,
        podiums: 46,
        races: 111,
        pilots: [
            {
                number: 9,
                name: 'Mitch',
                lastName: 'Evans'
            },
            {
                number: 37,
                name: 'Nick',
                lastName: 'Cassidy'
            }
        ]
    },
    {
        name: 'Neom McLaren Formula E Team',
        colorMain: '#ff8000b9',
        imageCar: 'mclaren.png',
        wins: 8,
        podiums: 26,
        races: 87,
        pilots: [
            {
                number: 5,
                name: 'Jake',
                lastName: 'Hughes'
            },
            {
                number: 8,
                name: 'Sam',
                lastName: 'Bird'
            },
        ]
    },
    {
        name: 'DS Penske',
        colorMain: '#ff990061',
        imageCar: 'ds_penske.png',
        wins: 3,
        podiums: 17,
        races: 132,
        pilots: [
            {
                number: 25,
                name: 'Jean-Eric',
                lastName: 'Vergne'
            },
            {
                number: 2,
                name: 'Stoffel',
                lastName: 'Vandoorne'
            }
        ]
    },
    {
        name: 'Envision Racing',
        colorMain: '#0ecf3563',
        imageCar: 'envision.png',
        wins: 16,
        podiums: 53,
        races: 132,
        pilots: [
            {
                number: 4,
                name: 'Robin',
                lastName: 'Frijns'
            },
            {
                number: 16,
                name: 'Sebastien',
                lastName: 'Buemi'
            }
        ]
    }
    // Adicione todas as outras equipes aqui...
];

// Componente de estilo para o Card
const TeamCard = styled.div`
    background: linear-gradient(220deg, ${(props) => props.color} 10%, #131235ae 100%);
    border-radius: 10px;
    margin: 0px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    color: white;
    min-width: 18vw;
    overflow: hidden;
    h2{
        display: flex;
        font-size: clamp(12px, 1.2vw, 30px);
        font-weight: bold;
        padding: 1vw 0.8vw;
        margin-right: 1vw;
    }
    h3{
        display: flex;
    }
    p{
        display: flex;
        margin: 1vw 1vw;
        font-size: clamp(12px, 1vw, 30px);
        font-style: italic;
    }
    i{
        padding-right: 1vw;
    }
    &:hover img {
        transform: translateX(-30px); /* Move a imagem para a esquerda */
        transition: transform 0.3s ease-in; /* Transição suave */
    }
`;

const CarImage = styled.img`
    width: clamp(300px, 34vw, 660px);
    height: auto;
    margin-top: 1vh;
    margin-bottom: 1vh;
    filter: drop-shadow(0 0 10px rgba(41, 41, 41, 0.205));
    object-fit: cover;
    margin-left: 6vw;
    transform: translateX(0); /* Posição inicial */
    transition: transform 0.5s ease; /* Transição suave no retorno */
`;

{/*const PilotList = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    z-index: 1;
`;

const PilotItem = styled.li`
    display: flex;  
    margin: 5px 0;
`;*/}

// Estilo para o grid layout
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 6vw 16vw;
    padding: 6vw 12vw;
`;
const TeamList = () => {
    return (
        <GridContainer>
            {teams.map((team, index) => (
                <TeamCard key={index} color={team.colorMain}>
                    <h2 className='team'>{team.name}</h2>
                    <p>
                        <i className="fi fi-bs-trophy"></i>
                        Vitórias: {team.wins}
                    </p>
                    <p>
                        <i className="fi fi-bs-chart-simple"></i>
                        Pódios: {team.podiums}
                    </p>
                    <p>
                        <i className="fi fi-bs-flag-checkered"></i>
                            Corridas: {team.races}
                    </p>
                    {/*<h3>Pilotos:</h3>*/}
                    {/*<PilotList>
                        {team.pilots.map((pilot, i) => (
                            <PilotItem key={i}>
                                #{pilot.number} {pilot.name} {pilot.lastName}
                            </PilotItem>
                        ))}
                        </PilotList>*/}
                        <CarImage className='car' src={`/teams-images/${team.imageCar}`} alt={team.name} />
                </TeamCard>
            ))}
        </GridContainer>
    );
};

export default TeamList;