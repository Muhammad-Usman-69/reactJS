import { useState } from "react";
import List from "./List";

export default function Input() {
  //input from form
  const [input, setInput] = useState("");
  //list of inputs
  const [list, setlist] = useState([]);
  //handling inputs
  function inputHandle(e) {
    //prevent default submit
    e.preventDefault();
    //putting input to list using spread operators
    setlist([...list, input]);
    //clearing input
    setInput("");
  }
  return (
    <div>
      <form onSubmit={(e) => inputHandle(e)}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {list.map((item) => (
          //passing it to list
          <List key={item} list={item} />
        ))}
      </div>
    </div>
  );
}
