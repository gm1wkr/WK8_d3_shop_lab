import React from 'react';
import styled from 'styled-components';

const ListItemOuter = styled.li`
  list-style: 0;
`

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 2rem;
  `
  

  const ListItemInner = styled.li`
  color: #fff;
  background-color: #10662a;
  padding: 1rem;
  margin-right: 2rem;

`

const ListInnerHead = styled(ListItemInner)`
  font-weight:bold;
  font-size: 1.5rem;
`
const ListPrice = styled(ListItemInner)`
  font-weight:bold;
  font-size: 2.4rem;
`


const Product = ({ product, addToBasket }) => {

  const handleAddToBasketClick = (event) => {
    addToBasket(product);
  }

  return (
    <>
        <ListItemOuter>
            <List>
                <ListInnerHead >Name: {product.name}</ListInnerHead>
                <ListPrice >Price: £{product.price}</ListPrice>
                <ListItemInner >Desc: {product.description}</ListItemInner>
                <ListItemInner><button onClick={handleAddToBasketClick}>Add to Basket</button></ListItemInner>
            </List>
        </ListItemOuter>
    </>
  
    )
}

export default Product;