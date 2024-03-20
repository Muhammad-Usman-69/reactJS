import { useState } from "react";

export default function Counter() {
  // 'props' are immutable(data can't be changed)
  // we use 'state' in order to change the data dynamically
  // 'state' is an object that holds information to control the behaviour of a component
  // 'props' are passed to comp through para while 'state' are variables declared in comp
  // 'props' provide external data while 'state' provide internal data

  //state is a data that a component can hold over a period of time

  //we can declare state by follwing
  //'count' is a variable, 'setCount' is the function to change the info of 'count' variable', 'useState' is a hook and its para is the initial value
  const [count, setCount] = useState(0);
  const [increamentNum, setIncreamentNum] = useState(1);
  function increament() {
    //using setCount function to change count
    setCount(count + increamentNum);
  }
  function decreament() {
    setCount(count - increamentNum);
  }
  function increaseIncreamentNum() {
    setIncreamentNum(increamentNum + 1);
  }
  function decreaseIncreamentNum() {
    setIncreamentNum(increamentNum - 1)
  }
  return (
    <div>
      <h3>Count is : {count}</h3>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>

      <h3>Increamenting value is : {increamentNum}</h3>
      <button onClick={increaseIncreamentNum}>Increament</button>
      <button onClick={decreaseIncreamentNum}>Decreament</button>
    </div>
  );
}
