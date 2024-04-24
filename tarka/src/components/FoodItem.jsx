import style from "../modules/fooditem.module.css";

export default function FoodItem({ data, setFoodId }) {
  return (
    <div className={style.container}>
      <img className={style.img} src={data.image} />
      <p className={style.txt}>{data.title}</p>
      <div className={style.btn_container}>
        <button className={style.btn} onClick={() => setFoodId(data.id)}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
