import { Navbar, Nav, Container } from 'react-bootstrap';

const Header=()=>{
    return(
<div>
<Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#home">
             <h1>CFS</h1>
        <h5 className="text-black px-auto">INTERVENTIONS</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About us</Nav.Link>
      <Nav.Link href="#pricing">Report</Nav.Link>
      <Nav.Link href="#pricing">Rights</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
        )

}

export default Header;