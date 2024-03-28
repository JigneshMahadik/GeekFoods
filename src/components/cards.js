import "./style.css"
import {data} from './data.js';
import img from "./cardPic.jpg"

function Cards(){
    return (
        <div className="cards">
            {
                data.map((item)=>{
                    return(
                    <div id="card" key={item.id}>
                        <p id="cardDesc">{item.desc}</p>
                        <br/>
                        <div id="cardPicDetail">
                            <img src={img} id="cardPic" alt="NA"/>
                            <div>
                                <p id="cardName">{item.name}</p>            
                                <p>{item.role}</p>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Cards;