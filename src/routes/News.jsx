import { useState, useEffect } from "react";
import styled from "styled-components";

// Dados fictícios para o carrossel de notícias
const carouselNews = [
  {
    id: 1,
    title: "Nova temporada da Fórmula E está para começar",
    image: "https://i.ytimg.com/vi/UpHyUsgqcXU/maxresdefault.jpg",
    description:
      "A nova temporada promete muita emoção com novas equipes e pilotos entrando na disputa.",
  },
  {
    id: 2,
    title: "Equipe Porsche vence campeonato mundial",
    image:
      "https://i0.wp.com/watchilove.com/wp-content/uploads/2019/08/Porsche_FE_Car_Sneak_Peak_1920x1080.jpg?resize=1035%2C425&ssl=1",
    description:
      "A equipe Porsche dominou a temporada e levou o troféu de campeã da Fórmula E.",
  },
  {
    id: 3,
    title: "Tecnologia de carros elétricos em expansão",
    image:
      "https://cdn-3.motorsport.com/images/amp/YMdmy4g2/s1000/formula-e-gen-3-evo.jpg",
    description:
      "Os avanços na tecnologia de carros elétricos trazem benefícios tanto para a Fórmula E quanto para o mercado automobilístico.",
  },
];

// Dados fictícios para as notícias estáticas no lado esquerdo
const newsList = [
  {
    id: 1,
    title: "Novas Regras para a Temporada de 2025",
    image: "https://i.ytimg.com/vi/UpHyUsgqcXU/maxresdefault.jpg",
    description:
      "A Federação Internacional anunciou novas regras para a próxima temporada...",
    content:
      "A Federação Internacional anunciou novas regras para a próxima temporada...",
  },
  {
    id: 2,
    title: "Pilotos se Preparam para o ePrix de Nova York",
    image:
      "https://resources.formula-e.pulselive.com/photo-resources/2024/07/04/01cae071-704f-4170-bb27-a665d5aba564/1020259395-LAT-20240629-EPS1013_130619_FC14743.jpg?width=544&height=308",
    description:
      "Os pilotos estão em preparação intensa para a corrida que ocorrerá nas ruas de Nova York.",
    content:
      "A expectativa é que o circuito seja um dos mais desafiadores da temporada...",
  },
  {
    id: 3,
    title: "Mahindra Revela Novo Carro para a Temporada",
    image:
      "https://e-formula.news/files/e-formel/uploads/_NEWS/2024/09%20September/Mahindra-Gen3-Evo-car-testing.jpg",
    description:
      "Mahindra revelou seu novo modelo 'Mahindra M10Electro' para a próxima temporada.",
    content: "Com um design mais aerodinâmico e melhoras no desempenho...",
  },
  {
    id: 4,
    title: "Análise: A Evolução da Fórmula E ao Longo dos Anos",
    image:
      "https://resources.formula-e.pulselive.com/photo-resources/2023/12/19/8de8a274-1b25-4c71-9e93-d642f63e3830/1018732629-LAT-20210724-EPS712_140310SB3_9236-min.jpg?width=544&height=308",
    description:
      "Desde o início da Fórmula E, a tecnologia e a competitividade evoluíram drasticamente.",
    content:
      "Neste artigo, analisamos como a Fórmula E evoluiu desde sua criação...",
  },
];

// Novas notícias para o lado direito
const additionalNews = [
  {
    id: 1,
    title: "Corrida Noturna em Berlim Confirmada",
    description:
      "Pela primeira vez, a Fórmula E terá uma corrida noturna na cidade de Berlim, o que trará um novo desafio aos pilotos.",
  },
  {
    id: 2,
    title: "Novos Patrocinadores Anunciados para 2025",
    description:
      "Grandes marcas como Tesla e Google anunciaram patrocínios para a próxima temporada da Fórmula E.",
  },
  {
    id: 3,
    title: "Análise Técnica: Os Carros Mais Rápidos de 2024",
    description:
      "Um estudo detalhado sobre os carros mais rápidos da última temporada da Fórmula E e suas inovações tecnológicas.",
  },
  {
    id: 4,
    title: "Entrevista Exclusiva com Jean-Eric Vergne",
    description:
      "Em entrevista exclusiva, o piloto Jean-Eric Vergne fala sobre os desafios e as expectativas para a nova temporada.",
  },
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
const CarouselStyle = styled.div`
  .carousel-container {
    width: 100%; /* Largura relativa ao contêiner pai */
    max-width: 60vw; /* Tamanho máximo para telas maiores */
    height: 24vw;
    margin: auto;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    border: 4px solid var(--opacity);
  }

  .carousel {
    width: 100%;
    height: 85%;
    background-size: cover; /* Redimensiona a imagem para cobrir o contêiner */
    background-position: center; /* Centraliza a imagem */
    position: relative;
    display: flex;
    align-items: end;
    justify-content: start;
    opacity: 1;
    transition: opacity 0.5s ease-in-out; /* Transição suave de 0.5 segundos */
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* Filtro escuro */
  }

  .carousel-content {
    position: relative;
    color: white;
    padding: 0.5rem;
    z-index: 1;
    h2 {
      font-size: clamp(0.8rem, 1.4vw, 2rem);
      padding: 0vw 2vw;
      display: flex;
    }
    p {
      font-size: clamp(0.2rem, 0.8vw, 1.2rem);
      display: flex;
      padding: 1vw 2vw;
    }
  }

  .carousel-controls {
    display: flex;
    justify-content: center;
    padding: 1vw 0;
    background-color: white;
    border-top: 2px solid var(--opacity);
  }

  .carousel-controls button {
    margin: 0 0.25rem;
    padding: 0.5vw;
    border: none;
    background-color: var(--opacity);
    border: 2px solid var(--opacity);
    cursor: pointer;
    border-radius: 4px;
  }

  .carousel-controls button.active {
    background-color: var(--color1);
    color: white;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .carousel-container {
      height: 250px; /* Ajusta a altura para tablets e telas menores */
    }

    .carousel-content h2 {
      font-size: 1.25rem; /* Ajusta o tamanho do título */
    }

    .carousel-content p {
      font-size: 0.9rem; /* Ajusta o tamanho do texto */
    }
  }

  @media (max-width: 480px) {
    .carousel-container {
      height: 200px; /* Ajusta a altura para smartphones */
    }

    .carousel-content {
      h2 {
        font-size: 0.8rem;
        font-weight: 900;
      }
      p {
        margin-top: 4px;
        font-size: 0.6rem;
      }
    }

    .carousel-controls button {
      padding: 0.3rem; /* Diminui os botões de controle */
    }
    .carousel.fade-in {
  opacity: 1; /* Aparece suavemente */
}

.carousel.fade-out {
  opacity: 0; /* Some suavemente */
}
  }
`;

//outras noticias abaixo do carrossel
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
  max-width: 500px;
  padding: 20px;
`;

const NewsImage = styled.img`
  width: 100%;
  aspect-ratio: 5/3; // Proporção da imagem
  object-fit: cover; // Redimensiona a imagem para cobrir o contêiner
  overflow: hidden;
  border-radius: 8px;
`;

const NewsTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.2rem;
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
  const [fade, setFade] = useState(true); // Controle de opacidade para a transição

  // Efeito para mudar automaticamente a imagem a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Inicia a transição de saída
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselNews.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // Inicia a transição de entrada
      }, 500); // Tempo da transição (mesmo que o CSS)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageContainer>
      {/* Coluna da esquerda (70%) */}
      <LeftColumn>
        {/* Carrossel de Notícias */}
        <CarouselStyle>
          <div className="carousel-container">
            <div
              className={`carousel ${fade ? "fade-in" : "fade-out"}`}
              style={{
                backgroundImage: `url(${carouselNews[currentIndex].image})`,
              }}
            >
              <div className="overlay"></div>{" "}
              {/* Filtro escuro sobre a imagem */}
              <div className="carousel-content">
                <h2>{carouselNews[currentIndex].title}</h2>
                <p>{carouselNews[currentIndex].description}</p>
              </div>
            </div>
            <div className="carousel-controls">
              {carouselNews.map((_, index) => (
                <button
                  key={index}
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => setCurrentIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </CarouselStyle>

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
