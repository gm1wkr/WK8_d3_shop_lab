import React from 'react';
import BasketList from './BasketList';
import BasketTotal from './BasketTotal';
import styled from 'styled-components';

const BasketWrap = styled.div`
  min-width: 20vw;
  margin-top: 1.6rem;
  margin-right: 1rem;;
  text-align: right;
`


const Basket = ( {basket, basketTotal, removeFromBasket} ) => {

    if(basket.length === 0) {

      return (
        <BasketWrap>
          <h2>Basket</h2>
          <p>Your basket is empty.</p>
        </BasketWrap>
      )
    }

    return(
      <BasketWrap>
        
        <BasketTotal basket={basket} basketTotal={basketTotal} />
        <BasketList basket={basket} removeFromBasket={removeFromBasket} />
      </BasketWrap>
    )
}

export default Basket;