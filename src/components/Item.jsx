import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Item.css'



const Item = ({ id, title, price, stock, picture }) => {

    return (
        
            <div className='itemCard card shadow-md hover:scale-105 duration-200 cursor-pointer m-3 bg-white'>
                <img className='imagen w-50 h-60 rounded-xl' alt={title} src={picture}/>
                <h2>{title}</h2>
                <p className='font-bold'>${price}</p>
                <Link to={`/item/${id}`} className='underline'>Ver detalles</Link>
            </div>
    );
}

export default Item;