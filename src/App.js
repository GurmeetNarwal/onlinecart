import{useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import Cart from "./Cart"
import {CartProvider} from "react-use-cart";
import CountDownTimer from "./timer"
import {useCart} from "react-use-cart"


function App() {

  window.localStorage.clear();
  const hoursMinSecs = {hours:0, minutes: 0, seconds: 30}
  return (
    
   <>
      <CountDownTimer hoursMinSecs={hoursMinSecs}/>
   <CartProvider>
   <Home></Home>
   <Cart></Cart>
   </CartProvider>


 
     
   
   </>
  );
}

export default App;
