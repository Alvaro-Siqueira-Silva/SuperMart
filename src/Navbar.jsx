import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr(){
    return(
        <div>
          
           <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">SuperMart</Navbar.Brand>
          <Nav>
            <Nav.Link href="/sobre">Cadastrar Produto</Nav.Link>
            <Nav.Link href="/Registro">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default Navbarr