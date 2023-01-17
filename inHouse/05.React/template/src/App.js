/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let [title, chTitle] = useState([
    "종로구 돈까스 맛집 추천",
    "구로구 카레 맛집 추천",
    "송파구 중국 맛집 추천",
  ]);
  let [good, chGood] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  /* useState --> destructuring문법을 사용하고 있다!
  let num = [1,2];

  let a = num[0];
  let b = num[1];
  └-> let [a, b] = [1, 2];로 바꿔쓸수 있고 이게 destructuring 문법이다.
  그럼 state 언제씀? ==> 변동시 자동으로 HTML에 반영되게 만들고 싶으면 state 쓰는것 
  다시말해, 굳이 변동사항이 크게 있을만한 element가 아니면 state사용 남발하지말것
   */
  /*   [1,2,3].map(function (a) {
    return '2134235'
  })//map 
  << map의 기능>>
    1. array 자료 갯수만큼 함수안의 코드를 실행해줌
    2. 함수의 parameter는 array안에 있던 자료임
    3. return뒤에 적으면 array로 담아줌 --> ['2134235','2134235','2134235']꼴로 나온다.
  */
  return (
    <div className="App">
      <div className="black_nav">
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
        }}
      >
        정렬!
      </button>

      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              chGood(good + 1);
            }}
          >
            💕
          </span>{" "}
          {good}{" "}
        </h4>

        <button
          onClick={() => {
            let copy = [...title];
            copy[0] = "마포구 야끼소바 맛집 추천";
            chTitle(copy);
          }}
        >
          click!
        </button>

        {/* 
      - state변경함수의 특징
      기존state == 신규state의 경우, 변경안해줌! --> 자원절약한다 생각하면 쉬움!
      -array/object 특징(JS)
      let arr = [1,2,3];
      └-> [1,2,3]은 이세계(RAM)에 있고 지금 이 배열들이 어디에 있는지 화살표로 알려주는걸 arr에 저장함
      다시말해 arr가 [1,2,3]이 아니다!
      let [a, b] = useState(hello)일때,
      a[0] = 'goodbye'라고 하더라도,
      b(a) --> goodbye로 나오지 않는다. 왜냐하면, array자체를 수정한거지 변수로 방향이 되어있는 화살표는 수정이 안됐으므로!
      따라서 state기준에서는 화살표가 바뀌지 않았다? === (기존state == 신규state) ==> 변경할게 없다!
      다시, let copy = a를 해도 달라지지 않는다? 왜? --> 이 변수에 저장되어있는건 array들이 아니고 그 array들이 있는 화살표만 있다.
      [...a]로 바꿔서 되는 이유는 괄호[]를 벗기고 새로운 괄호[]로 바꿔주기 때문이다. --> 독립적인 array, 화살표로 인식한다.
      */}

        <p>12월 07일 발행</p>
      </div>
      {/* 
    각 element에 eventbinding으로 onClick등을 쓸수 있고, 여기에는 function들만 쓸수 있다. => 형식이 function이면 다 됨.
    useState에서 변경할 값을 사용하기 위해서는 array에 두번째에 오는걸 change-element로 쓰면 되고, 이때에는 =를 쓰지 않는다.(JS문법관련)
    따라서, let [a,b] = useState('안녕')이라면,
    <div>{a}</div>에서 --> <div>{b(a +'반가워')}</div>꼴로 바꿔줘야한다. --> '안녕 반가워'
    */}

      <div className="list">
        <h4>{title[1]}</h4>
        <p>12월 13일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            modal === true ? setModal(false) : setModal(true);
          }}
        >
          {title[2]}
        </h4>
        <p>01월 16일 발행</p>
      </div>
      {title.map((a, i) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                modal === true ? setModal(false) : setModal(true);
              }}>
              <span
                onClick={() => {
                  chGood(good + 1);
                }}>
                💕
              </span>{" "}
              {good}{" "}
            </h4>
            <p>12월 13일 발행</p>
          </div>
        );
      })}
      {modal == true ? <Modal /> : null}
    </div>
  );
} //function_App

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}; //function_Modal
/* 
이렇게 따로 function화 해서 따로 HTML element를 만드는게 Component이다. --> 
  1. 반복적인 HTML을 축약할 때
  2. 큰 page, 자주 변경되는 것들
*/
/* 
<< 동적인 UI 만드는 step!! >>
  1. HTML, CSS로 미리 디자인을 완성해라
  2. UI의 현재 상태를 useState로 저장
  3. state에 따라 UI가 어떻게 보일지 작성할것
*/
export default App;
