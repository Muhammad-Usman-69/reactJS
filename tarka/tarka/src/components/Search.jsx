import { useEffect, useState } from "react";

export default function Search() {
  //state for query
  const [query, setQuery] = useState("Chicken Tikka");
  //hooks are function in comp like useState
  //every hook has some function
  //useEffect hook allows us to sync with an external system
  //syntax is: "()=>{}" is the callback function and "[]" is the dependency for syncronization
  //useEffect(() => {}, []);
  useEffect(() => {
    console.log("hi");
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
