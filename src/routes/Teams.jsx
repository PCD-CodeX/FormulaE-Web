import styled from 'styled-components';
// Exemplo de dados que você forneceu
const teams = [
    {
        name: 'Maserati MSG Racing',
        colorMain: '#2088DD94',
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
        name: 'TAG Porsche Formula E Team',
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
        name: 'Nissan Formula E Team',
        colorMain: '#EE6174FF',
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
        colorMain: '#E61C1C94',
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
        name: 'ERT Formula E Team',
        colorMain: '#262627df',
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
        colorMain: '#868585ac',
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
        colorMain: '#FF7300D8',
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
                lastName: 'Jamie Bird'
            },
        ]
    },
    {
        name: 'DS Penske',
        colorMain: '#FF990096',
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
        colorMain: '#0f962a61',
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
    background: linear-gradient(135deg, ${(props) => props.color} 30%, #ffffff 100%); // pega a cor da equipe e faz um gradiante
    border-radius: 10px;
    margin: 0px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.336);
    color: white;
    min-width: 18vw;
    overflow: hidden; // Esconde a imagem que ultrapassa o tamanho do card
    h2{
        display: flex;
        font-size: clamp(12px, 1.2vw, 30px); // Tamanho da fonte
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
        font-weight: 500;
    }
    i{
        padding-right: 1vw;
    }
    &:hover img {
        transform: translateX(-30px); /* Move a imagem para a esquerda */
    }
`;

const PilotList = styled.ul`
    display: flex;
    margin-top: 1vw;
    margin-left: 2vw;
    font-size: clamp(12px, 0.8vw, 22px);
    font-weight: bold;
    list-style-type: none;
    padding: 0;
`;

const PilotItem = styled.li`
padding: 1vw;
    margin: 10px 0;
`;

const CarImage = styled.img`
    width: clamp(300px, 34vw, 660px); // Tamanho da imagem
    height: auto;
    margin-top: 6vh;
    margin-bottom: 1vh;
    //filter: drop-shadow(0 0 6px rgba(155, 154, 154, 0.507));
    object-fit: cover;
    margin-left: 6vw;
    transform: translateX(0); /* Posição inicial */
    transition: transform 0.5s ease-out; /* Transição suave no retorno */
`;

// Estilo para o grid layout
const GridContainer = styled.div`
    display: grid; // Exibe os cards em grid
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Define o tamanho das colunas
    gap: 6vw 12vw; // Espaçamento entre os cards
    padding: 6vw 16vw; // Espaçamento interno (topo e laterais)
    background: linear-gradient(270deg, rgb(4, 175, 255) 30%, white 100%);
`;
const TeamList = () => {
    return (
        <GridContainer>
            {teams.map((team, index) => (
                <TeamCard key={index} color={team.colorMain}> {/* a funcao 'map' percorre o array da const Teams e retorna um card para cada equipe */}
                    <h2 className='team'>{team.name}</h2> {/* Pega o nome da equipe pelo index definido acima, index nada mais é doq a posição das equipes naquela lista Teams*/}
                    <p>
                        <i className="fi fi-bs-trophy"></i>
                        Vitórias: {team.wins}  {/* Pega o número de vitórias da equipe pelo array definido */}
                    </p>
                    <p>
                        <i className="fi fi-bs-chart-simple"></i>
                        Pódios: {team.podiums} {/* Pega o número de pódios da equipe pelo array definido */}
                    </p>
                    <p>
                        <i className="fi fi-bs-flag-checkered"></i>
                            Corridas: {team.races} {/* Pega o número de corridas da equipe pelo array definido */}
                    </p>
                    <CarImage className='car' src={`/teams-images/${team.imageCar}`} alt={team.name} /> {/* Pega a imagem do carro da equipe pelo array definido */}
                    <PilotList>
                        {team.pilots.map((pilot, i) => (
                            <PilotItem key={i}>
                                #{pilot.number} {pilot.name} {pilot.lastName}
                            </PilotItem>
                        ))}
                    </PilotList>
                </TeamCard>
            ))}
        </GridContainer>

    );
};

export default TeamList;