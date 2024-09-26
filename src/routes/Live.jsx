import { LiveStyle } from "../css/LiveStyle";
import { useEffect, useState } from "react";

const LivesPage = () => {
  // Dados fictícios de lives para mostrar na página
  const livesData = [
    {
      id: 1,
      title: "Corrida ao vivo - ePrix de Monaco",
      description:
        "Acompanhe a emocionante corrida de Fórmula E direto de Monaco.",
      videoUrl: "https://www.youtube.com/embed/XJwYf8Kk9Pk", // Exemplo de URL do vídeo do YouTube
    },
    {
      id: 2,
      title: "Bate-papo com os Pilotos - Pós-Corrida e-Prix de Londres",
      description:
        "Conversa exclusiva com os pilotos após a corrida de Londres.",
      videoUrl: "https://www.youtube.com/embed/JFB9WQ8wOGE", // Exemplo de URL do vídeo do YouTube
    },
  ];

  const [trackConditions, setTrackConditions] = useState({
    temperature: 28,
    humidity: 60,
  });

  // Dados fictícios de ranking dos pilotos
  const [driverRankings] = useState([
    { position: 1, driver: "Lucas di Grassi", team: "Mahindra Racing" },
    { position: 2, driver: "Jean-Éric Vergne", team: "DS Techeetah" },
    { position: 3, driver: "Stoffel Vandoorne", team: "Mercedes-Benz EQ" },
    { position: 4, driver: "Nyck de Vries", team: "Mercedes-Benz EQ" },
    { position: 5, driver: "Mitch Evans", team: "Jaguar TCS Racing" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTemperature = (Math.random() * 5 + 25).toFixed(1);
      const newHumidity = (Math.random() * 10 + 55).toFixed(1);

      setTrackConditions({
        temperature: newTemperature,
        humidity: newHumidity,
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LiveStyle>
      <div className="lives-page">
        <div className="lives-header">
          <h1>Transmissões Ao Vivo</h1>
          <p>Acompanhe as corridas e eventos da Fórmula E ao vivo.</p>
        </div>

        <div className="live-content">
          <div className="live-videos">
            {livesData.map((live) => (
              <div key={live.id} className="live-card">
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="315"
                    src={live.videoUrl}
                    title={live.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="live-details">
                  <h2>{live.title}</h2>
                  <p>{live.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Card de Condições da Pista e Ranking dos Pilotos */}
          <div className="right-sidebar">
            <div className="track-conditions-card">
              <h2>Condições da Pista</h2>
              <div className="condition">
                <div className="condition-icon">&#9728;</div>
                <div className="condition-info">
                  <p>
                    <strong>Temperatura:</strong> {trackConditions.temperature}
                    °C
                  </p>
                </div>
              </div>
              <div className="condition">
                <div className="condition-icon">&#127777;</div>
                <div className="condition-info">
                  <p>
                    <strong>Umidade:</strong> {trackConditions.humidity}%
                  </p>
                </div>
              </div>
            </div>

            {/* Card de Ranking dos Pilotos */}
            <div className="driver-ranking-card">
              <h2>Ranking dos Pilotos</h2>
              <ul className="driver-ranking-list">
                {driverRankings.map((ranking) => (
                  <li key={ranking.position}>
                    <span className="position">{ranking.position}º</span>
                    <span className="driver-name">{ranking.driver}</span>
                    <span className="team-name">({ranking.team})</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Texto sobre o circuito de Mônaco */}
            <div className="circuit-info">
              <h2>Sobre o Circuito de Mônaco</h2>
              <img src={`/public/tracks/monaco.png`} alt="" />
              <p>
                O Circuito de Mônaco é um dos mais tradicionais e icônicos
                traçados do automobilismo mundial. Situado nas ruas de Monte
                Carlo, é famoso por suas curvas desafiadoras e a proximidade das
                barreiras. A pista é estreita, com subidas e descidas
                acentuadas, tornando as ultrapassagens extremamente difíceis e
                exigindo muita habilidade dos pilotos. Durante a corrida, a
                temperatura e a umidade podem variar significativamente,
                afetando o desempenho dos pneus e a aderência na pista. É um
                verdadeiro teste para os pilotos, equipes e máquinas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </LiveStyle>
  );
};

export default LivesPage;
