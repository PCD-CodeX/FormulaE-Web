import { LoginStyle } from "../css/LoginStyle";

const Login = () => {

    return(
        <LoginStyle>
            <section className='Login'>
                <h1> Login </h1>
                <form>
                    <input type="text" placeholder="Usuário"></input>
                    <input type="password" placeholder="Senha"></input>
                    <button>Entrar</button>
                </form>
            </section>
        </LoginStyle>
    )

}
export default Login