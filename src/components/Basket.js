import React from 'react';
import BasketList from './BasketList';
import BasketTotal from './BasketTotal';


const Basket = ( {basket, basketTotal} ) => {
    return(
      <>
        <h2>Basket</h2>
        <BasketList basket={basket} />
        <BasketTotal basket={basket} basketTotal={basketTotal} />
      </>
    )
}

export default Basket;