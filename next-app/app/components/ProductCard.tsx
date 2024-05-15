
import React from 'react'
import AddToCartButton from './AddToCartButton'

import styles from './ProductCard.module.css';

const ProductCard = () => {
  // <div className={'p-5 my-5 text-xl bg-sky-400 text-white hover:bg-sky-600 ' + styles.cardContainer}>

  return (
    <div data-theme="winter">
        <AddToCartButton>Add to cart test</AddToCartButton>
    </div>
  )
}

export default ProductCard