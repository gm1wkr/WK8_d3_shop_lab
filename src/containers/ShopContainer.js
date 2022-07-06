import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Basket from '../components/Basket';
import Footer from '../components/Footer';
import styled from 'styled-components';

const MainArea = styled.main`
  display: flex;
  margin-bottom: 2rem;
`

const Wrapper = styled.div`
  background-color: rgba(87, 92, 0, 0.15);
`

const ShopContainer = () => {

  const [productList, setProductList] = useState([
    {id: 1, name: "Snapping Purple Daisy", price: 10.99, description: "A snapping purple daisy with added bit", image: "./images/flower1.jpeg"},
    {id: 2, name: "Carniverous Ivy", price: 16.00, description: "This Ivy is just awesome!", image: "./images/flower1.jpeg"},
    {id: 3, name: "Rampant Rubekia", price: 12.00, description: "Fast growing south American flower.", image: "./images/flower1.jpeg"},
    {id: 4, name: "Cyanus Arvenis", price: 160.00, description: "A nice bluish flowery thing that grows on a stalk", image: "./images/flower1.jpeg"},
    {id: 5, name: "Lobelia", price: 10.00, description: "A small delicate creeping plant with blue and purple flowers.", image: "./images/flower1.jpeg"},
    {id: 6, name: "Trifolium Purpurae", price: 16.00, description: "A pruple variet of creeping trifolium", image: "./images/flower1.jpeg"},
    {id: 7, name: "Rubekia", price: 12.00, description: "With its big yellow flowers this is a summer favourite.", image: "./images/flower1.jpeg"},
    {id: 8, name: "Cyanus Arvenis", price: 160.00, description: "A nice bluish flowery thing that grows on a stalk", image: "./images/flower1.jpeg"}
  ]);  

  const [basket, setBasket] = useState([]); 
  const [basketTotal, setBasketTotal] = useState(0)

  const addToBasket = (product) => {
    const basketCopy = [...basket, product];
    setBasket(basketCopy);
  }

  const removeFromBasket = (product) => {
    const basketCopy = [...basket];
    const index = basket.indexOf(product);
    basketCopy.splice(index, 1);
    setBasket(basketCopy);
  }


  const calculateTotal = (basket) => {
    if(!basket) return;
    
    const total = basket.reduce( ( total, item ) =>  {
      return total + item.price
    }, 0);
    setBasketTotal(total);
  }


  useEffect( () => {
    calculateTotal(basket);
  }, [basket]);


  const [user, setUser] = useState({
    name: "Sandra Wan"
  })
   
  return (
    <Wrapper>
      <Header user={user}/>
      <MainArea>
        <ProductList productList={productList} addToBasket={addToBasket} />
        <Basket basket={basket} basketTotal={basketTotal} removeFromBasket={removeFromBasket} />
      </MainArea>
      <Footer/>
    </Wrapper>
  )
}

export default ShopContainer;