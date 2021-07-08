import React from 'react';
import {useCart} from "react-use-cart"
const Itemcard =(props) =>
{
    const {addItem} =useCart();
    return(
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
<div className="card p-0 overflow-hidden h-100 shadow">

  <div className="card-body">
      
    <h5 className="card-title"> Subject: {props.title}</h5>
    <h5 className="card-text">{props.desc}</h5>
    <p className="card-text">Price: {props.price}</p>
    <p className="card-text">Time: {props.time}</p>
    <p className="card-text">Date: {props.date}</p>
    
    <button className="btn btn-success" 
    onClick={()=>addItem(props.item)} >
        Book</button>
       
  </div>
</div>
        </div>
    );
};
export default Itemcard;