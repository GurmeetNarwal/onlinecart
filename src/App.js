
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import Cart from "./Cart"
import {CartProvider} from "react-use-cart";
import CountDownTimer from "./timer"

function App() {
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
