import { LoginStyle } from "../css/LoginStyle";
import { useEffect, useState } from "react";
import myGif from "../public/formulae.gif";
import lastFrameImage from "../public/last-fomrulae.png";
import logoCompleta from "../public/formulae-completo-branco.png";
import googleIcon from "../public/google-icon.png";  // Ícone do Google
import facebookIcon from "../public/facebook-icon.png";  // Ícone de outra plataforma

const Login = () => {
    const [showGif, setShowGif] = useState(true);
    const [showLastFrame, setShowLastFrame] = useState(false);

    useEffect(() => {
        // Ajuste a duração conforme o tempo do GIF
        const gifDuration = 1180;
        const timer = setTimeout(() => {
            setShowGif(false); // Oculta o GIF
            setShowLastFrame(true); // Exibe o último frame
        }, gifDuration);


        return () => {
            clearTimeout(timer);
        };

    }, []);

    return (
        <LoginStyle>
            <div className="content">
                <div className="gif-container">
                    <h1>Welcome Back</h1>
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
                    <div className="social-login">
                        <button className="google-button">
                            <img src={googleIcon} alt="Google logo" />
                            Login with Google
                        </button>
                        <button className="other-button">
                            <img src={facebookIcon} alt="Other platform logo" />
                            Login with Facebook
                        </button>
                    </div>
                </div>
                <form className="form">
                    <div className="login">
                        <img src={logoCompleta} className="logo"/>
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
        </LoginStyle>
    );
};
export default Login;
