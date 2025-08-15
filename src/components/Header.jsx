import igLogo from './logos/instagramLogo.svg';
import emailLogo from './logos/mailLogo.svg';

function Header(currentPage) {
    return (
        <div className="headerContainer">
            <h1>
                SANTI HAITTEL
            </h1>

            <button>RENT</button>

            <div className="informacion">
                <h3>DIRECTOR</h3>
                <h3>EDITOR</h3>
                <h3>DP</h3>
                <img src={igLogo} alt="Mi Instagram." />
                <img src={emailLogo} alt="Click para copiar el correo electrónico." />
            </div>
        </div>
    )
}