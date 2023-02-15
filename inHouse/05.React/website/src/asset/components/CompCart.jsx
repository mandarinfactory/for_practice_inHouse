import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const CompCart = () => {
  const selector = useSelector(state => state);

  return (
    <div>
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
          <tr>
            <td>{selector.list[0].id}</td>
            <td>{selector.list[0].name}</td>
            <td>{selector.list[0].count}</td>
            <td><button>+</button></td>
          </tr>
          <tr>
            <td>{selector.list[1].id}</td>
            <td>{selector.list[1].name}</td>
            <td>{selector.list[1].count}</td>
            <td><button>+</button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CompCart;
