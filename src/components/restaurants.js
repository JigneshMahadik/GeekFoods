import { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Restaurants(){

    const [cat, setCat] = useState([]);
    const [ searchTextFound, setSearchTextFound ] = useState(true);

    async function fetchCategories(){
        const res = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
        // console.log(res.data.categories);
        setCat(res.data.categories);
    }
    // console.log(cat);    

    useEffect(()=>{
        fetchCategories();
    },[]);

    async function filterData(){
        const input = document.getElementById("filter").value;
        // console.log(input);
        const res = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
        // console.log(res.data.categories[2].strCategory);
        const filtered = res.data.categories.filter(item => item.strCategory.toLowerCase().includes(input.toLowerCase()));
        setCat(filtered);
        setSearchTextFound(filtered.length > 0);
    }

    return (
        <div>
            <Navbar/>
            <input type="text" id="filter" onChange={filterData} placeholder="Search Category..."/>
            <div className="restaurants-wrapper">
            {
                searchTextFound ? (
                    cat.map((item,id)=>{
                        return(
                            <div id="rest-cont" key={id}>
                                <img src={item.strCategoryThumb} id="rest-img"/>
                                <div id="rest-subcont">
                                    <h3>{item.strCategory}</h3>
                                    <NavLink to={`/category/${item.strCategory}`} className="visit-menu">
                                        <label id="rest-label">Visit Menu</label>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                ) : <div id="notFound">No results found !</div>
            }
                        {/* return(<div key={id}>
                        <NavLink to={`/category/${item.strCategory}`}>
                            <p>{item.strCategory}</p>
                            <img src={item.strCategoryThumb} />
                            </NavLink>
                            <br></br>
                        </div>); */}
            </div>
            {/* <div className="restaurants-wrapper">
                <div id="rest-cont">
                    <img src={HomeDetail} id="rest-img"/>
                    <div id="rest-subcont">
                        <h3>Pasta</h3>
                        <lable id="rest-label">Visit Menu</lable>
                    </div>
                </div>
            </div> */}
            <Footer/>
        </div>
    );
}

export default Restaurants;
