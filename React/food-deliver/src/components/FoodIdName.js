export default function FoodIdName ({menu}){
    return(
        <ul>
            {menu.map(food => (
            <li key={food.id}>{food.id} - {food.item}</li>
             ))}
        </ul>  
    );
}