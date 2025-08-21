import ContactButton from "./ContactButton"
import { Link } from "react-router-dom"
import '../styles/Frontpage.css'


export default function Frontpage(params) {
    return(
        <div id="frontpageContainer">
            <Link to='/portfolio'>
                <div className="frontpageElement">
                    <span>Portfolio</span>
                    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzJ2Z3U3ZHJkZzE5YTEyMHQzdmt0dmFuNnBxMjNsbnRwbTR5YjZ4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7LBjFDdXpBEqsvyzE9/giphy.gif"
                     alt="Portfolio" 
                     />
                </div>
            </Link>
            <Link to='/rent'>
                <div className="frontpageElement">
                    <span>Rent</span>
                    <img
                     src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnptb2I5dHd5aGNiOTV3a3V5NnUzaW1zeXhjbmx6emp2MGdjcHU5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/crgu5ZziC3odG98cdh/giphy.gif" 
                     alt="Rent Equipment" />
                </div>            
            </Link>

        </div>
    )
}