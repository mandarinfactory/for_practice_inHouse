import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return <React.Fragment>
    <header className={classes.header}>
        <h1>주문도우미</h1>
        <button>장바구니</button>
    </header>
    <div className={classes["main-image"]}>
        <img src={mealsImage} alt="음식들로 꽉찬 식탁사진"/>
    </div>
  </React.Fragment>;
};

export default Header;
