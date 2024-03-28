import "./style.css"
import logo from "./logo.svg"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo-content">
                <img src={logo} id="logo" alt="NA"/>
                <h2 className="logo-text">GeekFoods</h2>
            </div>
            <div className="menu">
                <div id="home">
                    <Link to="/" id="menuH">Home</Link>
                </div>
                <Link to="/Quote" id="menuQ">Quote</Link>
                <Link to="/Restaurants" id="menuR">Restaurants</Link>
                <Link to="/Foods" id="menuF">Foods</Link>
                <Link to="/Contact" id="menuC">Contact</Link>
            </div>
            <div>
                <button id="get-started-btn">Get Started</button>
            </div>
        </div>
    );
}

export default Navbar;