import React from 'react';
import styled from 'styled-components';
import CardImage from './CardImage';

const Card = styled.div`
  margin: 2rem 1rem;
  margin-bottom: 0;
  background-color: rgba(87, 92, 0, 0.16);
  border-radius: 1rem;;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-shadow: 2px 2px 12px -1px rgba(0,0,0,0.5);
`

const CardHeader = styled.h3``

const CardDescription = styled.p`
margin: 1rem;`

const CardPrice = styled.p`
font-size: 1.4rem;
padding-bottom: 0.4rem;
border-bottom: 1px solid rgba(87, 92, 0, 0.6);
`

const CardButton = styled.button`
  display: inline-block;
  margin-bottom: 1rem;
  padding: .5rem 1rem; 
  font-size: 1.2rem;
  border: none;
  background-color: rgba(87, 92, 0, 0.35);
  border-radius: 0.6rem;
  transition: all 0.3s linear;
  &:hover {
    background-color: rgba(87, 92, 0, 0.6);
    color: #fff;
  }
`

const Product = ({ product, addToBasket }) => {

  const handleAddToBasketClick = (event) => {
    addToBasket(product);
  }

  return (
      <Card>
          <CardHeader >{product.name}</CardHeader>
          <CardImage src={product.image} alt={product.name} />
          <CardDescription >{product.description}</CardDescription>
          <CardPrice >£{product.price.toFixed(2)}</CardPrice>
          <CardButton onClick={handleAddToBasketClick}>Add to Basket</CardButton>
      </Card>
    )
}

export default Product;