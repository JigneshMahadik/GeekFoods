import "./style.css"
import FooterLogo from "./footer-logo";
import fb from './fb.svg'
import github from './github.svg'
import basketball from './basketball.svg'
import insta from './insta.svg'
import twitter from './twitter.svg'

function Footer(){
    return (
        <div className="footer">
            <FooterLogo />
            <br/>
            <p id="footer-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Incidunt consequuntur amet culpa cum itaque neque.</p>
            <div id="footer-menu">
                <p>About</p>
                <p>Careers</p>
                <p>History</p>
                <p>Services</p>
                <p>Projects</p>
                <p>Blog</p>
            </div>
            <div id="footer-icons">
                <img src={fb} alt="NA"/>
                <img src={insta} alt="NA"/>
                <img src={twitter} alt="NA"/>
                <img src={github} alt="NA"/>
                <img src={basketball} id="ball" alt="NA"/>
            </div>
        </div>
    );
}


export default Footer;