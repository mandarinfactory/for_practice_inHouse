import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="title">
            ReactShop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="subtitle">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="subtitle">
              Item
            </Nav.Link>
            <Nav.Link href="#pricing" className="subtitle">
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='80%'></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
