import { RENT_ITEMS } from "../rent"

import '../styles/Rent.css'

export default function Rent() {
    return(
        <div id="rentContainer">
            <img src="https://cdn.discordapp.com/attachments/1127788134218866768/1364093778880892988/final_blackmagic.gif?ex=68e7e114&is=68e68f94&hm=3a87e64f961315c2d87f2c478159c39ed9976e309d7860a00f483fb6171e4f76&" alt="" />
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