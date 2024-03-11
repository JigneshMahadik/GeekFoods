import bg_image from "./bg-banner-img.jpg"
import "./style.css"
import HomeDetail from "./home-detail";
import Cards from "./cards";
import Footer from "./footer";
import Navbar from "./navbar";

function Home_Background(){
    return (
        <div>
            <Navbar />
            <img src={bg_image} className="bgImage" alt="NA"/>
            <div className="banner_text">
                <h1 id="h1">Let us find your</h1>
                <h1 id="h2">Forever Food.</h1>
                <div id="p1">
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p >Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                </div>
                <div>
                    <button id="banner_btn1">Search Now</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button id="banner_btn2">Know More</button>
                </div>
            </div>
            <HomeDetail />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home_Background;