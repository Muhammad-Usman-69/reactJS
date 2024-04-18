import { useEffect, useState } from "react";

export default function Search() {
  //initializing some things
  const API = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "e48b092799a44abc88b1ba4571b709fe";

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
      const response = await fetch(`${API}?apiKey=${API_KEY}&query=${query}`);
      const data = await response.json();
    }
    //triggering function
    fetchData();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name="query"
        id="query"
      />
    </div>
  );
}
