import { useState } from "react";
import List from "./List";
import style from "./input.module.css";

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
    <>
      <form className={style.form} onSubmit={(e) => inputHandle(e)}>
        <input
          className={style.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Have Dinner at 4'O Clock"
        />
        <button className={style.button} type="submit">
          Add
        </button>
      </form>
      <div className={style.list_container}>
        {list.map((item) => (
          //passing it to list
          <List key={item} item={item} list={list} setlist={setlist} />
        ))}
      </div>
    </>
  );
}
