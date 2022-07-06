import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
    margin: 0;
    padding: 0;
    border-top: 1px solid rgba(87, 92, 0, 0.6);
`
const RemoveButton = styled.button`
  display: inline-block;
  margin-bottom: 1rem;
  padding: .5rem 1rem 0 .5rem; 
  font-size: 1.0rem;
  border: none;
  background-color: #e2e2e2;
  border-radius: 0.6rem;
  transition: all 0.6s linear;
  &:hover {
    background-color: #ccc;
  }
`

const BasketItem = ({ basketItem, removeFromBasket }) => {

    return(
        <ListItem>
            <h3>{basketItem.name}</h3>
            <p>£{basketItem.price.toFixed(2)}
                <RemoveButton onClick={() => removeFromBasket(basketItem)} >&#10060; Remove</RemoveButton>
            </p>
        </ListItem>
    )
}

export default BasketItem;