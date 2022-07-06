import React from 'react';
import styled from 'styled-components';

const TotalPrice = styled.p`
    font-size: 2rem;
    text-align: center;
    background-color: #fc2;
    margin: 0;

`

const BasketTotal = ({ basketTotal }) => {

    

    return(
        <TotalPrice>
            Order total: £{basketTotal}
        </TotalPrice>
    )
}

export default BasketTotal;