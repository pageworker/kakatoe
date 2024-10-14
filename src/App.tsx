import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>

      <HashRouter>
        <Navbar expand="lg" variant='dark' bg="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Kakatoe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/#home">Home</Nav.Link>
                <Nav.Link href="/#about">Over ons</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid className='main-container'>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/over-ons" element={<About />} />
          </Routes>
        </Container>
      </HashRouter>
    </div>
  );
}

export default App;
