/* eslint-disable */

import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const CompDetail = props => {
    let {id} = useParams();
    let findId = props.shoes.find(v => {
        return v.id == id
    })//findId
    let [ notice, setNotice ] =useState(true);
    let [ text, setText ] = useState('');
    let [ tab, setTab ] = useState(0);
    let [ onloading, setOnloading ] = useState('');
    useEffect(() => {
        let timer = setTimeout (() => {
            setNotice(false)
        },2000)//setTimeout
        return () => {
            clearTimeout(timer);
        }//return
    }, [])//useEffect
    useEffect(() => {
        setTimeout(() => {
            setOnloading('end')
        },300)
        return () => {
            setOnloading('');
        }
    }, [])//useEffect
    useEffect(()=>{
        if (isNaN(text) == true){
          alert('그러지마세요')
        }
      }, [text])
          return (
        <div className={`start ${onloading} container`}>     {
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

                <Nav variant="tabs"  defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link onClick={() => [setTab(0)]} eventKey="link0">버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => [setTab(1)]} eventKey="link1">버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => [setTab(2)]} eventKey="link2">버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab} shoes={shoes}/>
            </div>
        </div>
    )//useEffect
}//CompDetail

const TabContent = ({tab}, {shoes}) => {
    let [fade, setFade] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        },100)
        return () => {
            setFade('');
        }//return
    },[tab])//useEffect
    return <div className= {`start ${fade}`}>
            { [<div>{shoes}[0].title</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>
}//tabContent

export default CompDetail;