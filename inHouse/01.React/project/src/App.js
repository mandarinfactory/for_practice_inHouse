import '../src/App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [ 글제목, set글제목 ] = useState('남자 코트 추천');

  return (
    <div>
      <div className='black-nav'>
        <h4 style={{ color : 'red' }}>BLOG!!</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <h3>{ post }</h3>
    </div>
  );
}

export default App;
