import {useEffect, useContext} from 'react';
import ItemCard from "./ItemCard";
import ProductContext from '../context/ProductContext';


const ProductList = () => {

const {products, setProducts} = useContext(ProductContext);

useEffect(()=>{


    //GET, POST,PUT, DELETE from our Front-End TO our Back

    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products`)
    .then(response=>response.json())
    .then(json=>{

        
        setProducts(json.data)
        

    })
    .catch(err=>{
    
        console.log(`Error ${err}`)
    })


},[])

    return (
        <section id="section-product-list">

            <div className= "container">
            <br></br>
            <br></br>
                <h1>Products list</h1>
                <hr></hr>
                <br></br>
                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

                    {products.map((product,index)=>( <ItemCard  key={index} id={product._id} productName={product.productName} image={product.photoURL} price={product.price} bestSeller={product.bestSeller}/>))}
                        
                </div>
            </div>
            
        </section>
    )
}

export default ProductList
