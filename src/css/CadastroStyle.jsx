import styled from "styled-components";
import bgImg from "../assets/logos/bg-login.gif";
export const CadastroStyle = styled.section`


:root {
    --color1:#08056d;
    --color2:rgb(0,155,255);
    --color3:#00c2ff;
    --color4:#00ffff;
    --opacity:rgba(0, 71, 255, 0.05);
    --clr-neon: hsl(317 100% 54%);
    --clr-neon: hsl(323 21% 16%);
}
    width: 100%;
    margin-top: 22vh; //distancia ate o nav
    margin-bottom: 14vh; //distancia ate o footer
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    position: relative;

    .content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        position: relative;
        margin-top:-8vw; //altura do cadastro inteiro
        margin-left: clamp(30px, 4vw, 8vw);
        margin-right: clamp(30px, 4vw, 8vw);
        padding-top: 6vw;
        border-radius: 1em;
        font-weight: 700;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        background: linear-gradient(70deg,#f0f0f0 50%,#ffffff); //muda a cor do lado direito
    }

    .form {
        margin-top: -6vw;
    }

    .logo {
        width: clamp(100px, 16vw, 260px); /* Mantém a logo flexível */
        filter: drop-shadow(0 0 0.5rem rgba(201, 200, 200, 0.425));
    }

    .login {
        padding: 4rem 0rem; /* Espaçamento interno */
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        text-align: center;
        position: relative;
        z-index: 10;
        background-color: #fff; /* Adiciona um fundo sem blur ao conteúdo */
        overflow: hidden; /* Garante que nada exceda o container, especialmente o pseudo-elemento */
        box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Opção para um leve sombreado */

}

    .login::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 110%; /* Faz com que o background cubra levemente fora da área visível */
        height: 110%;
        background-image: url(${bgImg});
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1; /* Mantém o fundo atrás do conteúdo */
        filter: blur(4px);
        transform: scale(1.1); /* Evita que o desfoque afete as bordas visíveis */
    
    }


    h1 {
        display: flex;
        flex-direction: column;
        font-size: clamp(0.6rem, 1.6vw, 2rem);
        font-weight: 900;
        letter-spacing: 4px;
        font-weight: bolder;
        color: #ffffff;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.808));

    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-top: 2.4vw; //altura entre os inputs
        margin-left: 6vw;
    }

    label {
        display: flex;
        flex-direction: start;
        margin-bottom: 0.5rem;
        font-size: clamp(8px, 0.9vw, 16px);;
        font-weight: 900;
        letter-spacing: 3px;
        color: #ffffff;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.808));
        margin-top: 1vw;
        margin-right: 6vw;
    }

    input {
        padding: clamp(6px,0.8vw,14px);
        padding-left: 2vw;
        border-radius: 1vw;
        border: none;
        //border: 3px solid var(--opacity);
        font-size: clamp(8px, 0.6vw, 16px);
        margin-top: 1vw;
        margin-right: 6vw;
        font-weight: 900;
        background: white;
        letter-spacing: 2.2px;
        font-style: italic;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.808));
    }

    .error-message {
        color: red;
        font-size: clamp(8px, 1vw, 14px);
        margin-top: 1vw;
        visibility: hidden; /* Exibe apenas se houver erro */
        margin-right: -6vw;
    }

    .my-form__button {
        background-color: rgba(207, 212, 226, 0.35);
        color: #ffffff;
        padding: clamp(6px,0.8vw,30px);
        border: clamp(2px,0.2vw,4px) solid var(--opacity) ;
        border-radius: 1vw;
        font-size: clamp(8px, 0.8vw, 20px);
        transition: 0.2s ease;
        font-weight: 700;
        cursor: pointer;
        outline: none;
        margin-top: 2vh;
    }

    .my-form__button:hover {
        border: clamp(2px,0.2vw,4px) solid var(--color2) ;
        scale: 1.01;
        font-weight: 700;
    }
    .gif-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex-direction: column;
        width: clamp(200px, 30vw, 540px);
        height: clamp(100px, 16.6vw, 310px);
        z-index: 4;
        margin: 6vw 0vw; //ajusta a altura do lado esquerdo inteiro
        filter: drop-shadow(0 0 0.5rem rgba(146, 146, 146, 0.4));
        background-image: mix-blend-mode;
    }
    .gif-container h1{
        position: absolute;
        margin-bottom: 30vw; //ajusta a altura do 'Bem-Vindo'
        padding: 0.4vw;
        color: #000000;
        border-bottom: 4px solid var(--color2);
        filter: drop-shadow(0 0 0.5rem rgba(100, 100, 100, 0.329));
    }

    .gif, .imagem-final {
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        transition: opacity 0.5s ease;
        margin-bottom: clamp(20px,6vw,100px); //ajusta a altura da imagem e do gif
        filter: contrast(80%) saturate(90%);
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.4));
        filter: blur(0.4px);
    }

    .gif {
        opacity: 1;
    }

    .imagem-final {
        opacity: 1; /* Mantenha visível após a exibição */
        position: relative;
    }
    .social-login {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        margin-top: clamp(380px,22vw,400px); //ajusta a altura dos botoes
        gap: 4vh;
        min-width: 50px;
    }

    .google-button,
    .other-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1vw; //espaco entre logo e texto
        padding: 0.6vw 1vw;
        width: 22vw;
        border: none;
        border-radius: 0.8vw;
        font-size: clamp(6px, 0.9vw, 16px);
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
        word-spacing: 0.1vw;
        margin-top: 1vh;
    }

    .google-button {
        background-color: #ffffff;
        color: #000000;
    }

    .google-button:hover {
        background-color: #b3ddcc;
        color: #ffffff;
    }

    .other-button {
        background-color: #ffffff;
        color: #000000;
    }

    .other-button:hover {
        background-color: #a2aacc;
        color: #ffffff
    }

    .google-button img,
    .other-button img {
        width: clamp(1vh,20px,3hv);
        height: clamp(1vh,20px,3vh);
    }
    //media query para ajustar o layout para telas menores


    @media (max-width: 700px) {
        .content {
            flex-direction: column;
            padding: 0vw 2vw;
            box-shadow: 0 0 0px 0 rgba(0, 0, 0, 0);
            background: linear-gradient(0deg,#ffffff,#ffffff); ;
        }
        .login{
            padding: 2rem 1rem;
            border-top-right-radius: 2vh;
            border-bottom-right-radius: 2vh;
            z-index: 1;
        }
        h1{
            margin-bottom: 30px;
        }
        .input-container {
            margin-top: 1vw;
        }
        //sera feito com position absolute pois o gif esta muito grande, dai fica mal identado
        .gif-container h1{
            display: none;
        }
        .social-login{
            z-index: 10;
            margin-right: 0;
            margin-top: 0;
            margin-bottom: clamp(480px,30vw,380px);
            margin-left: clamp(100px,34vw,100px);
        }
        .gif-container .animation{
            display: none;
        }  
        .gif .imagem-final {
            margin-bottom: 2vw;
        }
        .my-form__button{
            margin-top: clamp(150px,16vh,200px);
        }
        .google-button,
        .other-button {
            padding: 1.2vw;
            width: clamp(90px,16vh,200px);
            margin-right: clamp(20px,8vw,0px);
        }
    }
`