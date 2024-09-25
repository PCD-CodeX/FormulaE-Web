import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Dados fictícios para o carrossel de notícias
const carouselNews = [
  {
    id: 1,
    title: "Nova temporada da Fórmula E está para começar",
    image: "/carousel/news1.jpg",
    description: "A nova temporada promete muita emoção com novas equipes e pilotos entrando na disputa.",
  },
  {
    id: 2,
    title: "Equipe Jaguar vence campeonato mundial",
    image: "/carousel/news2.jpg",
    description: "A equipe Jaguar dominou a temporada e levou o troféu de campeã da Fórmula E.",
  },
  {
    id: 3,
    title: "Tecnologia de carros elétricos em expansão",
    image: "/carousel/news3.jpg",
    description: "Os avanços na tecnologia de carros elétricos trazem benefícios tanto para a Fórmula E quanto para o mercado automobilístico.",
  }
];

// Dados fictícios para as notícias estáticas no lado esquerdo
const newsList = [
  {
    id: 1,
    title: "Novas Regras para a Temporada de 2025",
    image: "/news/regulations.jpg",
    description: "A temporada de 2025 da Fórmula E terá novas regulamentações que prometem trazer mais competitividade às corridas.",
    content: "A Federação Internacional anunciou novas regras para a próxima temporada...",
  },
  {
    id: 2,
    title: "Pilotos se Preparam para o ePrix de Nova York",
    image: "/news/newyork.jpg",
    description: "Os pilotos estão em preparação intensa para a corrida que ocorrerá nas ruas de Nova York.",
    content: "A expectativa é que o circuito seja um dos mais desafiadores da temporada...",
  },
  {
    id: 3,
    title: "Mahindra Revela Novo Carro para a Temporada",
    image: "/news/mahindra.jpg",
    description: "A equipe Mahindra revelou seu novo modelo de carro para a próxima temporada, trazendo inovações tecnológicas.",
    content: "Com um design mais aerodinâmico e melhoras no desempenho...",
  },
  {
    id: 4,
    title: "Análise: A Evolução da Fórmula E",
    image: "/news/evolution.jpg",
    description: "Desde o início da Fórmula E, a tecnologia e a competitividade evoluíram drasticamente.",
    content: "Neste artigo, analisamos como a Fórmula E evoluiu desde sua criação...",
  }
];

// Novas notícias para o lado direito
const additionalNews = [
  {
    id: 1,
    title: "Corrida Noturna em Berlim Confirmada",
    description: "Pela primeira vez, a Fórmula E terá uma corrida noturna na cidade de Berlim, o que trará um novo desafio aos pilotos.",
  },
  {
    id: 2,
    title: "Novos Patrocinadores Anunciados para 2025",
    description: "Grandes marcas como Tesla e Google anunciaram patrocínios para a próxima temporada da Fórmula E.",
  },
  {
    id: 3,
    title: "Análise Técnica: Os Carros Mais Rápidos de 2024",
    description: "Um estudo detalhado sobre os carros mais rápidos da última temporada da Fórmula E e suas inovações tecnológicas.",
  },
  {
    id: 4,
    title: "Entrevista Exclusiva com Jean-Eric Vergne",
    description: "Em entrevista exclusiva, o piloto Jean-Eric Vergne fala sobre os desafios e as expectativas para a nova temporada.",
  }
];

// Estilos gerais para o layout de duas colunas
const PageContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

// Coluna principal (70% da largura da tela)
const LeftColumn = styled.div`
  width: 70%;
  padding-right: 20px;
`;

// Coluna adicional de notícias (30% da largura da tela)
const RightColumn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Estilos do carrossel
const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
`;

const CarouselItem = styled.div`
  min-width: 100%;
  transition: transform 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
`;

const CarouselTitle = styled.h2`
  color: white;
  margin-top: 20px;
`;

const CarouselDescription = styled.p`
  color: white;
  font-size: 16px;
`;

// Botões de navegação no carrossel
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  ${({ direction }) => (direction === 'left' ? 'left: 10px' : 'right: 10px')};
`;

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const NewsCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  padding: 20px;
  text-align: center;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const NewsTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.5rem;
`;

const NewsDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const RightNewsCard = styled.div`
  background: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RightNewsTitle = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const RightNewsDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const NewsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselNews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselNews.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Tempo de transição automática de 5 segundos
    return () => clearInterval(interval); // Limpar o intervalo ao desmontar o componente
  }, []);

  return (
    <PageContainer>
      {/* Coluna da esquerda (70%) */}
      <LeftColumn>
        {/* Carrossel de Notícias */}
        <CarouselContainer>
          {carouselNews.map((news, index) => (
            <CarouselItem
              key={news.id}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`
              }}
            >
              <CarouselImage src={news.image} alt={news.title} />
              <CarouselTitle>{news.title}</CarouselTitle>
              <CarouselDescription>{news.description}</CarouselDescription>
            </CarouselItem>
          ))}
          <NavButton direction="left" onClick={handlePrev}>&lt;</NavButton>
          <NavButton direction="right" onClick={handleNext}>&gt;</NavButton>
        </CarouselContainer>

        {/* Lista de Notícias (lado esquerdo) */}
        <NewsContainer>
          {newsList.map((news) => (
            <NewsCard key={news.id}>
              <NewsImage src={news.image} alt={news.title} />
              <NewsTitle>{news.title}</NewsTitle>
              <NewsDescription>{news.description}</NewsDescription>
            </NewsCard>
          ))}
        </NewsContainer>
      </LeftColumn>

      {/* Coluna da direita (30%) */}
      <RightColumn>
        {additionalNews.map((news) => (
          <RightNewsCard key={news.id}>
            <RightNewsTitle>{news.title}</RightNewsTitle>
            <RightNewsDescription>{news.description}</RightNewsDescription>
          </RightNewsCard>
        ))}
      </RightColumn>
    </PageContainer>
  );
};

export default NewsPage;
