export default function FoodPrice({ menu }) {
  return (
    <ul>
      {menu.map(food => (
        <li key={food.id}>{food.item}: {food.price}</li>
      ))}
    </ul>
  );
}