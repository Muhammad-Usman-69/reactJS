import style from "./footer.module.css";
export default function Footer(props) {
  return (
    <div className={style.container}>
      <p>Total Completed: {props.completed}</p>
      <p>Total Todo: {props.total}</p>
    </div>
  );
}
