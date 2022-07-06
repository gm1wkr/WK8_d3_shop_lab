import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const List = styled.ul`
    list-style-type: none;
    flex-grow: 1;
`

const ProductList = ({ productList, addToBasket }) => {

    const productNodes = productList.map( (product) =>  <Product key={product.id} product={product} addToBasket={addToBasket} />)

  return (
    <>
        
        <List>
            {productNodes}
        </List>
    </>
    )
}

export default ProductList;