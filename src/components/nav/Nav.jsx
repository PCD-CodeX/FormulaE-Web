
import { Link } from 'react-router-dom';
import logoCompleta from "/fe-logo-completa.webp";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'

const NavigationBar = () => {

    return (
        <Navbar bg="light" expand="lg" className='nav'>
            <Container className='container'>
                <Navbar.Brand className=''>
                    <Link to='/'>
                        <img className='image' src={logoCompleta} alt="Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" fs-6 text-gray fw-semibold"m id='nav'>
                        <Link to='/Quiz' className="nav-link ">Match Your Team</Link>
                        <Link to='/Live' className="nav-link ">Lives</Link>
                        <Link to='/News' className="nav-link ">Notícias</Link>
                        <Link to='/Login' className="nav-link ">Login</Link>
                        <Link to='/Cadastro' className="nav-link ">Cadastro</Link>
                        {/* Dropdown de menu */}
                        <NavDropdown title="Saiba Mais" id="basic-nav-dropdown" className='dropdown'>
                            <div className="inner-container">
                                <NavDropdown.Item as={Link} to='/Circuits'>Pistas</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/Races'>Corridas</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/Teams'>Equipes</NavDropdown.Item>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
