import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const OrangeredBtn = styled.button`
  background : orangered;
  color : white;
  padding : 10px
`
const BlackBox = styled.div`
  background : gray;
  padding : 30px;
`

const CompDetail = (props) => {
  const { id } = useParams();
  const idNum = props.shoes.find(v => {
    return v.id == id
  })

  return (
    <>
      <div className="container">
        <OrangeredBtn>오렌지버튼!</OrangeredBtn>
        <BlackBox>블랙박스!</BlackBox>
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{idNum.title}</h4>
            <p>{idNum.content}</p>
            <p>{idNum.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompDetail;
