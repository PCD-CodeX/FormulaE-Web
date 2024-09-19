import { CadastroStyle } from "../css/CadastroStyle";
import { useEffect, useState } from "react";
import myGif from "../assets/logos/formulae-logo-completa.gif";
import lastFrameImage from "../assets/logos/last-formulaefia.png";
import googleIcon from "../assets/logos/google-icon.png";  // Ícone do Google
import facebookIcon from "../assets/logos/facebook-icon.png";  // Ícone de outra plataforma

const Cadastro = () => {
    const [showGif, setShowGif] = useState(true);
    const [showLastFrame, setShowLastFrame] = useState(false);

    useEffect(() => {
        // Ajuste a duração conforme o tempo do GIF
        const gifDuration = 4800;
        const timer = setTimeout(() => {
            setShowGif(false); // Oculta o GIF
            setShowLastFrame(true); // Exibe o último frame
        }, gifDuration);


        return () => {
            clearTimeout(timer);
        };

    }, []);

    return(
        <CadastroStyle>
            <div className="content">
                <div className="gif-container">
                    <h1>Sing Up</h1>
                    {showGif && (
                        <img
                            src={myGif}
                            className="gif"
                            style={{ display: showGif ? "block" : "none" }}
                        />
                    )}
                    {showLastFrame && (
                        <img 
                            src={lastFrameImage} 
                            className="imagem-final"
                            style={{ display: showLastFrame ? "block" : "none" }}
                        />
                    )}
                    <form className="form">
                    <div className="login">

                        <div className="input-container">
                            <label>Nome:</label>
                            <input 
                            type="text" id="name" name="name" 
                            placeholder="Your name" 
                            required
                            />
                            <div className="error-message">Name in incorrect format</div>
                        </div>
                        <div className="input-container">
                            <label>Email:</label>
                            <input
                                type="email" id="email" name="email" 
                                placeholder="Youremail@gmail.com"
                                autoComplete="off"
                                required
                            />
                            <div className="error-message">Email in incorrect format</div>
                        </div>
                        <div className="input-container">
                            <label>Password:</label>
                            <input
                                id="password" type="password" 
                                name="password" placeholder="Your password"
                                title="Minimum 6 characters at least 1 Alphabet, 1 Number and 1 Symbol"
                                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$" required
                                autoComplete="off"
                            />
                            <div className="error-message">Minimum 6 characters, at least 1 Alphabet, 1 Number, and 1 Symbol</div>
                        </div>
                        <button className="my-form__button" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </CadastroStyle>

    )


}
export default Cadastro
