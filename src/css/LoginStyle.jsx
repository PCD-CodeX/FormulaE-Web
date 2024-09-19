import styled from "styled-components";

export const LoginStyle = styled.section`

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
    margin-top: 22vh;
    margin-bottom: 14vh;
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
        background: linear-gradient(350deg,#f0f0f0,#ffffff); ;
        margin-top: -8vw;
        padding-top: 6vw;
        border-radius: 1em;
        font-weight: 700;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -6vw;
        background: linear-gradient(330deg, var(--color1), var(--color3));
        box-shadow: 0.4vw 0.4vw 0.4vw rgba(88, 88, 88, 0.3);
        border-top-right-radius: 2vh;
        border-bottom-right-radius: 2vh;
        opacity: 0.8;
        color: #ffffff;
        
    }

    .logo {
        width: clamp(100px, 16vw, 260px); /* Mantém a logo flexível */
    }
    .login {
        padding: 2rem 6rem; //usei rem pra manter identado mais facilmente
        border-radius: 1rem;
        text-align: center;
        width: clamp(200px, 40vw, 500px);
        position: relative;
        z-index: 10;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    }

    h1 {
        font-size: clamp(1rem, 1.6vw, 2rem);
        margin-bottom: 6vh;
        font-weight: 900;
        letter-spacing: 4px;
        font-weight: bolder;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.808));
        font-style: normal;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-top: 1vw;
    }

    label {
        margin-bottom: 0.5rem;
        font-size: clampclamp(8px, 0.9vw, 16px);;
        font-weight: 900;
        letter-spacing: 3px;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.808));
    }

    input {
        padding: clamp(6px,0.6vw,14px);
        padding-left: 2vw;
        border-radius: 1vw;
        border: none;
        border: 3px solid var(--opacity);
        font-size: clamp(8px, 0.6vw, 16px);
        margin-top: 1vw;
        font-weight: 900;
        background: white;
        letter-spacing: 3px;
    }

    .error-message {
        color: red;
        font-size: clamp(8px, 1vw, 14px);
        margin-top: 1vw;
        visibility: hidden; /* Exibe apenas se houver erro */
    }

    .my-form__button {
        background-color: var(--opacity);
        color: #ffffff;
        padding: clamp(6px,0.8vw,30px);
        border: clamp(2px,0.2vw,4px) solid var(--color1) ;
        border-radius: 1vw;
        font-size: clamp(8px, 0.8vw, 20px);
        transition: 0.2s ease;
        font-weight: 700;
        cursor: pointer;
        outline: none;
        margin-bottom: 2vh;
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
        z-index: 1;
        margin: 4vw 0vw;
        filter: drop-shadow(0 0 0.5rem rgba(146, 146, 146, 0.4));
        background-image: mix-blend-mode;
    }
    .gif-container h1{
        position: absolute;
        margin-bottom: 26vw;
        padding: 0.4vw;
        color: #000000;
        border-bottom: 4px solid var(--color1);
        filter: drop-shadow(0 0 0.5rem rgba(100, 100, 100, 0.329));
    }

    .gif, .imagem-final {
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        transition: opacity 0.5s ease;
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
        margin-top: -2vh;
        gap: 4vh;
    }

    .google-button,
    .other-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vw; //espaco entre logo e texto
        padding: 0.6vw 1vw;
        width: 18vw;
        border: none;
        border-radius: 0.8vw;
        font-size: clamp(8px, 0.9vw, 16px);
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
        word-spacing: 0.2vw;
    }

    .google-button {
        background-color: #ffffff;
        color: #000000;
    }

    .google-button:hover {
        background-color: #b3ddcc;
    }

    .other-button {
        background-color: #ffffff;
        color: #000000;
    }

    .other-button:hover {
        background-color: #737cd1;
        color: #ffffff
    }

    .google-button img,
    .other-button img {
        width: 20px;
        height: 20px;
    }
    @media (max-width: 1080px) {
        .content {
            flex-direction: column;
            padding-top: 0vw;
        }
        .form {
            margin-top: 0;
        }
        //sera feito com position absolute pois o gif esta muito grande, dai fica mal identado
        .gif-container {
            display: none;
        }
        .login{
            padding: 3rem clamp(20px, 3rem, 50px);
        }
    }
`
