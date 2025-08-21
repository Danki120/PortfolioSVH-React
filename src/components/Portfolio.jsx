import Header from "./Header"

export default function Portfolio({children}){
    return(
        <>
            <section className="portfolio">
                <ul>{children}</ul>
            </section>
        </>
    )
}