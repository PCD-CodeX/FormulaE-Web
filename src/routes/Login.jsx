import { LoginStyle } from "../css/LoginStyle";
import { useEffect, useState } from "react";
import myGif from "../assets/logos/formulae.gif";
import lastFrameImage from "../assets/logos/last-fomrulae.png";
import logoCompleta from "../assets/logos/formulae-completo-branco.png";
import googleIcon from "../assets/logos/google-icon.png"; // Ícone do Google
import facebookIcon from "../assets/logos/facebook-icon.png"; // Ícone de outra plataforma
import axios from "axios";

const Login = () => {
  // --------------------------< Login >------------------------------------ //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    // Fazer a requisição GET para buscar o usuário pelo email e senha
    axios.get("http://localhost:8080/users?email=${email}&password=${password}")
      .then((response) => {
        if (response.data.length > 0) {
          // Usuário encontrado
          setUser(response.data[0]);
          console.log("Login bem-sucedido:", response.data[0]);
          alert("Login bem-sucedido!");
        } else {
          // Nenhum usuário encontrado
          console.log("Email ou senha incorretos");
          alert("Email ou senha incorretos");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o usuário:", error);
        alert("Erro ao buscar o usuário!");
      });
  };

  // -------------------------------< GIF >----------------------------//

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
            <h1>Bem-Vindo</h1>
          <div className="animation">
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
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="error-message">Email in incorrect format</div>
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Senha"
                title="Minimum 6 characters at least 1 Alphabet, 1 Number and 1 Symbol"
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <div className="error-message">
                Minimum 6 characters, at least 1 Alphabet, 1 Number, and 1
                Symbol
              </div>
            </div>
            <button className="my-form__button" type="submit">
              Sign In
            </button>
            {user && (
              <div>
                <h2>Bem-vindo, {user.name}!</h2>
                <p>Email: {user.email}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </LoginStyle>
  );
};
export default Login;
