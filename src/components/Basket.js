import React from 'react';
import BasketList from './BasketList';
import BasketTotal from './BasketTotal';
import styled from 'styled-components';

const BasketWrap = styled.div`
  background-color: #00ffcc;
  min-width: 20vw;
`


const Basket = ( {basket, basketTotal} ) => {

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
        <BasketList basket={basket} />
      </BasketWrap>
    )
}

export default Basket;