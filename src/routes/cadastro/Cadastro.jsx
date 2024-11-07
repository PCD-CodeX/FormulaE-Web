import { CadastroStyle } from "./CadastroStyle";
import { useEffect, useState } from "react";
import lastFrameImage from "../../assets/logos/last-formulaefia.png";
import googleIcon from "../../assets/logos/google-icon.png"; // Ícone do Google
import facebookIcon from "../../assets/logos/facebook-icon.png"; // Ícone de outra plataforma
import myGif from "../../assets/logos/formulae-logo-completa.gif"
//import googleIcon from "../assets/logos/google-icon.png";  // Ícone do Google
//import facebookIcon from "../assets/logos/facebook-icon.png";  // Ícone de outra plataforma

const Cadastro = () => {
  const [cadastroData, setCadastroData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    setCadastroData({ ...cadastroData, [e.target.name]: e.target.value });
  };

  const handleCadastro = (e) => {
    e.preventDefault();

    fetch(`https://banco-vercel.vercel.app/usuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cadastroData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Cadastro realizado com sucesso!");
        } else {
          alert(data.message || "O cadastro falhou.");
        }
      })
      .catch((error) => {
        console.error("Erro no cadastro:", error);
      });
  };


  const [showGif, setShowGif] = useState(true);
  const [showLastFrame, setShowLastFrame] = useState(false);

  useEffect(() => {
    // Ajuste a duração conforme o tempo do GIF
    const gifDuration = 4600;
    const timer = setTimeout(() => {
      setShowGif(false); // Oculta o GIF
      setShowLastFrame(true); // Exibe o último frame
    }, gifDuration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <CadastroStyle>
      <div className="content">
          <form className="form" onSubmit={handleCadastro}>
            {" "}
            {/* Submit os valores de name, email e password */}
            <div className="login">
              <h1>
                Cadastre-se
              </h1>
              <div className="input-container">
                <label>Nome:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu nome"
                  name= "nome"
                  value={cadastroData.nome}
                  onChange={handleChange}
                  required
                />
                <div className="error-message">Name in incorrect format</div>
              </div>
              <div className="input-container">
                <label>Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Formulae@gmail.com"
                  autoComplete="off"
                  value={cadastroData.email}
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
                  placeholder="Senha: FormulaE@2024"
                  title="Minimum 6 characters at least 1 Alphabet, 1 Number and 1 Symbol"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$"
                  name="senha"
                  value={cadastroData.senha}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <div className="error-message">
                  Minimum 6 characters, at least 1 Alphabet, 1 Number, and 1
                  Symbol
                </div>
              </div>
              <button className="my-form__button" type="submit">
                Cadastro
              </button>
            </div>
          </form>
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
                Conecte-se com o Google
              </button>
              <button className="other-button">
                <img src={facebookIcon} alt="Other platform logo" />
                Conecte-se com o Facebook 
              </button>
          </div>
      </div>
      </div>
    </CadastroStyle>
  );
};
export default Cadastro;
