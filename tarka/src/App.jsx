import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  //initializing for food data
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container foodData={foodData} />
    </>
  );
}

export default App;
