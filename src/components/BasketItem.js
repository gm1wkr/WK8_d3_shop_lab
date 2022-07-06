import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`

`


const BasketItem = ({ basketItem }) => {
    return(
        <ListItem>
            <h3>{basketItem.name}</h3>
            <p>£{basketItem.price}</p>
            <button>Remove Item</button>
        </ListItem>
    )
}

export default BasketItem;