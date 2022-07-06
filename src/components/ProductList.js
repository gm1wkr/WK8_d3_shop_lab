import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem;
`

const ProductList = ({ productList, addToBasket }) => {

    const productNodes = productList.map( (product) =>  <Product key={product.id} product={product} addToBasket={addToBasket} />)

  return (  
        <ProductGrid>
            {productNodes}
        </ProductGrid>
    )
}

export default ProductList;