import React from 'react';
import styled from 'styled-components';
import CardImage from './CardImage';

const Card = styled.div`
  margin: 2rem 1rem;
  margin-bottom: 0;
  background-color: #eee; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const CardHeader = styled.h3``

const CardDescription = styled.p``

const CardPrice = styled.p``

const CardButton = styled.button``




const Product = ({ product, addToBasket }) => {

  const handleAddToBasketClick = (event) => {
    addToBasket(product);
  }

  return (
            <Card>
                <CardHeader >{product.name}</CardHeader>
                <CardImage src={product.image} alt={product.name} />
                <CardDescription >{product.description}</CardDescription>
                <CardPrice >£{product.price}</CardPrice>
                <CardButton onClick={handleAddToBasketClick}>Add to Basket</CardButton>
            </Card>
    )
}

export default Product;