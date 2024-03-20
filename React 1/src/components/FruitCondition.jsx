export default function FruitCondition() {
  let fruits = [
    { name: "Apple", price: 200, emoji: "🍎" },
    { name: "Banana", price: 120, emoji: "🍌" },
    { name: "Peach", price: 160, emoji: "🍑" },
    { name: "Watermelon", price: 30, emoji: "🍉" },
  ];
  //returning fruits if it the price is above 150 using terniray oberator
  return (
    <div>
      <p>Fruits whose price is above 150 are ✅</p>
      {fruits.map((fruit) => (
        <h3 key={fruit.name}>
          {fruit.price > 150
            ? "✅" + fruit.name + fruit.emoji
            : "❌" + fruit.name + fruit.emoji}
        </h3>
      ))}
    </div>
  );
}
