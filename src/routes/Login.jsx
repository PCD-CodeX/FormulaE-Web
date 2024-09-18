import { LoginStyle } from "../css/LoginStyle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myGif from "../public/formulae.gif";
import lastFrameImage from "../public/last-fomrulae.png";

const Login = () => {

    const [showGif, setShowGif] = useState(true); // Controla o GIF
    const [showLastFrame, setShowLastFrame] = useState(false); // Controla a exibição do último frame

    useEffect(() => {
    // Definir um tempo para ocultar o GIF após sua exibição (ajuste de acordo com a duração do GIF)
    const gifDuration = 1170; // 3 segundos, ajuste conforme a duração do seu GIF
    const timer = setTimeout(() => {
      setShowGif(false); // Oculta o GIF
      setShowLastFrame(true); // Exibe o último frame
    }, gifDuration);

    // Limpeza do timer ao desmontar o componente
    return () => clearTimeout(timer);
    }, []);


    return (
    <LoginStyle>
        
        <form className="form"></form>
            <div className="login-texto">
                <h1>You must sign in to join</h1>
            </div>
            <div className="cadastro-texto">
                <p>Não possui login?</p><Link to='/Cadastro'>Cadastre-se</Link>
            </div>


            <div>
                {/* Renderiza o GIF se showGif for true */}
                <img
                    src={myGif}
                    alt="My GIF"
                    style={{ visibility: showGif ? "visible" : "hidden", position: "relative", display: showGif ? "block" : "none" }} className="gif"/>
                {/* Renderiza a imagem estática do último frame quando showLastFrame for true */}
                {showLastFrame && (
                    <img src={lastFrameImage} alt="Last Frame" style={{ position: "relative" }} className="imagem-final" />
                )}
            </div>
    </LoginStyle>
    );
};
export default Login;
