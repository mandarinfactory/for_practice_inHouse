/* eslint-disable */

import data from './js/data'
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CompSection from './components/CompSection';

function App() {

  const [shoes] = useState(data)
    return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='title'>ReactShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Others</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
        <div className="container">
          <div className="row">
            <CompSection shoes={shoes}/>
          </div>
        </div> 
      </div>
  );
}

export default App;
