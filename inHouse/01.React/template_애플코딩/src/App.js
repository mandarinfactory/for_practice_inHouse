/* eslint-disable */

import '../src/App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [ 글제목, set글제목 ] = useState(['남자 코트 추천', '맛집 추천','가을 옷 추천']);
  let [ 따봉, set따봉 ] = useState(0);

  return (
    <div>
      <div className='black-nav'>
        <h4 style={{ color : 'red' }}>BLOG!!</h4>
      </div>
      <div className='list list1'>
        <h4>{ 글제목[0] } <span onClick={ () => {set따봉(따봉 + 1)} }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <button onClick={() => {
          let copy = [...글제목]
          copy[0] = '여자 코드 추천'
          set글제목(copy);
        }}>글제목변경</button>
      </div>
      <div className='list list2'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list list3'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
