export default function FoodFullMenu({ menu }) {
  return (
    <ul>
      {menu.map(food => (
        <li key={food.id}>
          ID: {food.id}, Item: {food.item}, Price: {food.price}, Category: {food.category}, 
          Veg: {food.veg ? "Yes" : "No"}, Rating: {food.rating}, Preparation Time: {food.prepTime}
        </li>
      ))}
    </ul>
  );
}