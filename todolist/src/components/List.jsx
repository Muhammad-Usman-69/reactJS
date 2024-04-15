import style from "./list.module.css";
export default function List({ list, setlist }) {
  //adding delete funcationability
  function handleDelete(name) {
    //returning array without the item from list using filter
    const filteredList = list.filter((item) => item.name !== name);
    //setting the new list
    setlist(filteredList);
  }
  //handling an input in list
  function handleComplete(name) {
    //taking new array with new status
    const arr = list.map((item) =>
      //matching list name with the given name and conditioning through "terniary operator" and changing object status using "spread operator"
      item.name === name
        ? { ...item, status: !item.status }
        : { ...item, status: item.status }
    );
    //setting new list
    setlist(arr);
  }
  return (
    <div className={style.list_container}>
      {list.map((item) => (
        <>
          <p className={style.list} key={item.name}>
            <span className={item.status ? style.completed : ""} onClick={() => handleComplete(item.name)}>
              {item.name}
            </span>
            <button
              onClick={() => handleDelete(item.name)}
              className={style.button}
            >
              X
            </button>
          </p>
          <hr></hr>
        </> 
      ))}
    </div>
  );
}
