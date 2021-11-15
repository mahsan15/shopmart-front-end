import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCatPage = () => {
  const { category } = useParams();

  const [catProd, setCatProd] = useState([]);

  useEffect(() => {
    //communicate with the backend!
    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?category=${category}`)
      .then((response) => response.json())
      .then((json) => {
        setCatProd(json.data);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <section id="section-resort-list">
        <div className="container">
          <br></br>
          <br></br>
          <h1>Category: {category}</h1>

          <hr></hr>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
            {catProd.map((catP, index) => (
              <ItemCard
                key={index}
                id={catP._id}
                productName={catP.productName}
                image={catP.photoURL}
                price={catP.price}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductCatPage;
