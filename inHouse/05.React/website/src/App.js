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
        <Route path='/detail/:id' element={<CompDetail shoes={shoes} />} />
      </Routes>
    </div>
  );
}

export default App;
