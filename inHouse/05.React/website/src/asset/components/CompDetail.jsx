import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CompDetail = (props) => {

  const { id } = useParams();
  const [alertMsg, setAlertMsg] = useState(true);
  const [inputVal, setInputVal] = useState('');
  
  useEffect(() => {
    if(isNaN(inputVal) == true){
      alert('숫자만 확인해서 입력해주십시오.')
      }
  }, [inputVal])

  useEffect(() => {
    let timeoutID = setTimeout(() => {
      setAlertMsg(false)
    }, 2000);
    return () => {
      clearTimeout(timeoutID)
    }
  }, []);

    const idNum = props.shoes.find((v) => {
      return v.id == id;
    });
    
    return (
      <>
      <div className="container">
        {
          alertMsg === true ? <div className="alert alert-warning notice">2초이내 구매시 할인~!</div> : null
        }
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                parseInt(id) + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{idNum.title}</h4>
            <p>{idNum.content}</p>
            <p>{idNum.price}</p>
            <input onChange={e => {setInputVal(e.target.value)}} type="text" className="stock_input" placeholder="갯수를 숫자로만 적어주세요."/>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompDetail;
