import styled from "styled-components";

export const CadastroStyle = styled.div`

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
        background: linear-gradient(330deg, rgba(0, 50, 176, 0.75) 20%,#ffffff) ;
        margin-top: -8vw;
        padding-top: 6vw;
        border-radius: 1em;
        font-weight: 700;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        width: 40vw; //largura da tela
    }

    .form {
        margin-top: -6vw;
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
        margin: 16vw 0vw; //ajusta a altura do lado esquerdo inteiro
        filter: drop-shadow(0 0 0.5rem rgba(51, 51, 51, 0.4));
        background-image: mix-blend-mode;
    }
    .gif-container h1{
        position: absolute;
        margin-bottom: 48vw; //ajusta a altura do 'Sing Up'
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
        margin-top: 0vw; //ajusta a altura da imagem e do gif
    }

    .gif {
        opacity: 1;
    }

    .imagem-final {
        opacity: 1; /* Mantenha visível após a exibição */
        position: relative;
    }

    .logo {
        width: clamp(100px, 16vw, 260px); /* Mantém a logo flexível */
        filter: drop-shadow(0 0 0.5rem rgba(201, 200, 200, 0.425));
    }
    .login {
        padding: 3rem 5rem; //usei rem pra manter identado mais facilmente
        border-radius: 1rem;
        text-align: center;
        position: relative;
        z-index: 10;
        //box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    }

    h1 {
        font-size: clamp(1rem, 1.6vw, 2rem);
        font-weight: 900;
        letter-spacing: 4px;
        font-weight: bolder;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.808));
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-top: 2vw;
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
        //border: 3px solid var(--opacity);
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

    //media query para ajustar o layout para telas menores


    @media (max-width: 900px) {
    
    }
`