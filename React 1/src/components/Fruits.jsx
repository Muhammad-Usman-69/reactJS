import Fruit from "./Fruit";

export default function Fruits() {
  //only arrayn
  // let fruits = ["Apple", "Banana", "Peach", "Watermelon"];
  //array object
  let fruits = [
    { name: "Apple", price: 200, emoji: "🍎" },
    { name: "Banana", price: 120, emoji: "🍌" },
    { name: "Peach", price: 160, emoji: "🍑" },
    { name: "Watermelon", price: 30, emoji: "🍉" }
  ]
  //map can be used to loop through array & perform any functions in it. map returns the new array
  return (
    //for simple array
    /*<ol>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ol>*/
    //for array object
    /* <ol>
      {fruits.map(fruit => (
        <li key={fruit.name}>{fruit.name}'s price is Rs. {fruit.price} and looks like {fruit.emoji}</li>
      ))}
    </ol> */
    //from component
    <ol>
      {fruits.map(fruit => (
        <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
      ))}
    </ol>
  );
}
