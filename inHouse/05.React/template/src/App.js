/* eslint-disable */

import "./App.css";

function App() {

  const post = '강남 우동 맛집';
  
  return (
    <div className="App">
      <div className="black_nav">
        <h3 style={{color : 'firebrick'}}>블로그!</h3>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
    )
  }
export default App;
