import React from 'react'
import { Link } from 'react-router-dom';

export const my404Component = () => {
    return (
        <div>
    <h1>404 - Not Found!</h1>
    <img src="https://media1.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif?cid=ecf05e47wdvg0g4r9fux9ao5gibyf0k2nk920inucehsgw5k&rid=giphy.gif&ct=g" alt="" />
    <Link to="/">Go Home</Link>
    </div>
    )
}

export default my404Component;
