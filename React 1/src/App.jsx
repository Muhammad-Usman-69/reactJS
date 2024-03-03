import Hello from "./components/Hello";
import Button from "./components/Button";

//we can reuse the components
//we can pass props by using attributes
function App() {
  return (
    <div className="App">
      <Hello />
      <Button name="Manan" message="..." />
      <Button name="Sumeed" message="---" />
      <Button name="Ubaid" message="___" />
    </div>
  );
}

export default App;
