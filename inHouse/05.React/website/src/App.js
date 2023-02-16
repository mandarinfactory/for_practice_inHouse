import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import CompDetail from "./asset/components/CompDetail";
import CompShoes from "./asset/components/CompShoes";
import CompCart from "./asset/components/CompCart";
import data from "./asset/js/data";
import axios from "axios";

let count = 0;

function App() {
  useEffect(() => {
    let idSetItem = localStorage.setItem("watched", JSON.stringify([]));
  }, []);


  const handleCount = () => {
    count++;
  };
  const [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="title">
            Shoeslover
          </Link>
          <Nav className="me-auto">
            <Link to="/detail" className="subtitle">
              Detail
            </Link>
            <Link to="/cart" className="subtitle">
              Cart
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
                  {shoes.map((v, i) => {
                    return <CompShoes shoes={shoes[i]} i={i + 1} key={i} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  let copy;
                  handleCount();
                  if (count == 1) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((res) => {
                        copy = [...shoes];
                        copy = copy.concat(res.data);
                        setShoes(copy);
                      })
                      .catch(() => {
                        console.log("ERROR~!");
                      });
                  } else if (count == 2) {
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((res) => {
                        copy = [...shoes];
                        copy = copy.concat(res.data);
                        setShoes(copy);
                      })
                      .catch(() => {
                        console.log("ERROR~!");
                      });
                  } else {
                    alert("더 보여줄 제품이 없습니다.");
                  }
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<CompDetail shoes={shoes} />} />
        <Route path="/cart" element={<CompCart />} />
      </Routes>
    </div>
  );
}

export default App;
