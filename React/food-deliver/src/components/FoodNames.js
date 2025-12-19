export default function FoodNames({menu}){
  return(
    <ul>
      {menu.map(food => {
        <li key={food.id}>{food.item}</li>
      })}
    </ul>
  )
}