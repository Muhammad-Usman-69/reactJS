import Hello from "./components/Hello";
import Button from "./components/Button";
import Fruits from "./components/Fruits";

//we can reuse the components
//we can pass props by using attributes
function App() {
  let arr = [1, 3, 5];
  let obj = {
    height: "5,6",
    race: "Somroo",
  };
  return (
    <div className="App">
      <Hello />
      <Button name="Ubaid" message="___" emoji="💋" array={arr} object={obj} />
      <Fruits />
    </div>
  );
}

export default App;
