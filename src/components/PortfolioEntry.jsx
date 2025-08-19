export default function PortfolioEntry({gifOne, gifTwo, gifThree, title, tag, roles, link}) {
    return(
        <a href={link} target="_blank" rel="noopener noreferrer">
            <article className="portfolioEntry">
                <p>{title}</p>
                <div className="gifContainer">
                    {gifOne != '' && <img src={gifOne} alt="" />}
                    {gifTwo != '' && <img src={gifTwo} alt="" />}
                    {gifThree != '' && <img src={gifThree} alt="" />}
                </div>
                <div className="extraInfo">
                    <span>{tag}</span>
                    <span>{roles}</span>
                </div>    
            </article>
        </a>
        
    )
}