import { useParams } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeDetail from "./home-detail.jpg";


export function Subcategory(){

    const [subcate, setSubcate] = useState([]);
    const params = useParams();

    async function fetchSubCategory(){
        const res = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${params.subcategory}`);
        // console.log(res.data.meals);
        setSubcate(res.data.meals);
    }

    useEffect(()=>{
        fetchSubCategory();
    },[]);

    // console.log(params.subcategory);

    return(
        <div>
            <Navbar/>
            <div id="subcate-wrapper">
                {
                    subcate.map((item,id)=>{
                        return(
                        <div id="subcate-cont" key={id}>
                            <div>
                                <img src={item.strMealThumb} id="subcate-img"/>
                                <h3 id="subcate-name">{item.strMeal}</h3>
                            </div>
                        </div>)
                    })
                }
            </div>
            {/* <div id="subcate-wrapper">
                <div id="subcate-cont">
                    <div>
                        <img src={HomeDetail} id="subcate-img"/>
                        <h3 id="subcate-name">jack</h3>
                    </div>
                </div>
            </div> */}
            <Footer/>
        </div>
    )
}
