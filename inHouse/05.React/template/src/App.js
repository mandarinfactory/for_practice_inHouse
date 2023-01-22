/* eslint-disable */

import "./App.css";
import {useState} from 'react';

const Modal = (props) => {
  return (
    <div className="modal" style={{background : props.color}}>
        <h4>{props.글제목[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copy = props.글제목
          copy[0] = '예쁜 카페 추천'
          props.set글제목(copy)
        }}>글수정</button>
    </div>
  )
}//function_Modal

function App() {
  
  const [글제목, set글제목] = useState(['맛집 추천', '남자 코트 추천', '여자 바지 추천']);
  const [따봉, set따봉] = useState([0,0,0]);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black_nav">
        <h3 style={{color : 'crimson'}}>ReactBlog!</h3>
      </div>
      <button onClick={() => {
        let copy = [...글제목]
        set글제목(copy.sort())
      }}>가나다</button>
        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '남자 니트 추천';
          set글제목(copy);
          }}>
          제목변경
          </button>
      {/* <div className="list">
        <h4>{글제목[0]}
          <span onClick={() => {set따봉(따봉+1)}}> 👍 </span> 
          {따봉} 
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>4월 03일 발행</p>
      </div> 
      <div className="list">
        <h4 onClick={() => {
          modal == false ? setModal(true) : setModal(false) 
        }}>{글제목[2]}</h4>
        <p>5월 09일 발행</p>
      </div> */}
        {
          글제목.map((a, i) => {
            return (<div className="list" key={i}>
            <h4 onClick={() => {modal == false ? setModal(true) : setModal(false) }}>{a}
              <span onClick={() => {
                let copy = [...따봉]
                copy[i] = copy[i] + 1
                set따봉(copy)
                }}> 
              👍 
              </span> 
              {따봉[i]} 
            </h4>
            <p>4월 03일 발행</p>
          </div> )
          })
        }
        {
          modal == true ? <Modal color='lightblue' 글제목={글제목} set글제목={set글제목}/> : null
        }
    </div>
    )
  }//function_App --> HTML 렌더링하는 곳!!!!!

export default App;
