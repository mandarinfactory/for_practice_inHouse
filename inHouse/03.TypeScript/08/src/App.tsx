import { useState } from "react";

function App() {
  const [user, setUser] = useState<string | number>("kim");

  return (
    <div>
      <h1>안녕</h1>
      <Profile name="철수" age={20} />
    </div>
  );
}

const Profile = (props: { name: string; age: number }): JSX.Element => {
  return (
    <div>
      프로필입니다. {props.name}, {props.age}
    </div>
  );
};

export default App;
