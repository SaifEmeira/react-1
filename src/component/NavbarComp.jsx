/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

function NabarComp() {
  return (
    <Navbar expand="lg" className="bg-[#2C3E50]  ">
      <Container className='m-auto py-[24px] px-10 '>
        <Link to={'/'}  className='text-white uppercase fs-2'>Start Framework</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <NavLink  className='text-white fw-bold text-uppercase px-2 py-2  flex justify-center' to={"/about"} >ABOUT</NavLink>
            <NavLink  className='text-white fw-bold text-uppercase px-2 py-2  flex justify-center' to={'/portfolio'}>PORTFOLIO</NavLink>
            <NavLink  className='text-white fw-bold text-uppercase px-2 py-2  flex justify-center' to={'/contact'}>CONTACT</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NabarComp;