/* eslint-disable */

import '../src/App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [ 글제목, set글제목 ] = useState(['남자 코트 추천', '맛집 추천','가을 옷 추천']);

  return (
    <div>
      <div className='black-nav'>
        <h4 style={{ color : 'red' }}>BLOG!!</h4>
      </div>
      <div className='list list1'>
        <h4>{ 글제목[0] }</h4>
        <p>2월 17일 발행</p>
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
