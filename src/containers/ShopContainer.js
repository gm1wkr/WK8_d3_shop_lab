import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Basket from '../components/Basket';
import Footer from '../components/Footer';
import styled from 'styled-components';

const MainArea = styled.main`
  display: flex;
  
`

const ShopContainer = () => {

  const [productList, setProductList] = useState([
    {id: 1, name: "Snapping Purple Daisy", price: 10.00, description: "A snapping purple daisy with added bit", image: "http://BLAH BLAH"},
    {id: 2, name: "Carniverous Ivy", price: 16.00, description: "This Ivy will eat your granny", image: "http://BLAH BLAH"},
    {id: 3, name: "Rampant Rubekia", price: 12.00, description: "Might eat the kids if over watered", image: "http://BLAH BLAH"},
    {id: 4, name: "Cyanus Arvenis", price: 160.00, description: "A nice bluish flowery thing that grows on a stalk", image: "http://BLAH BLAH"},
  ]);  

  const [basket, setBasket] = useState([]); 
  const [basketTotal, setBasketTotal] = useState(0)

  const addToBasket = (product) => {
    const basketCopy = [...basket, product];
    setBasket(basketCopy);

  }


  const calculateTotal = (basket) => {
    if(!basket) return;
    
    const total = basket.reduce( ( total, item ) =>  {
      return total + item.price
    }, 0);
    setBasketTotal(total);
    console.log(total);
  }


  useEffect( () => {
    calculateTotal(basket);
  }, [basket]);


  const [user, setUser] = useState({
    name: "Boris Johnstoned"
  })
   
  return (
    <div>
      <Header user={user}/>
      <MainArea>
        <ProductList productList={productList} addToBasket={addToBasket} />
        <Basket basket={basket} basketTotal={basketTotal} />
      </MainArea>
      <Footer/>
    </div>
  )
}

export default ShopContainer;