import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoCompleta from "/fe-logo-completa.png";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="light" expand="lg" expanded={expanded} className='nav'>
            <Container className='container'>
                <Navbar.Brand className=''>
                    <Link to='/'>
                        <img src={logoCompleta} alt="Logo" style={{ width: 'clamp(180px,16vw,300px)' }} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-6 text-gray fw-semibold mb-2">
                        <Link to='/Quiz' className="nav-link me-5">Questionário</Link>
                        <Link to='/News' className="nav-link me-5">Notícias</Link>
                        <Link to='/Live' className="nav-link me-5">Lives</Link>
                        <Link to='/Login' className="nav-link me-5">Login</Link>
                        <Link to='/Cadastro' className="nav-link me-5">Cadastre-se</Link>

                        {/* Dropdown de menu */}
                          <NavDropdown title="Menu" id="basic-nav-dropdown" className='dropdown me-5'>
                              <NavDropdown.Item as={Link} to='/Circuits'>Pistas</NavDropdown.Item>
                              <NavDropdown.Item as={Link} to='/Races'>Corridas</NavDropdown.Item>
                              <NavDropdown.Item as={Link} to='/Teams'>Equipes</NavDropdown.Item>
                          </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
