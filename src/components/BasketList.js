import React from 'react';
import BasketItem from './BasketItem';
import styled from 'styled-components';

const List = styled.ul`
    margin-top: 1rem;
    padding: 0;
    list-style-type: none;
    border-top: 1px solid rgba(87, 92, 0, 0.6);
    border-bottom: 1px solid rgba(87, 92, 0, 0.6);
`

const BasketList = ({ basket,removeFromBasket }) => {

    const basketNodes = basket.map( ( basketItem) => {
   return <BasketItem 
            key={basketItem.id} 
            basketItem={basketItem} 
            removeFromBasket={removeFromBasket} 
          />
    });



    return(
      <>
        <List>
          {basketNodes}
        </List>
      </>
    )
}

export default BasketList;