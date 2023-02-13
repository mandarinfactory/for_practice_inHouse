const CompShoes = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <h5>{props.shoes.price}</h5>
    </div>
  );
};

export default CompShoes;