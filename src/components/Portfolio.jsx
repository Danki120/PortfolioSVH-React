import Header from "./Header"

export default function Portfolio({children}){
    return(
        <>
            <section className="portfolio">
                <ul>{children}</ul>
            </section>

            <section id="extras">
                <a href="https://www.behance.net/gallery/197957315/SHORT-FORM-CONTENT">SHORT FORM CONTENT PORTFOLIO</a>
                <a href="https://www.behance.net/gallery/199082967/GRAPHICS">GRAPHIC DESIGN PORTFOLIO</a>
                <a href="https://ytjobs.co/talent/vitrine/187796">YOUTUBE EDITOR PORTFOLIO</a>
            </section>
        </>
    )
}