import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  //passing as an item to another component
  return (
    <div>
      {foodData.map((data) => (
        <FoodItem key={data.id} data={data} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
