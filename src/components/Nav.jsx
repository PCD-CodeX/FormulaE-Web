import { useState } from 'react';
import { NavStyle } from "../css/NavStyle";
import { Link } from 'react-router-dom';
import logo from "../assets/logos/Fomrula-E-Logo.png";
const Nav =()=>{
    
    const [Expandir, setExpandir] = useState(false);

    // Função para alternar o estado expandido
    const toggleMenu = () => {
        setExpandir(!Expandir); // ! no comeco Alterna entre expandido e não expandido 
    };

    return(
        <NavStyle>
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
                            <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                                <Link to='/Pilots'>Pilotos</Link>
                            </ul>
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



