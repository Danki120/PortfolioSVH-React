import igLogo from '../assets/logos/instagramLogo.svg';
import emailLogo from '../assets/logos/mailLogo.svg';

export default function Header(currentPage) {
    return (
        <div className="headerContainer">
            <h1>
                SANTI HAITTEL
            </h1>

            <button>RENT</button>

            <section className="informacion">
                <h3>DIRECTOR</h3>
                <h3>EDITOR</h3>
                <h3>DP</h3>
            </section>
            <section className='socials'>
                <button>
                    <img src={igLogo} alt="Mi Instagram." />
                </button>
                <button>
                    <img src={emailLogo} alt="Click para copiar el correo electrónico." />
                </button>
                
            </section>
        </div>
    )
}