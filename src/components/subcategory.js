import { useParams } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import axios from "axios";


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
    })

    console.log(params.subcategory);

    return(
        <div>
            <Navbar/>
            <div>
                {
                    subcate.map((item,id)=>{
                        return(<div key={id}>
                            <p>{item.strMeal}</p>
                        </div>)
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}