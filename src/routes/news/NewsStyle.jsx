import styled from "styled-components";

// Definição de todos os estilos dentro de um único objeto `Styled`
const Styled = {
  PageContainer: styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 10px;
    }
  `,

  LeftColumn: styled.div`
    width: 70%;
    padding-right: 2vh;
    @media (max-width: 768px) {
      width: 100%;
      padding-right: 0;
    }
  `,

  RightColumn: styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-top: 1vh;
    margin-right: 2vw;
    gap: 40px;
    padding-left: 3vw;
    border-left: 3px solid var(--opacity);

    h2 {
      padding: 1vw 1vh;
      margin-right: 20vw;
      border-radius: 8px;
      font-size: clamp(0.8rem, 1.3vw, 2.5rem);
    }

    img {
      width: 100%;
      aspect-ratio: 5/4;
      height: 50%;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 0px 8px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      width: 100%;
      padding-left: 0;
      margin-right: 0;
      gap: 20px;
    }
  `,

  CarouselStyle: styled.div`
    .carousel-container {
      width: 90%;
      max-width: 80vw;
      height: 24vw;
      margin: auto;
      margin-top: 10px;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 8px;
      border: 4px solid var(--opacity);
    }
    h2{
        padding: 1vw 1vh;
        text-align: center;
        font-size: clamp(0.8rem, 1.3vw, 2.5rem);
    }
    .carousel-container h2 {
      text-align: start;
      padding: 1.4vw 0.2vw;
      font-size: clamp(0.8rem, 1.3vw, 2.5rem);
    }
    p{
      padding: 0vw 0.2vw;
      font-size: clamp(0.6rem, 1vw, 2.5rem);
    }

    .carousel {
      width: 100%;
      height: 85%;
      background-size: cover;
      background-position: center;
      position: relative;
      display: flex;
      align-items: end;
      justify-content: start;
      transition: opacity 0.5s ease-in-out;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .carousel-content {
      position: relative;
      color: white;
      padding: 0.5rem;
      z-index: 1;
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

    @media (max-width: 768px) {
      .carousel-container {
        height: 250px;
      }
    }

    @media (max-width: 480px) {
      .carousel-container {
        height: 200px;
      }
    }
  `,

  NewsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;

    h2 {
      text-align: center;
      padding: 1vw 0;
      width: 100%;
      font-size: clamp(0.8rem, 1.3vw, 2.5rem);
    }
  `,

  NewsCard: styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    padding: 20px;
    margin-bottom: 7vh;
    margin-left: 2vw;
    transition: transform 0.2s ease-in-out;

    &:hover {
    transform: scale(1.01);
  }
  `,

  NewsImage: styled.img`
    width: 100%;
    aspect-ratio: 5/3;
    object-fit: cover;
    overflow: hidden;
    border-radius: 8px;
  `,

  NewsTitle: styled.h3`
    margin-top: 10px;
    font-size: clamp(0.8rem, 1vw, 2rem);
  `,

  NewsDescription: styled.p`
    padding-top: 10px;
    font-size: clamp(0.6rem, 0.8vw, 1.2rem);
    color: #555;
  `,

  RightNewsCard: styled.div`
    background: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,

  RightNewsTitle: styled.h4`
    font-size: clamp(0.5rem, 1vw, 2rem);
    color: #333;
    margin-bottom: 10px;
  `,

  RightNewsDescription: styled.p`
    font-size: clamp(0.4rem, 0.8vw, 1.2rem);
    color: var(--color2);
  `,
};

export default Styled;
