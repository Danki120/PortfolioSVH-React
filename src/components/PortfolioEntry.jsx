import { portfolioProjects } from "../projects"

export default function PortfolioEntry({name}) {
    return(
        <li className="portfolioEntry" key={name.id}>
            <title>{name.title}</title>
            <div className="gifContainer">
                <img src={name.gifOne} alt="" />
                <img src={name.gifTwo} alt="" />
                <img src={name.gifThree} alt="" />
            </div>
            <span>{name.tag}</span>
            <span>{name.roles}</span>
        </li>
    )
}