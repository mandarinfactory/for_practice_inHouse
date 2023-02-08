import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { chName, plusAge } from "./../js/userSlice";

function CompCart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>
        {state.user.name} {state.user.age}세님의 장바구니
      </h3>
      <button
        onClick={() => {
          dispatch(chName());
          dispatch(plusAge(1));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((v, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(chName());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CompCart;
