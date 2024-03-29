import { useState } from "react";
import List from "./List";
import style from "./input.module.css";

export default function Input() {
  //input from form
  const [input, setInput] = useState({ name: "", status: false });
  //list of inputs
  const [list, setlist] = useState([]);
  //handling inputs
  function inputHandle(e) {
    //prevent default submit
    e.preventDefault();
    //putting input to list using spread operators
    setlist([...list, input]);
    //clearing input
    setInput({name: ""});
  }
  return (
    <>
      <form className={style.form} onSubmit={(e) => inputHandle(e)}>
        <input
          className={style.input}
          type="text"
          value={input.name}
          onChange={(e) => setInput({name: e.target.value, status: false})}
          placeholder="Have Dinner at 4'O Clock"
        />
        <button className={style.button} type="submit">
          Add
        </button>
      </form>
      <div className={style.list_container}>
        {list.map((item) => (
          //passing it to list
          <List key={item.name} item={item} list={list} setlist={setlist} />
        ))}
      </div>
    </>
  );
}
