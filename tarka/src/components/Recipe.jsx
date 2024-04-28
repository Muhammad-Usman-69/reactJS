import { useEffect, useState } from "react";
import style from "../modules/recipe.module.css";

export default function Recipe({ foodId }) {
  //state for loading
  const [loading, setLoading] = useState(true);

  //initializing some things
  const API = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a292d1a5d5544cdd98b64f89b4935ebd";
  // a292d1a5d5544cdd98b64f89b4935ebd
  // e48b092799a44abc88b1ba4571b709fe
  // 0045276943ad493f89af730f5581b4f7

  //state for food detail
  const [detail, setDetail] = useState({});

  useEffect(() => {
    //making function asyncrhonous
    async function fetchDetail() {
      const response = await fetch(`${API}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setDetail(data);
      setLoading(false);
    }
    //triggering function
    fetchDetail();
  }, [foodId]);

  return (
    <div className={style.container}>
      <h2 className={style.title}>{detail.title}</h2>

      <img className={style.img} src={detail.image} />

      <div className={style.details}>
        <span>
          <strong>⏲ {detail.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>👱‍♂️ Serves {detail.servings}</strong>
        </span>
        <span>
          <strong>
            {detail.vegetarian ? "🌳 Vegetarion" : "🍗 Non Vegetarion"}
          </strong>
        </span>
        <span>
          <strong>{detail.vegan ? "🍅 Vegan" : "🧀 Non Vegan"}</strong>
        </span>
        <span className={style.price}>
          <strong>💲 {detail.pricePerServing} Per Serving</strong>
        </span>
      </div>

      <div className={style.ingredients}>
        <h2>Ingredients</h2>

        {loading ? (
          ""
        ) : (
          <ol>
            {detail.extendedIngredients.map((ingredient) => (
              <li>
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                />
                <p>{ingredient.name}</p>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className={style.instruction}>
        <h2>Instructions</h2>

        {loading ? (
          "Loading..."
        ) : (
          <ol>
            {detail.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
