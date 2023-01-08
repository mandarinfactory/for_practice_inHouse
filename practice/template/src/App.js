import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = 'apple banana orange'
  return (
    <div className="App">
        <div className="nav_one">
          <div>개발 blog</div>
        </div>
        <div className='list'>
        <h3>{posts}</h3>
        <p>01월 09일 발행</p>
        <hr/>
        </div>
    </div>
  );
}

export default App;
