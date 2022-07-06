import React from 'react';
import BasketItem from './BasketItem';
import styled from 'styled-components';

const List = styled.ul`
    list-style-type: none;
`

const BasketList = ({ basket }) => {

    const basketNodes = basket.map( ( basketItem, index) => <BasketItem key={index} basketItem={basketItem} />);



    return(
      <>
        <List>
          {basketNodes}
        </List>
      </>
    )
}

export default BasketList;