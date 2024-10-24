import { CircuitsStyle } from "./CircuitsStyle";
import { useState } from "react";

// Lista de pistas com os continentes
const circuits = [
  {
    id: 1,
    sedePT: "Berlim",
    track: "germany",
    flagCountry: "Alemanha",
    continent: "Europa",
  },
  {
    id: 2,
    sedePT: "Buenos Aires",
    track: "argentina",
    flagCountry: "Argentina",
    continent: "América",
  },
  {
    id: 3,
    sedePT: "Cidade do Mexico",
    track: "mexico",
    flagCountry: "México",
    continent: "América",
  },
  {
    id: 4,
    sedePT: "Londres",
    track: "uk",
    flagCountry: "Reino Unido",
    continent: "Europa",
  },
  {
    id: 5,
    sedePT: "Madrid",
    track: "spain",
    flagCountry: "Espanha",
    continent: "Europa",
  },
  {
    id: 6,
    sedePT: "Miami",
    track: "usa",
    flagCountry: "EUA",
    continent: "América",
  },
  {
    id: 7,
    sedePT: "Monaco",
    track: "monaco",
    flagCountry: "Mônaco",
    continent: "Europa",
  },
  {
    id: 8,
    sedePT: "Montreal",
    track: "canada",
    flagCountry: "Canada",
    continent: "América",
  },
  {
    id: 9,
    sedePT: "Moscou",
    track: "russia",
    flagCountry: "Rússia",
    continent: "Europa",
  },
  {
    id: 10,
    sedePT: "Nova Delhi",
    track: "india",
    flagCountry: "Índia",
    continent: "Ásia",
  },
  {
    id: 11,
    sedePT: "Paris",
    track: "france",
    flagCountry: "França",
    continent: "Europa",
  },
  {
    id: 12,
    sedePT: "Roma",
    track: "italy",
    flagCountry: "Italia",
    continent: "Europa",
  },
  {
    id: 13,
    sedePT: "Santiago",
    track: "chile",
    flagCountry: "Chile",
    continent: "América",
  },
  {
    id: 14,
    sedePT: "São Paulo",
    track: "brazil",
    flagCountry: "Brasil",
    continent: "América",
  },
  {
    id: 15,
    sedePT: "Shangai",
    track: "china",
    flagCountry: "China",
    continent: "Ásia",
  },
  {
    id: 16,
    sedePT: "Tokyo",
    track: "japan",
    flagCountry: "Japão",
    continent: "Ásia",
  },
  {
    id: 17,
    sedePT: "Zurich",
    track: "swiss",
    flagCountry: "Suiça",
    continent: "Europa",
  },
];

// Função que agrupa as pistas por continente
const groupByContinent = (circuits) => {
  return circuits.reduce((groups, circuit) => {
    const { continent } = circuit;
    if (!groups[continent]) {
      groups[continent] = [];
    }
    groups[continent].push(circuit);
    return groups;
  }, {});
};

const CircuitsList = () => {
  const circuitsByContinent = groupByContinent(circuits);
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <CircuitsStyle>
      <div className="card-conatiner">
        {Object.keys(circuitsByContinent).map((continent) => (
          <div key={continent} className="continent-container">
            <h2 className="continent">{continent}</h2>
            <div className="grid-container">
              {circuitsByContinent[continent].map((circuit) => (
                <div
                  key={circuit.id}
                  className={`circuit-card ${
                    flippedCards[circuit.id] ? "flipped" : ""
                  }`}
                  onClick={() => handleFlip(circuit.id)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <h2>{circuit.sedePT}</h2>
                      <div className="images">
                        <img
                          src={`/tracks/${circuit.track}.png`}
                          alt={`Imagem da pista de ${circuit.sedePT}`}
                          className="circuit-image"
                        />
                      </div>
                      <button className="flip-button">
                        <p>Clique aqui</p>
                      </button>
                    </div>
                    <div className="card-back">
                      <div className="back-info">
                        <h2>{circuit.sedePT}</h2>
                        <p>País: {circuit.flagCountry}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CircuitsStyle>
  );
};

export default CircuitsList;
