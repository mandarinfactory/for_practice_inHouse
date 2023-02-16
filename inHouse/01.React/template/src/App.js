/* eslint-disable */

import "./App.css";
import React, {useState} from 'react';

class ModalAnother extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      name : 'Brent',
      age : '28'
    }
  }
  render () { 
    return (
      <div>'HELLO {this.state.age}'
        <button onClick = {() => {
          this.setState({age:29})
        }}>나이변경</button>
      </div>
    )
  }
}//class_ModalAnother

const Modal = (props) => {
  return (
    <div className="modal" style={{background : props.color}}>
        <h4>{props.글제목[props.modal제목]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copy = props.글제목
          copy = ['예쁜 카페 추천', '남자 코트 추천', '여자 바지 추천']
          props.set글제목(copy)
        }}>글수정</button>  
    </div>
  )
}//function_Modal

function App() {
  
  const [글제목, set글제목] = useState(['맛집 추천', '남자 코트 추천', '여자 바지 추천']);
  const [따봉, set따봉] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const [modal제목, setModal제목] = useState(0);
  const [입력값, set입력값] = useState('');

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
        {
          글제목.map((a, i) => {
            return (
              <div className="list" key={i}>
              <h4 onClick={() => {setModal(true); setModal제목(i)}}>{a}
                <span onClick={e => {
                  e.stopPropagation();
                  let copy = [...따봉]
                  copy[i] = copy[i] + 1
                  set따봉(copy)
                }}> 
                👍 
                </span> 
                {따봉[i]} 
              </h4>
              <p>4월 03일 발행</p>
              <button onClick={() => {
                let copy = [...글제목]
                copy.splice(i,1)
                set글제목(copy)
              }}>삭제</button>
            <ModalAnother/>
            </div>
            )
          })
        }

        <input onChange={e => {
          e.target.value == '' ? alert('제대로 입력해주십시오.') : set입력값(e.target.value);
        }}/>
        <button onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          set글제목(copy);
        }}>글추가</button>
        {
          modal == true ? <Modal color='lightblue' 글제목={글제목} set글제목={set글제목} modal제목={modal제목} setModal제목={setModal제목}/> : null
        }
    </div>
    )
  }//function_App --> HTML 렌더링하는 곳!!!!!

export default App;
 