import "../css/Register.css";

const Register = () => {
  return (
    <div className="register_card">
      <form>
        <p>유저이름</p>
        <input type="text" />
      </form>
      <form>
        <p>나이</p>
        <input type="number" />
      </form>
      <button>유저 추가하기</button>
    </div>
  );
};

export default Register;
