import styled from "styled-components";

export const LiveStyle = styled.section`
:root {
  --color1: #08056d;
  --color2: rgb(0, 155, 255);
  --color3: #00c2ff;
  --color4: #00ffff;
  --color-white: #ffffff;
  --opacity: rgba(0, 71, 255, 0.05);
  --transition: all 0.3s ease;
}

.lives-page {
  padding: 20px;
  background-color: var(--color-white);
  color: var(--color1);
  padding-top: 6vh;
  padding-bottom: 10vh;
}

.lives-header {
  text-align: center;
  margin-bottom: 4vh;
  margin-top: 2vh;
}

.lives-header h1 {
  font-size: clamp(40px,1.4rem,);
  color: var(--color1);
  margin-bottom: 10px;
}

.lives-header p {
  font-size: 1rem;
  color: var(--color2);
}

.live-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

.live-videos {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 65%;
}

.live-card {
  background-color: var(--color-white);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: var(--transition);
}

.live-card:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.live-details {
  padding: 15px;
  background-color: var(--color-white);
  color: var(--color1);
}

.live-details h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--color1);
}

.live-details p {
  font-size: 0.8rem;
  color: var(--color2);
}

/* Sidebar à direita contendo condições da pista e ranking dos pilotos */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;
  margin-right: 20px;
}

/* Card das condições da pista */
.track-conditions-card {
  background-color: var(--opacity);
  color: var(--color1);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all 0.3s ease;
}

.track-conditions-card:hover {
  scale: 1.02;
}

.track-conditions-card h2 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: var(--color2);
}

.condition {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.condition-icon {
  font-size: 1.6rem;
  margin-right: 10px;
}

.condition-info p {
  font-size: 1.1rem;
  margin: 0;
}

/* Card do ranking dos pilotos */
.driver-ranking-card {
  background-color: var(--opacity);
  color: var(--color1);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all 0.3s ease;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.driver-ranking-card:hover {
  scale: 1.02;
}

.driver-ranking-card h2 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: var(--color2);
}

.driver-ranking-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.driver-ranking-list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  border-bottom: 1px solid var(--color4);
  transition: var(--transition);
}

.driver-ranking-list li:last-child {
  border-bottom: none;
}

.driver-ranking-list li:hover {
  background-color: var(--opacity);
}

.position {
  padding: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--color3);
}

.driver-name {
  margin-left: 15px;
  text-align: center;
  font-size: 1rem;
}

.team-name {
  text-align: center;
  margin-left: 15px;
  font-size: 0.9rem;
  color: var(--color2);
}

/* Informações do circuito */

.circuit-info {
  width: 100%;
  min-width: 300px;
  margin-top: 40px;
  padding: 40px;
  background-color: var(--opacity);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.circuit-info h2 {
  font-size: clamp(1rem, 1.2vw, 2rem);
  color: var(--color2);
  margin-bottom: 15px;
}

.circuit-info p {
  padding: 10px;
  font-size: clamp(0.6rem, 0.8vw, 1.2rem);
  color: var(--color3);
}
.circuit-info img{
    width: 100%;
    aspect-ratio: 6/4;
    border-radius: 10px;
    max-width: 600px;
}
@media (max-width: 1108px) {
  .live-content {
    flex-direction: column;
  }

  .live-videos, .right-sidebar {
    width: 100%;
  }


  .circuit-info{
    padding: 20px;
  }
}


`;
