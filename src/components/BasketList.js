import React from 'react';
import BasketItem from './BasketItem';

const BasketList = ({ basket }) => {

    const basketNodes = basket.map( ( basketItem, index) => <BasketItem key={index} basketItem={basketItem} />);



    return(
      <>
        <ul>
          {basketNodes}
        </ul>
      </>
    )
}

export default BasketList;