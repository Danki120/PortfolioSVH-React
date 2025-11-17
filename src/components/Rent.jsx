import { RENT_ITEMS } from "../rent"

import '../styles/Rent.css'

export default function Rent() {
    return(
        <div id="rentContainer">
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnJxcjVoanJlcXJxYzU3MGJ1OHg1dHJreDdxN2JoaTkybWFwaTdsMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c9Fyu9UOjzq0t932UK/giphy.gif" alt="" />
            <ul>
                {RENT_ITEMS.map((item) => (
                    <li key={item.id}>
                        <p>{item.itemName} </p><p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}