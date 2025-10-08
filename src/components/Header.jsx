import { Link } from 'react-router-dom';
import '../styles/Header.css'
import igLogo from '../assets/logos/instagramLogo.svg';
import emailLogo from '../assets/logos/mailLogo.svg';

export default function Header({currentPage}) {

    function handleEmailButtonClick(){
        navigator.clipboard.writeText("santiproductions@gmail.com");

        alert("E-Mail copied to clipboard!!");
    }

    return (
        <div className="headerContainer">
            <div id='headerLeft'>
                <h1>
                    <Link to='/' style={{textDecoration: 'none', color:'white'}}>SANTI HAITTEL</Link>
                </h1>
                {currentPage === 'portfolio' && 
                    <Link to="/rent"><button>RENT</button></Link>
                }
                {currentPage === 'rent' && 
                    <Link to="/portfolio"><button>PORTFOLIO</button></Link>
                }
            </div>
                        

            {/* <section id="informacion">
                <h3>DIRECTOR</h3>
                <h3>EDITOR</h3>
                <h3>DP</h3>
            </section> */}
            <section id='socials'>
                <a href='https://www.instagram.com/haittel/' target='_blank' rel='noopener noreferrer'>
                    <img src={igLogo} alt="Mi Instagram." />
                </a>
                <button onClick={() => (handleEmailButtonClick())}>
                    <img src={emailLogo} alt="Click para copiar el correo electrónico." />
                </button>
                
            </section>
        </div>
    )
}