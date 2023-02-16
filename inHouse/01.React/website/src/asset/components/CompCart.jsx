import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { chAge } from "../store/userSlice";
import { chStock } from "../js/store";

const CompCart = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>
        {selector.user.name} {selector.user.age}의 장바구니!
      </h4>
      <button
        onClick={() => {
          dispatch(chAge(1));
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
          {selector.list.map((v, i) => (
            <tr key={i}>
              <td>{selector.list[i].id}</td>
              <td>{selector.list[i].name}</td>
              <td>{selector.list[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(chStock(selector.list[i].id));
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
};

export default CompCart;
