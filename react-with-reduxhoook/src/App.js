import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"

function App() {  

  const account  = useSelector((state) => state.account) ;
  // return the state inside our store (key-value pair of the account what ever the acountreducer is returning)
  const dispatch = useDispatch()
  //ac is an object that has all different methos
  //{depositMoney: ƒ, withDrawMoney: ƒ}
  //depositMoney: ƒ ()
  //withDrawMoney: ƒ ()
  //__proto__: Object
  //AC = { depositMoney, withDrawMoney } destruction unpack the value from an array
  const { depositMoney, withDrawMoney }  = bindActionCreators(actionCreators, dispatch);
 
  console.log(account)
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick ={() => depositMoney(1000)}>Deposit</button>
      <button onClick ={() => withDrawMoney(1000)}>Withdraw</button>

    </div>  
  );
}

export default App;
