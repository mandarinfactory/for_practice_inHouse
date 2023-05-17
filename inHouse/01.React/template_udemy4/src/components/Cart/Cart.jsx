import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const totalAmount = `${CartCtx.totalAmount.toFixed(0)}원`;
  const hasItems = CartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {

  };

  const cartItemAddHandler = item => {

  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>총 수량</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          닫기
        </button>
        {hasItems && <button className={classes.button}>주문</button>}
      </div>
    </Modal>
  );
};

export default Cart;
