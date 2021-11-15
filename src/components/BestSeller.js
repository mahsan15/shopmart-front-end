import React,{useContext} from 'react';
import ItemCard from "./ItemCard";
import ProductContext from '../context/ProductContext';


const BestSellerList = () => {

    const {products} = useContext(ProductContext);


    return (
        <section id="section-product-list">

            <div className= "container">

                <h1>Best Sellers</h1>

                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

                    {products.map((product,index)=>( <ItemCard  key={index} id={product._id} productName={product.productName} image={product.photoURL} price={product.price} bestSeller={product.bestSeller}/>))}
                        
                </div>
            </div>
            
        </section>
    )
}

export default BestSellerList
