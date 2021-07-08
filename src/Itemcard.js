import React from 'react';
import {useCart} from "react-use-cart"
const Itemcard =(props) =>
{
    const {addItem} =useCart();
    return(
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
<div class="card p-0 overflow-hidden h-100 shadow">

  <div class="card-body">
      
    <h5 class="card-title"> Subject: {props.title}</h5>
    <h5 class="card-text">{props.desc}</h5>
    <p class="card-text">Price: {props.price}</p>
    <p class="card-text">Time: {props.time}</p>
    <p class="card-text">Date: {props.date}</p>
    
    <button class="btn btn-success" 
    onClick={()=>addItem(props.item)} >
        Book</button>
       
  </div>
</div>
        </div>
    );
};
export default Itemcard;