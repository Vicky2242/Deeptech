export default function FoodCategory({ menu }) {
  return (
    <ul>
      {menu.map(food => (
        <li key={food.id}>
          {food.item} — {food.category} — {food.veg ? "Veg" : "Non-Veg"}
        </li>
      ))}
    </ul>
  );
}