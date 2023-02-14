import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
/* import { ContextOne } from "../../App"; */

const CompDetail = (props) => {
  /* const stock = useContext(ContextOne) */
  const { id } = useParams();
  const [alertMsg, setAlertMsg] = useState(true);
  const [modal, setModal] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [open, setOpen] = useState("");

  useEffect(() => {
    if (isNaN(inputVal) == true) {
      alert("숫자만 확인해서 입력해주십시오.");
    }
  }, [inputVal]);

  useEffect(() => {
    let openTimeoutID = setTimeout(() => {
      setOpen("end");
    }, 10);
    let timeoutID = setTimeout(() => {
      setAlertMsg(false);
    }, 2000);
    return () => {
      setOpen("");
      clearTimeout(openTimeoutID);
      clearTimeout(timeoutID);
    };
  }, []);

  const idNum = props.shoes.find((v) => {
    return v.id == id;
  });
  return (
    <>
      <div className={`container start ${open}`}>
        {alertMsg === true ? (
          <div className="alert alert-warning notice">
            2초이내 구매시 할인~!
          </div>
        ) : null}
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
            <input
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              type="text"
              className="stock_input"
              placeholder="갯수를 숫자로만 적어주세요."
            />
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setModal(0);
              }}
              eventKey="link0"
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setModal(1);
              }}
              eventKey="link1"
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setModal(2);
              }}
              eventKey="link2"
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <ModalContent modal={modal} shoes={props.shoes} />
      </div>
    </>
  );

  function ModalContent({ modal, shoes }) {
    /*  if (modal == 0){
      return <div>내용0</div>
    } else if (modal == 1) {
      return <div>내용1</div>
    } else if (modal == 2) {
      return <div>내용2</div>
    } 이거 대신!*/
    const [fade, setFade] = useState("");
    useEffect(() => {
      let timeoutID = setTimeout(() => {
        setFade("end");
      }, 10);
      return () => {
        clearTimeout(timeoutID);
        setFade("");
      };
    }, [modal]);
    return (
      <div className={`start ${fade}`}>
        {
          [<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][
            modal
          ]
        }
      </div>
    );
  }
};

export default CompDetail;
