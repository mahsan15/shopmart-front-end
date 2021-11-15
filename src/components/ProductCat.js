import React,{useEffect, useState} from 'react';
import Category from "./Category";

const CategoryList = () => {

    const [categories,setCat] = useState([]);

    useEffect(()=>{


    //GET, POST,PUT, DELETE from our Front-End TO our Back

    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/categories`)
    .then(response=>response.json())
    .then(json=>{

        
            setCat(json.data)

    })
    .catch(err=>{
        console.log(`Error ${err}`)
    })


},[])

    return (
        <section id="section-product-list">

            <div className= "container">

                <h1>Product Categories</h1>

                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

                    {categories.map((cats,index)=>(<Category  key={index} catName={cats}/>))}
                        
                </div>
            </div>
            
        </section>
    )
}

export default CategoryList
