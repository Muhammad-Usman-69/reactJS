import style from "./list.module.css";
export default function List({ list }) {
  return (
    <>
      <p className={style.list} key={list}>{list}</p>
      <hr></hr>
    </>
  );
}
