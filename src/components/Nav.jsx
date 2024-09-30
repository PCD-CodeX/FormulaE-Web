    import { useState } from 'react';
import { NavStyle } from "../css/NavStyle";
import { Link } from 'react-router-dom';
import logo from "/Fomrula-E-Logo.png";
import logoCompleta from "../assets/logos/fe-Logo-completa.png";

const Nav =()=>{
    
    const [Expandir, setExpandir] = useState(false);

    // Função para alternar o estado expandido
    const toggleMenu = () => {
        setExpandir(!Expandir); // ! no comeco Alterna entre expandido e não expandido 
    };

    return(
        <NavStyle>
            {/*links*/}

            <div className='links'>
                        <Link to='/'>
                            <img src={logoCompleta} className='logo'/>
                        </Link>
                        <Link to='/Quiz' className='h1'><h1>Quiz</h1></Link>
                        <Link to='/News' className='h1'><h1>Notícias</h1></Link>
                        <Link to='/Live'className='h1'><h1>Lives</h1></Link>
                        <Link to='/Login' className='link'><h1>Login</h1></Link>
                        <Link to='/Cadastro'className='link'><h1>Cadastre-se</h1></Link>
            </div>

            {/*Menu Hamburguer*/}

            <nav className='nav'>
                <div className={`sidebar_container ${Expandir ? 'expanded' : ''}`}> {/*? baseado no valor de Expandir (true : false) atribue uma nome a sidebar_conatiner */} 
                    <img
                        id="hamb"
                        src={logo}
                        className={`hamb ${Expandir ? 'expanded' : ''}`}
                        onClick={toggleMenu} // Chama a função ao clicar
                        ></img>
                    <div className={`sidebar ${Expandir ? 'expand' : ''}`} id="sidebar">
                        <li>
                            <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                                <Link to='/'>Home</Link>
                            </ul>
                            <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                                <Link to='/Circuits'>Pistas</Link>
                            </ul>
                            <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                                <Link to='/Races'>Corridas</Link>
                            </ul>
                            {/* <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                                <Link to='/Pilots'>Pilotos</Link>
                            </ul> */}
                            <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                                <Link to='/Teams'>Equipes</Link>
                            </ul>
                        </li>
                    </div>
                </div> 
            </nav>
        </NavStyle>
    )
}
export default Nav



