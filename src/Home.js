import React from 'react';
import  Itemcard from "./Itemcard";


import data from './data';
const Home =()=>
{
 
    return(
        <>
<h1 className="text-center mt-3">Claim your free Trial</h1>
<h3 className="text-center mt-3">Classes</h3>
<section className="py-4 container">
<div className="row justify-content-center">
    {data.productData.map((item, index)=>
    {
        return(
<Itemcard 
 title={item.title}
 desc={item.desc} 
 time={item.time}
 date={item.date}
 item={item}
  key={index}
  ></Itemcard>
  )  })

    }

</div>
</section>
        </>
    )
}
export default Home ;