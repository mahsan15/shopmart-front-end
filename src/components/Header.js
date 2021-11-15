import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header>

<meta charSet="utf-8"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
    
    
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
    <a className="navbar-brand" href="/">ShopMart - Ahsan</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/products">Product Listing</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/registration">Registration</Link>
        </li>
        <li><form action="" className="grid grid-col-1">
                <input placeholder="Search Product" className="form-control" type="text" id="filter"/>
            </form></li>
    </ul>
        </div>
    </div>
</nav>
        </header>
            
        
    )
}

export default Header
