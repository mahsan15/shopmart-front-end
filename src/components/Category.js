import React from 'react'
import {Link} from "react-router-dom"

const Category = (props) => {

    let catUrl = "";
if(props.catName === "GameConsole"){
    catUrl = "https://th.bing.com/th/id/R.cdbf8264341f088fd46348497a3f2be9?rik=nWmQiuaIhHLwEg&riu=http%3a%2f%2fimg.game.co.uk%2fml2%2f4%2f7%2f6%2f9%2f476904_xb1_a.png&ehk=dtZAETGzh3zTJwZKReu7w6toa1ZoKcr3pYJhOYdcYkc%3d&risl=&pid=ImgRaw&r=0";
}else if(props.catName === "bathroom"){
    catUrl = "https://thumbs.dreamstime.com/b/bathroom-icon-digital-purple-any-design-isolated-white-vector-illustration-152971269.jpg";
}else if(props.catName === "beauty"){
    catUrl = "https://th.bing.com/th/id/OIP.flwYAh332yh4ckgqU9ZzJwHaHa?pid=ImgDet&w=640&h=640&rs=1";
}else if(props.catName === "food"){
    catUrl = "https://th.bing.com/th/id/R.1d6bafa35660a50d9800244ad4ec35fc?rik=uCMfJ7wgn6jwjA&pid=ImgRaw&r=0";
}else if(props.catName === "furniture"){
    catUrl = "https://th.bing.com/th/id/R.519c1b9e4f57fa5f5b306d8c109d2042?rik=0VqBlb0A58v42w&pid=ImgRaw&r=0";
}else if(props.catName === "office"){
    catUrl = "https://cdn-icons-png.flaticon.com/512/3062/3062792.png";
}else if(props.catName === "sport"){
    catUrl = "https://cdn-icons-png.flaticon.com/512/1198/1198314.png";
}

    return (
        <div className="cat-card">

            <Link to = {`/productsByCategory/${props.catName}`}> 
                <img src={catUrl} alt={props.catName}/>   
            </Link> 

            

            <div className="catContent">
                <h3>{props.catName}</h3>
                
            </div>

    </div>
    )
}   

export default Category
