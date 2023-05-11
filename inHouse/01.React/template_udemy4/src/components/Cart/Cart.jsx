import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "초밥",
          amount: "4",
          price: 74000,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>총 수량</span>
        <span>74000 원</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>닫기</button>
        <button className={classes.button}>주문</button>
      </div>
    </Modal>
  );
};

export default Cart;
