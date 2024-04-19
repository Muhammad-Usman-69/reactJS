import { useEffect, useState } from "react";
import style from "../modules/search.module.css"

export default function Search({ foodData, setFoodData }) {
  //initializing some things
  const API = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "a292d1a5d5544cdd98b64f89b4935ebd";
  //state for query
  const [query, setQuery] = useState("Chicken Tikka");
  //hooks are function in comp like useState
  //every hook has some function
  //useEffect hook allows us to sync with an external system
  /* syntax is
  useEffect(() => {}, []); */
  //"()=>{}" is the callback function and "[]" is the dependency for syncronization
  useEffect(() => {
    //making function asyncrhonous
    async function fetchData() {
      // const response = await fetch(`${API}?apiKey=${API_KEY}&query=${query}`);
      // const data = await response.json();

      //setting data
      setFoodData(data.results);
    }
    //triggering function
    fetchData();
  }, [query]);
  return (
    <div className={style.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name="query"
        id="query"
        className={style.input}
        placeholder="Search any food..."
      />
    </div>
  );
}
