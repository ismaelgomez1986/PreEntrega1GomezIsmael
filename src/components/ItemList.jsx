import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productos } from '../data/Products';
import { useParams } from 'react-router-dom';
const ItemList = () => {

  const [products, setProducts] = useState([]);
  const { idCategories } = useParams()

  useEffect(() => {
    if (idCategories) {
      getProduct().then((resp) => {
        setProducts(resp.filter(prod => prod.categories === idCategories))
      }).catch((error) => {
        console.log(error);
        // setProducts(error)
      })
    } else {
      getProduct().then((resp) => {
        console.log(resp);
        setProducts(resp)
      }).catch((error) => {
        console.log(error);
        // setProducts(error)
      })
    }

    return () => setProducts([])
  }, [idCategories]);

  const getProduct = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2500);
    })
  }

  return (
    <div>
      <h1 className='my-3'>Lista de productos</h1>
      <div className='flex justify-around justify-items-center flex-wrap my-8 mx-5 py-3'>
        {products.length
          ?
          products.map((prod) => <Item className='my-5' 
            key={prod.id}
            // title={prod.title}
            // description={prod.description}
            // price={prod.price}
            // picture={prod.picture}
            {...prod}
          />)
          :
          <h2 className='text-lg white font-bold'>Loading...</h2>}
      </div>
    </div>
  );
}

export default ItemList;
