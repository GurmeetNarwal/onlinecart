import React,{useEffect} from 'react';
import {useCart} from "react-use-cart"

const Cart = () =>
{
    const {
        isEmpty,
        totalItems,
        totalUniqueItems,
        cartTotal,
        items,
    updateItemQuantity,
removeItem,
emptyCart} = useCart();


    if(totalItems>=4)
    {
        removeItem(items[3].id)
        alert("you have done max booking")
        return false;
    }
    else{
        
    }

if(isEmpty) return <h1 className="text-center"> Your Cart is Empty</h1>
    return(
        <section className="py04 container">
        <div className row jusify-content-center>
        <div className="col-12">
        <h1><i className="fa fa-shopping-cart"></i>({totalUniqueItems})
       </h1>
        <table className="table table-light table-hover m-0">
            <tbody>
    
{ items.map((item,index)=>
    {
        return(
        <tr key={index}>
            <td>
               {item.title} 
            </td>
            <td>
               {item.price} 
            </td>
            <td>Quantity
               ({item.quantity}) 
            </td>
            <td>
            <button className="btn btn-info" onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}>+</button>

            <button className="btn btn-info" onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</button>

                <button className="btn btn-danger" onClick={()=>removeItem(item.id)}>Remove Item</button>
            </td>
        </tr>
        )
    })
}
</tbody>
        </table>
        </div>
        </div>
        </section>
    )
}
export default Cart;