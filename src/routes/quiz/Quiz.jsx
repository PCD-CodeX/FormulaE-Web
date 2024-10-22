import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuizPage = styled.div`
  .h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 4vh 0vh 4vh;
    background-color: white;
    font-size: clamp(3rem, 2.6vw, 4rem);
    font-weight: 900;
    color: #000000;
    text-align: center;
    font-family: 'GeneralBigFont';
  }
  .p {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4vh clamp(10px,2vh,30px);
    margin-bottom: 8vh;
    background-color: white;
    font-weight: light;
    color: #000000;
    text-align: center;
    font-family: 'HomepageFont';
    font-size: clamp(1.5rem, 1.2vw, 2rem);
  }
`;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vw 0;
  margin-top: -10vh;
  background-color: white;
  color: white;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: clamp(0.8rem, 1.2vw, 2rem);
  background-color: var(--color1);
  padding: clamp(50px,10vh,100px) clamp(10px,6vw,60px);
  border-radius: 10px;
  min-width: 300px;
  max-width: 46vw;
  width: 100%;

  h2{
    margin-top: 20px;
    text-align: center;
    padding: 0 30px;
    font-size: clamp(1rem,2vw,3rem);
  }
  p{
    margin-top: -30px;
    font-size: clamp(18px,1.2em,30px);
  }
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--color3);
  color: #000000;
  border: none;
  font-size: clamp(0.8rem, 1vw, 2rem);
  font-weight: 900;
  padding: 30px 20px;
  margin: 10px;
  margin-top: 6vh;
  margin-bottom: -1vh;
  width: 90%;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color4);
  }
`;

const ResultContainer = styled.div`
  background-color: var(--color1);
  padding: clamp(40px,6vw,200px);
  border-radius: 10px;
  max-width: 700px;
  width: 80%;

  h2 {
    font-size: clamp(14px, 1.4vw, 40px);
    margin-bottom: 20px;
    font-weight: 900;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: clamp(20px,3vh,40px);
    font-size: clamp(10px, 1.2vw, 20px); 
    font-weight: 500;
  }
  h3 {
    text-align: center;
    font-size: clamp(14px, 1.8vw, 40px);
    margin: 4vw 1vw;
    font-weight: 900;
    background-color: var(--opacity);
    width: auto;
    padding: 1vw;
    border-radius: 1vw;
  }
  
  a {
    display: flex;
    justify-content: center;  
    margin: 3vw 6vw 0vw 6vw;
    padding: clamp(6px,1vw,30px);
    border-radius: 1vw;
    background-color: var(--opacity);
    border: clamp(2px,0.2vw,4px) solid var(--opacity) ;
    font-size: clamp(8px, 1vw, 20px);
    color: white;
    transition: 0.2s ease;
    text-decoration: none;
    font-weight: 900;
    
  }
  a:hover { 
    background-color: var(--opacity);
    border: 0.2vw solid var(--color2) ;
    scale: 1.03;
  }
`;

// Estilização da barra de progresso
const ProgressBar = styled.div`
  width: 80%;
  background-color: #e0e0df;
  border-radius: 50px;
  margin: 20px;
`;

const Progress = styled.div`
  width: ${(props) => props.percentage}%;
  height: 20px;
  background-color: var(--color4);
  border-radius: 50px;
  transition: width 0.5s ease-in-out;
`;

const teams = {
  Maserati: 0,
  Porsche: 0,
  Avalanche: 0,
  DS: 0,
  Nissan: 0,
  ERT: 0,
  Jaguar: 0,
  Envision: 0,
  Mahindra: 0,
  McLaren: 0,
  ABT: 0,
};

const questions = [
  {
    question: "Qual é o seu estilo de vida?",
    options: [
      { answer: "Urbano e Moderno", teams: ["Porsche", "McLaren"] },
      { answer: "Aventureiro", teams: ["Jaguar", "Avalanche", "Nissan"] },
      { answer: "Sofisticado e Elegante", teams: ["DS", "Maserati", "Envision"] },
      { answer: "Consciente", teams: ["ERT", "ABT", "Mahindra"] }
    ]
  },
  {
    question: "Qual dessas atividades você mais gosta de fazer?",
    options: [
      { answer: "Cozinhar e experimentar novas receitas", teams: ["DS", "Maserati"] },
      { answer: "Jogar vídeo games e maratonar séries", teams: ["Porsche", "McLaren", "Nissan"] },
      { answer: "Explorar atividades ao ar livre", teams: ["Avalanche", "Jaguar", "ABT"] },
      { answer: "Ler livros e assistir documentários", teams: ["Mahindra", "Envision", "ERT"] }
    ]
  },
  {
    question: "Qual o estilo de música que você mais gosta?",
    options: [
      { answer: "Rock ou Alternativa", teams: ["Porsche", "Jaguar", "ABT"] },
      { answer: "Pop ou Eletrônica", teams: ["DS", "Envision", "Nissan"] },
      { answer: "Clássica ou Jazz", teams: ["Maserati", "Mahindra", "Avalanche"] },
      { answer: "Hip Hop ou Reggae", teams: ["McLaren", "ERT"] }
    ]
  },
  {
    question: "Quais tipos de veículos elétricos mais te atraem?",
    options: [
      { answer: "Os com tecnologia mais avançada", teams: ["Porsche", "Jaguar"] },
      { answer: "Os que priorizam a redução da pegada de carbono", teams: ["ERT", "ABT", "Mahindra", "Avalanche"] },
      { answer: "Os com mais Desempenho e potência", teams: ["Maserati", "McLaren"] },
      { answer: "Os Econômicos", teams: ["Nissan", "Envision", "DS"] }
    ]
  },
  {
    question: "Você gosta de equipes mais tradicionais ou equipes novas?",
    options: [
      { answer: "Equipes Pioneiras", teams: ["Mahindra", "ERT", "Envision", "Nissan", "DS", "Avalanche", "Maserati"] },
      { answer: "Novas equipes em ascensão", teams: ["ABT", "McLaren", "Porsche", "Jaguar"] }
    ]
  },
  {
    question: "O que mais te instigaria na Fórmula E?",
    options: [
      { answer: "A Inovação tecnológica envolvida no campeonato", teams: ["Nissan", "Jaguar", "McLaren"] },
      { answer: "A Sustentabilidade ambiental", teams: ["ERT", "ABT", "Avalanche"] },
      { answer: "A Competição acirrada entre as equipes", teams: ["DS", "Envision", "Jaguar"] },
      { answer: "A História e tradição do campeonato", teams: ["Mahindra", "ERT"] },
      { answer: "Velocidade e desempenho", teams: ["Maserati", "Porsche"] }
    ]
  },
  {
    question: "Além da Formula E, qual outro tipo de modalidade que você acompanha?",
    options: [
      { answer: "Equipes da Fórmula 1", teams: ["McLaren", "Porsche", "Jaguar", "Maserati"] },
      { answer: "Equipes de endurance (WEC, Le Mans)", teams: ["DS", "Envision"] },
      { answer: "Equipes de rali (WRC, Dakar)", teams: ["Mahindra", "Avalanche", "Nissan"] },
      { answer: "Outros", teams: ["ABT", "ERT"] }
    ]
  },
  {
    question: "Que tipo de patrocinadores das equipes você mais reconheceria?",
    options: [
      { answer: "Empresas Tecnologicas", teams: ["Nissan", "McLaren", "ABT"] },
      { answer: "Marcas Automotivas", teams: ["Jaguar", "Maserati", "Porsche"] },
      { answer: "Empresas Sustentáveis", teams: ["ERT", "ABT", "Mahindra"] },
      { answer: "Outros", teams: ["DS", "Envision"] }
    ]
  },
  {
    question: "Para qual tipo de equipe você torceria?",
    options: [
      { answer: "As equipes que ganham tudo", teams: ["Porsche", "McLaren", "Nissan", "Envision"] },
      { answer: "Geralmente apoio equipes subestimadas ou azaradas", teams: ["Mahindra", "ERT", "ABT"] },
      { answer: "Acompanho várias equipes, independentemente do desempenho", teams: ["DS", "Jaguar", "Avalanche", "Maserati"] }
    ]
  },
  {
    question: "Qual é a sua visão de sucesso na Fórmula E?",
    options: [
      { answer: "Vitórias e títulos de campeonato", teams: ["Porsche", "Jaguar", "DS", "Envision"] },
      { answer: "Desenvolvimento de tecnologia inovadora", teams: ["Nissan", "McLaren", "Jaguar", "Avalanche"] },
      { answer: "Contribuição para a conscientização dos veículos elétricos", teams: ["ERT", "ABT", "Mahindra"] }
    ]
  }
];


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [teamScores, setTeamScores] = useState({ ...teams });

  const handleOptionClick = (selectedTeams) => {
    const updatedScores = { ...teamScores };

    // Incrementa os pontos para as equipes selecionadas
    selectedTeams.forEach((team) => {
      updatedScores[team]++;
    });

    setTeamScores(updatedScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getHighestScoringTeam = () => {
    const maxScore = Math.max(...Object.values(teamScores));
    return Object.keys(teamScores).filter((team) => teamScores[team] === maxScore);
  };

  const highestScoringTeams = getHighestScoringTeam();
  const percentageComplete = ((currentQuestion + 1) / questions.length) * 100; // Calcula porcentagem

  return (
    <QuizPage>
      <h2 className='h2'>RESPONDA NOSSO QUESTIONÁRIO</h2>
      <p className='p'>Em 10 questões indicaremos uma Equipe que é a sua cara!!</p>
      <QuizContainer>
        {showResult ? (
          <ResultContainer>
            <h2>Recomendação de Equipe</h2>
            <p>Com base em suas respostas, você se encaixa mais com a(s) equipe(s):</p>
            {highestScoringTeams.map((team) => (
              <div key={team}>
                <h3>{team}</h3>
                <p>{/* Aqui você pode adicionar uma descrição para cada equipe */}</p>
              </div>
            ))}
            <p>Taxa de afinidade: {((teamScores[highestScoringTeams[0]] / (questions.length)) * 100).toFixed(2)}%</p>
            <Link to='/Teams'>Equipes</Link>
          </ResultContainer>
        ) : (
          <QuestionContainer>
            {/* Exibe o número da questão atual */}

            <p>{currentQuestion + 1}/{questions.length}</p>

            {/* Barra de progresso */}
            <ProgressBar>
              <Progress percentage={percentageComplete} />
            </ProgressBar>
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].options.map((option, index) => (
              <OptionButton
                key={index}
                onClick={() => handleOptionClick(option.teams)}
              >
                {option.answer}
              </OptionButton>
            ))}
          </QuestionContainer>
        )}
      </QuizContainer>
    </QuizPage>
  );
};

export default Quiz;
