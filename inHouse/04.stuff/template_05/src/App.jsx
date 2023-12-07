import { useSelector, useDispatch } from "react-redux";
import { chName, chAge } from "./store/user";

import Child from "./components/Child";
import { useState } from "react";

function App() {
  const dispatch = useDispatch(); // store.js로 요청보내주는 함수
  let user = useSelector((state) => state.user); // redux store에 있는 state를 가져와줌
  let stock = useSelector((state) => state.stock);
  // store안에있던 모든 state를 말한다.

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <button
        onClick={() => {
          dispatch(chName()); // dispatch(state변경함수())이렇게 써야한다.
        }}
      >
        이름바꾸기
      </button>
      <button
        onClick={() => {
          dispatch(chAge(15));
        }}
      >
        나이바꾸기
      </button>
      <div>
        {stock.map((v, i) => (
          <div key={i}>
            <p>{v.id}</p>
            <p>{v.name}</p>
            <p>{v.count}</p>
          </div>
        ))}
      </div>
      <div>
        <h1></h1>
      </div>
      <Child count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        더하기!
      </button>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
