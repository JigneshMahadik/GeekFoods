import Footer from "./footer.js";
import Navbar from "./navbar.js";
import {quoteData} from "./quoteData.js"
import "./style.css"

function Quote(){
    return (
        <div>
            <Navbar/>
            {
                quoteData.map((data)=>{
                    return (
                        <div className="quote-card" key={data.id}>
                            <div>{data.detail}</div>
                            <p id="author">{data.author}</p>
                        </div>
                    );
                })
            }
            <Footer/>
        </div>
    );
}

export default Quote;