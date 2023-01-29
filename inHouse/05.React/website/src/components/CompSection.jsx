import React from 'react';

const CompSection = props => {
    return (
        <div className="col-md-4">
            {
                props.shoes.map((v, i) => {
                    return (
                        <div>
                        <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="80%"></img>
                        <h4>{v.title}</h4>
                        <p>{v.content}</p>
                        <p>{v.price}</p>
                        </div>
                    )
                })
            }
        </div>   
    );
};

export default CompSection;