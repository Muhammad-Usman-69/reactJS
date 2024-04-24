import style from "../modules/container.module.css";

export default function Container({ children }) {
  // this is a structural component
  return <div className={style.container}>{children}</div>;
}
