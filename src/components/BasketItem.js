import { render } from '@testing-library/react';
import React from 'react';

const BasketItem = ({ basketItem }) => {
    return(
        <li>
            <h3>{basketItem.name}</h3>
            <p>£{basketItem.price}</p>
            <button>Remove Item</button>
        </li>
    )
}

export default BasketItem;