import FoodList from "./FoodList";
import Recipe from "./Recipe";
import style from "../modules/container.module.css";

export default function Container({ foodData }) {
  // this is a structural component
  return (
    <div className={style.container}>
      <FoodList foodData={foodData} />
      <Recipe />
    </div>
  );
}
