/* eslint-disable */

import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components'

const AlertBtn = styled.button`
    display : ${ props => props.display }
    margin : 10px;
    padding : 20px;
    font-weight : 800;
    font-size : 1.3em;
    background : firebrick;
    color : white;
`

const CompDetail = props => {
    let {id} = useParams();
    let findId = props.shoes.find(v => {
        return v.id == id
    })//findId
    const [ notice, setNotice ] =useState(true);
    const [ text, setText ] = useState('');
    useEffect(() => {     
        let timer = setTimeout (() => {
            setNotice(false)
        },2000)//setTimeout
        return () => {
            clearTimeout(timer);
        }//return
    }, [])//useEffect
    useEffect(()=>{
        if (isNaN(text) == true){
          alert('그러지마세요')
        }
      }, [text])
          return (
              <div className="container">
            {
                notice == true ?
                <div className="alert alert-warning">
                    2초이내 구매시 할인!
                </div>
                :
                null
            }
            <div className="row">
            <input onChange = {(e)=>{ setText(e.target.value) }} />
                <div className="col-md-6">
                    <Link to={`./detail/${id}`}>
                <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
                    </Link>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    );
};

export default CompDetail;