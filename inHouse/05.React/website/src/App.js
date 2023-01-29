/* eslint-disable */

import data from './js/data'
import CompSection from './components/CompSection';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import CompDetail from './components/CompDetail';

function App() {

  const [shoes] = useState(data)
    return (
    <div className="App">



      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='title'>ReactShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' className='button'>홈</Link>
            <Link to='/detail' className='button'>상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
            <>
            <div className='main-bg'></div>
              <div className="container">
                <div className="row">
                  <CompSection shoes={shoes}></CompSection>
                </div>
              </div> 
        </>
        } />
        <Route path='/detail' element={
          <CompDetail></CompDetail>
        } />
      </Routes>
      </div>
  );
}


export default App;
