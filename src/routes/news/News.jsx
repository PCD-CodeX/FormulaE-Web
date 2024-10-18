import { useState, useEffect } from "react";
import Styled from './NewsStyle';  // Importa o objeto unificado

const carouselNews = [  
  {
  id: 1,
  title: "Nova temporada da Fórmula E está para começar",
  image: "https://miro.medium.com/v2/resize:fit:1400/1*J-xFM5IGIsRwBvpDXbqjJQ.png",
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

const NewsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselNews.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Styled.PageContainer>
      <Styled.LeftColumn>
        <Styled.CarouselStyle>
          <h2>Destaques</h2>
          <div className="carousel-container">
            <div
              className={`carousel ${fade ? "fade-in" : "fade-out"}`}
              style={{ backgroundImage: `url(${carouselNews[currentIndex].image})` }}
            >
              <div className="overlay"></div>
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
        </Styled.CarouselStyle>

        <Styled.NewsContainer>
          <h2>Novas Notícias</h2>
          {newsList.map((news) => (
            <Styled.NewsCard key={news.id}>
              <Styled.NewsImage src={news.image} alt={news.title} />
              <Styled.NewsTitle>{news.title}</Styled.NewsTitle>
              <Styled.NewsDescription>{news.description}</Styled.NewsDescription>
            </Styled.NewsCard>
          ))}
        </Styled.NewsContainer>
      </Styled.LeftColumn>

      <Styled.RightColumn>
        <h2>Novidades</h2>
        {additionalNews.map((news) => (
          <Styled.RightNewsCard key={news.id}>
            <Styled.RightNewsTitle>{news.title}</Styled.RightNewsTitle>
            <Styled.RightNewsDescription>{news.description}</Styled.RightNewsDescription>
          </Styled.RightNewsCard>
        ))}
      </Styled.RightColumn>
    </Styled.PageContainer>
  );
};

export default NewsPage;
