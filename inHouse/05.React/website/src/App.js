/* eslint-disable */

import data from './js/data'
import CompSection from './components/CompSection';
import CompDetail from './components/CompDetail';
import { useState } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CompEvent from './components/CompEvent';
import axios from 'axios';

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
              <button onClick = {() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then(v => {
                  console.log(v.data);
                })
                .catch(() => {
                  alert('인터넷이 연결이 되지 않았습니다.')
                })//then_catch
              }}>버튼</button>
          </>
        } />
        <Route path='/detail/:id' element={<CompDetail shoes={shoes}/>} />
        
        <Route path='/event' element={<CompEvent/>}>
          <Route path='one' element={<div>첫 주문시 케일즙 증정 ★</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>

      </div>
  );
}
const About = () => {
  return (
      <div>
          <h2>회사정보임</h2>
          <Outlet></Outlet>
      </div>
  );
};

export default App;


