import { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const QuizPage = styled.div`
  
  .h2{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 10vh 3vh 10vh;
    background-color: white;
    font-size: clamp(0.8rem, 4vw, 4rem);
    color: #000000;
  }
  .p{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0vh 2vh;
    background-color: white;
    font-size: clamp(0.8rem, 2vw, 2rem);
    color: #000000;
  }
`
const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vw 0;
  margin-top: -6vh;
  background-color: white;
  color: white;
`;

const QuestionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  font-size: clamp(0.8rem, 1.4vw, 2rem);
  background-color: var(--color1);
  padding: 60px;
  border-radius: 10px;
  min-width: 300px;
  max-width: 42vw;
  width: 100%;
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
  margin-top: 4vh;
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
  background-color: var(--opacity);
  padding: 4vw;
  border-radius: 10px;
  margin-top: -10vh;
  max-width: 600px;
  width: 100%;
  h2{
    font-size: clamp(8px, 1.6vw, 40px);
    margin-bottom: 10px;
    font-weight: 900;
  }
  p{
    text-align: center;
    margin-top: 40px;
    font-size: clamp(8px, 1.2vw, 20px); 
    font-weight: 500;
  }
  h3{
    text-align: center;
    font-size: clamp(8px, 1.8vw, 40px);
    margin: 4vw 1vw;
    font-weight: 900;
    background-color: var(--opacity);
    width: auto;
    padding: 1vw;
    border-radius: 1vw;
  }
  
  a{
    display: flex;
    justify-content: center;  
    margin: 4vw 6vw 0vw 6vw;
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
  a:hover{ 
    background-color: var(--opacity);
    border: 0.2vw solid var(--color2) ;
    scale: 1.03;
}
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
    question: "Qual dessas atividades você mais gosta de fazer?",
    options: [
      { answer: "Cozinhar e experimentar novas receitas", teams: ["DS", "Maserati"] },
      { answer: "Jogar vídeo games e maratonar séries", teams: ["Porsche", "McLaren","Nissan"] },
      { answer: "Explorar atividades ao ar livre", teams: ["Avalanche", "Jaguar","ABT"] },
      { answer: "Ler livros e assistir documentários", teams: ["Mahindra", "Envision","ERT"] }
    ]
  },
  {
    question: "O que mais te instigaria na Fórmula E?",
    options: [
      { answer: "A Inovação tecnológica envolvida no campeonato", teams: ["Nissan", "Jaguar","McLaren"] },
      { answer: "A Sustentabilidade ambiental", teams: ["ERT","ABT","Avalanche"] },
      { answer: "A Competição acirrada entre as equipes", teams: ["DS", "Envision", "Jaguar"] },
      { answer: "A História e tradição do campeonato", teams: ["Mahindra","ERT"] },
      { answer: "Velocidade e desempenho", teams: ["Maserati","Porsche"] }
    ]
  },
  {
    question: "Qual é o seu estilo de vida?",
    options: [
      { answer: "Urbano e Moderno", teams: ["Porsche", "McLaren"] },
      { answer: "Aventureiro", teams: ["Jaguar", "Avalanche","Nissan"] },
      { answer: "Sofisticado e Elegante", teams: ["DS", "Maserati","Envision"] },
      { answer: "Consciente", teams: ["ERT", "ABT","Mahindra"] }
    ]
  },
  {
    question: "Alem da Formula E, qual outro tipo de modalidade que você acompanha?",
    options: [
      { answer: "Equipes da Fórmula 1", teams: ["McLaren", "Porsche","Jaguar","Maserati"] },
      { answer: "Equipes de endurance (WEC, Le Mans)", teams: ["DS", "Envision"] },
      { answer: "Equipes de rali (WRC, Dakar)", teams: ["Mahindra", "Avalanche","Nissan"] },
      { answer: "Outros", teams: ["ABT", "ERT"] }
    ]
  },
  {
    question: "Quais tipos de veículos elétricos mais te atraem?",
    options: [
      { answer: "Os com tecnologia mais avançada", teams: ["Porsche", "Jaguar"] },
      { answer: "Os que priorizam a redução da pegada de carbono", teams: ["ERT", "ABT","Mahindra","Avalanche"] },
      { answer: "Os com mais Desempenho e potência", teams: ["Maserati", "McLaren"] },
      { answer: "Os Econômicos", teams: ["Nissan", "Envision","DS"] }
    ]
  },
  {
    question: "Você se identificaria mais com equipes mais pioneiras e tradicionais ou com novas equipes em ascensão?",
    options: [
      { answer: "Equipes Pioneiras", teams: ["Mahindra","ERT","Envision","Nissan","DS","Avalanche","Maserati"] },
      { answer: "Novas equipes em ascensão", teams: ["ABT", "McLaren","Porsche","Jaguar"] }
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
      { answer: "As equipes que ganham tudo", teams: ["Porsche", "McLaren","Nissan","Envision"] },
      { answer: "Geralmente apoio equipes subestimadas ou azaradas", teams: ["Mahindra", "ERT","ABT"] },
      { answer: "Acompanho várias equipes, independentemente do desempenho", teams: ["DS", "Jaguar","Avalanche","Maserati"] }
    ]
  },
  {
    question: "Qual é a sua visão de sucesso na Fórmula E?",
    options: [
      { answer: "Vitórias e títulos de campeonato", teams: ["Porsche", "Jaguar","DS","Envision"] },
      { answer: "Desenvolvimento de tecnologia inovadora", teams: ["Nissan", "McLaren","Jaguar","Avalanche"] },
      { answer: "Contribuição para a conscientização dos veículos elétricos", teams: ["ERT", "ABT","Mahindra"] }
    ]
  },
  {
    question: "Qual o estilo de música que você mais gosta?",
    options: [
      { answer: "Rock ou Alternativa", teams: ["Porsche", "Jaguar","ABT"] },
      { answer: "Pop ou Eletrônica", teams: ["DS", "Envision","Nissan"] },
      { answer: "Clássica ou Jazz", teams: ["Maserati", "Mahindra","Avalanche "] },
      { answer: "Hip Hop ou Reggae", teams: ["McLaren", "ERT"] }
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

  return (
    <QuizPage>
    <h2 className='h2'>Responda nosso questionario!!</h2>
    <p className='p'>Nele revelaremos uma Equipe que é a sua cara!!</p>
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
