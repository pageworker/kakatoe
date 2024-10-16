import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import About from './pages/About';
import Gallery from "./pages/Gallery";

function App() {


  return (
      <div>
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/">Kakatoe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/#home">Thuis</Nav.Link>
                <Nav.Link href="/#gallery">Gallery</Nav.Link>
                <Nav.Link href="/#about">Over ons</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid className="main-container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Container>

      </div>
  );
}

export default App;
