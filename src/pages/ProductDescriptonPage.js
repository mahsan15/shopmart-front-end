
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom"

const ProductDescriptonPage = () => {


    const {id } = useParams();

    const [product, setProduct] = useState({
        productName:"",
        photoURL:"",
        description:"",
        price :0,
        bestSeller: false,
        productCategory: ""

    })


    useEffect(()=>{

        //communicate with the backend!
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/${id}`)
        .then(response=>response.json())
        .then(json=>{
    
            
            setProduct(json.data);
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    
    
    },[])


    return (
    <div className="grid grid-row-3" id="main-container">  
        <Header/>
        <main>
            <section id="resort-description-section">
                    <div className="container grid grid-col-4 grid-gap-2">
        
                        <img src={product.photoURL} alt={product.productName}/>
                    
                        <div className="resort-description-content-area">
                            <br></br>
                            <br></br>
                            <h1>{product.productName}</h1>
                            <hr></hr>
                            <h4>Current price: $ {product.price}</h4>
                            <hr></hr>
                            <h3>Details</h3>
                            
                            <p>{product.description}</p>
                            <hr></hr>
                            <h4>Category: </h4>
                            
                            <p>{product.productCategory}</p>
                            <hr></hr>
                            <h4>Best Seller</h4>
                            <p>{product.bestSeller ?  "Yes" : "No"}</p>

                        </div>
                    </div>
        
                </section>
        </main>
        <Footer/>
    </div>
    )
}

export default ProductDescriptonPage
