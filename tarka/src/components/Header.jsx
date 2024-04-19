import style from "../modules/header.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.icon_container}>
        <img className={style.img} src="./public/favicon.jpg" />
        <span className={style.txt}>tarka</span>
      </div>
      <div>
        <p className={style.txt}>Food & Recipe App</p>
      </div>
    </div>
  );
}
