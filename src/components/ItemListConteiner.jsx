import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListConteiner = ({greeting}) => {
  return (
    <div className='container text-center'>{greeting}</div>
  )
}

export default ItemListConteiner