import {useEffect,useContext} from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CategoryList  from "../components/ProductCat";
import BestSellerList  from "../components/BestSeller";
import ProductContext from "../context/ProductContext";


const HomePage = () => 
{

    const {setProducts} = useContext(ProductContext);
    useEffect(()=>{


        //GET, POST,PUT, DELETE from our Front-End TO our Back
    
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?bestSeller=yes`)
        .then(response=>response.json())
        .then(json=>{
    
            
            setProducts(json.data)
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    
    
    },[])

    return (
    <div className="grid grid-row-3" id="main-container">  
            <Header/>
            <main>
                <Hero/>
                <br></br>
                <hr></hr>
                <CategoryList/>
                <br></br>
                <hr></hr>
                <BestSellerList/>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage
