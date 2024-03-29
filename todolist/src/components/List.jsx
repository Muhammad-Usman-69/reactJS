import style from "./list.module.css";
export default function List({ item, list, setlist }) {
  //adding delete funcationability
  function handleDelete(item) {
    //returning array without the item from list using filter
    const filteredList = list.filter((listItem) => listItem !== item);
    console.log(filteredList)
    //setting the new list
    setlist(filteredList);
  }
  return (
    <>
      <div>
        <p className={style.list}>
          {item.name}
          <button onClick={() => handleDelete(item.name)} className={style.button}>
            X
          </button>
        </p>
      </div>
      <hr></hr>
    </>
  );
}
