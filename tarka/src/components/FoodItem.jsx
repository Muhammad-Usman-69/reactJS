export default function FoodItem({ data }) {
  return (
    <div>
      <p>{data.title}</p>
      <img src={data.image} />
      <button>View Recipe</button>
    </div>
  );
}
