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
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>총수량</span>
        <span>215800</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]}>닫기</button>
        <button className={classes.button}>주문</button>
      </div>
    </Modal>
  );
};

export default Cart;
