export default function Fruits() {
  let fruits = ["Apple", "Banana", "Peach", "Watermelon"];
  //map can be used to loop through array & perform any functions in it. map returns the new array
  return (
    <ol>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ol>
  );
}
