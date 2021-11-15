import React from 'react'
import {Link} from "react-router-dom"

const ItemCard = (props) => {
    
    return (
        <div className="card">

                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <Link to = {`/product/${props.id}`}> 
                <img className= "card-img" src={props.image}  alt={props.productName}/>   
            </Link> 

            <div className="card-body">
                <h3>{props.productName}</h3>
                <h4>Price:${props.price}</h4>
                <div className="card-icons">
                {props.bestSeller ? <i className="fa fa-line-chart" title="BestSeller"></i> :
                <i className="" title="BestSeller"></i>}
                </div>
            </div>

    </div>
    )
}   

export default ItemCard
