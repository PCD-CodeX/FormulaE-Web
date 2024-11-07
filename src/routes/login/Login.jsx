import { LoginStyle } from "./LoginStyle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import myGif from "../../assets/logos/formulae.gif";
import lastFrameImage from "../../assets/logos/last-fomrulae.png";
import logoCompleta from "../../assets/logos/formulae-completo-branco.png";
import googleIcon from "../../assets/logos/google-icon.png"; // Ícone do Google
import facebookIcon from "../../assets/logos/facebook-icon.png"; // Ícone de outra plataforma

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`https://banco-vercel.vercel.app/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Login realizado com sucesso!");
          // Se necessário, armazene o token: localStorage.setItem('token', data.token);
        } else {
          alert(data.message || "Login falhou. Verifique suas credenciais.");
        }
      })
      .catch((error) => {
        console.error("Erro no login:", error);
        alert("Ocorreu um erro no login.");
      });
  };

  const [showGif, setShowGif] = useState(true);
  const [showLastFrame, setShowLastFrame] = useState(false);

  useEffect(() => {
    const gifDuration = 1180;
    const timer = setTimeout(() => {
      setShowGif(false);
      setShowLastFrame(true);
    }, gifDuration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <LoginStyle>
      <div className="content">
        <div className="gif-container">
          <h1>Bem-Vindo</h1>
          <div className="animation">
            {showGif && (
              <img src={myGif} className="gif" style={{ display: showGif ? "block" : "none" }} />
            )}
            {showLastFrame && (
              <img src={lastFrameImage} className="imagem-final" style={{ display: showLastFrame ? "block" : "none" }} />
            )}
          </div>
          <div className="social-login">
            <button className="google-button">
              <img src={googleIcon} alt="Google logo" />
              Login com Google
            </button>
            <button className="other-button">
              <img src={facebookIcon} alt="Other platform logo" />
              Login com Facebook
            </button>
            <div className="link-cadastro">
              <p>não possui login?</p>
              <Link to='/Cadastro'>Cadastre-se</Link>
            </div>
          </div>
        </div>
        <form className="form" onSubmit={handleLogin}>
          <div className="login">
            <img src={logoCompleta} className="logo" />
            <div className="input-container">
              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Formulae@gmail.com"
                value={loginData.email}
                onChange={handleChange}
                required
              />
              <div className="error-message">Email in incorrect format</div>
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input
                id="password"
                type="password"
                name="senha"
                placeholder="Senha: FormulaE@2024"
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$"
                value={loginData.senha}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <div className="error-message">
                Minimum 6 characters, at least 1 Alphabet, 1 Number, and 1 Symbol
              </div>
            </div>
            <button className="my-form__button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </LoginStyle>
  );
};
export default Login;
