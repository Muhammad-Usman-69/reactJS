import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import Container from "./components/Container";
import Recipe from "./components/Recipe";

function App() {
  //initializing for food data
  const [foodData, setFoodData] = useState([]);
  //initializing for food id
  const [foodId, setFoodId] = useState("632342");
  return (
    <>
      <Header />
      <Search setFoodData={setFoodData} />

      {/* passing foodlist as a child (object) */}
      <Container>
        <FoodList foodData={foodData} setFoodId={setFoodId} />
        <Recipe foodId={foodId} />
      </Container>
    </>
  );
}

export default App;
