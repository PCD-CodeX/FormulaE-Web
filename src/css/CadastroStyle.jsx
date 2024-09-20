import styled from "styled-components";
import bgImg from "../assets/logos/bg-login.gif";
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
        margin-top:-8vw;
        margin-left: clamp(30px, 4vw, 8vw);
        margin-right: clamp(30px, 4vw, 8vw);
        padding-top: 6vw;
        border-radius: 1em;
        font-weight: 700;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .form {
        margin-top: -6vw;
    }

    .logo {
        width: clamp(100px, 16vw, 260px); /* Mantém a logo flexível */
        filter: drop-shadow(0 0 0.5rem rgba(201, 200, 200, 0.425));
    }
    .login {
    padding: 4rem 6rem;
    border-radius: 1rem;
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
    filter: blur(2px);
    transform: scale(1.1); /* Evita que o desfoque afete as bordas visíveis */
    
}


    h1 {
        font-size: clamp(1rem, 1.6vw, 2rem);
        font-weight: 900;
        letter-spacing: 4px;
        font-weight: bolder;
        color: #ffffff;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.808));
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-top: 3vw; //altura entre os inputs
        margin-left: 10vw;
    }

    label {
        display: flex;
        flex-direction: start;
        margin-bottom: 0.5rem;
        font-size: clampclamp(8px, 0.9vw, 16px);;
        font-weight: 900;
        letter-spacing: 3px;
        color: #ffffff;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.808));
    }

    input {
        padding: clamp(6px,0.8vw,14px);
        padding-left: 2vw;
        border-radius: 1vw;
        border: none;
        //border: 3px solid var(--opacity);
        font-size: clamp(8px, 0.6vw, 16px);
        margin-top: 1vw;
        margin-right: 10vw;
        font-weight: 900;
        background: white;
        letter-spacing: 1px;
        font-style: italic;
    }

    .error-message {
        color: red;
        font-size: clamp(8px, 1vw, 14px);
        margin-top: 1vw;
        visibility: hidden; /* Exibe apenas se houver erro */
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
        margin-bottom: 2vh;
    }

    .my-form__button:hover {
        border: clamp(2px,0.2vw,4px) solid var(--color2) ;
        scale: 1.01;
        font-weight: 700;
    }

    //media query para ajustar o layout para telas menores


    @media (max-width: 900px) {
        .login{
            padding: 2rem 4rem;
        }
        h1{
            margin-bottom: 30px;
        }
    }
`