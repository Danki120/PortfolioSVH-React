import { RENT_ITEMS } from "../rent"

import '../styles/Rent.css'

export default function Rent() {
    return(
        <div id="rentContainer">
            <ul>
                {RENT_ITEMS.map((item) => (
                    <li key={item.id}>
                        <p>{item.itemName}</p>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}