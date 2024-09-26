import styled from "styled-components";

export const CircuitsStyle = styled.div`
  .circuit-card {
  perspective: 1000px;
  margin: 2rem;
  width: 300px;
  height: 400px;
  position: relative;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s ease-in-out;
  transform-style: preserve-3d;
}

.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-front {
  background: linear-gradient(145deg, rgba(3, 83, 121, 0.8) 20%, rgba(154, 177, 255, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
}

.card-back {
  background: linear-gradient(145deg, rgba(0, 71, 255, 0.8), rgba(255, 255, 255, 0.7));
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.images {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-info {
  font-size: 1.2rem;
  color: white;
  text-align: center;
}

.circuit-image {
  width: 100%;
  max-width: 250px;
  height: auto;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  transition: filter 0.3s ease;
}

.flip-button {
  display: flex;
  justify-content: center;
  padding: clamp(6px,1vw,30px);
  border-radius: 1vw;
  margin-top: 1vh;
  background-color: var(--opacity);
  border: clamp(2px,0.2vw,4px) solid var(--opacity);
  font-size: clamp(16px, 0.9vw, 20px);
  transition: 0.2s ease;
  font-style: none;
  text-decoration: none;
}

.flip-button p {
  color: white;
  font-weight: 800;
}

.flip-button:hover {
  background-color: var(--opacity);
  border: 0.2vw solid var(--color3);
  scale: 1.03;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: auto;
  gap: 4rem;
  padding: 6vw 8vw;
}

.continent-container {
  padding-top: 5vh;
}

.continent {
  display: flex;
  justify-content: center;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: bold;
  margin-bottom: 3vh;
  letter-spacing: 3px;
  background: var(--color2);
  padding: 1rem;
  color: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  margin: 0 32vw;
}

.continent:hover {
  transform: translateY(-5px);
}
`