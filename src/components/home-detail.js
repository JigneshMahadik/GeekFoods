import HomeDetailPic from "./home-detail.jpg"
import "./style.css"

function HomeDetail(){
    return (
        <div>
            <div className="homeDetailContainer">
                <img src={HomeDetailPic} id="homeDetailPic" alt="NA"/>
                <div id="homeDetails">
                    <h1 id="hd1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                    <p id="hd2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! 
                        Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat
                        totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                    </p>
                    <button id="getintouchbtn">Get in Touch</button>
                </div>
            </div>
        </div>
    );
}

export default HomeDetail;