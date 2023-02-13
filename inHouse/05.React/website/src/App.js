import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import CompDetail from "./asset/components/CompDetail";
import CompShoes from "./asset/components/CompShoes";
import data from "./asset/js/data";

function App() {
  const [shoes] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="title">
            ReactShop
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="subtitle">
              Home
            </Link>
            <Link to="/detail" className="subtitle">
              Detail
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" />
              <div className="container">
                <div className="row">
                  <CompShoes shoes={shoes[0]} i={1} />
                  <CompShoes shoes={shoes[1]} i={2} />
                  <CompShoes shoes={shoes[2]} i={3} />
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<CompDetail />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문시 케일 + 양배추즙 서비스 증정~!</div>}
          />
          <Route path="two" element={<div>생일기념 COUPON 받기~!</div>} />
        </Route>
        <Route path="*" element={<div>없는페이지입니다~!</div>}></Route>
      </Routes>
    </div>
  );
}

const About = () => {
  return (
    <>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </>
  );
};

const Event = () => {
  return (
    <>
      <h4>오늘의 EVENT~!</h4>
      <Outlet></Outlet>
    </>
  );
};

export default App;
