import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Shop from './Shop';
import Cart from './Cart';

const Routes = () => {
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartItemNames, setCartItemNames] = useState([]);

  //Add a card to the list of clicked cards
  function addToCart(e) {
    const itemName =
      e.target.previousSibling.previousSibling.previousSibling.textContent;
    const itemCount = parseInt(e.target.previousSibling.value);

    //Remove the $ symbol from the price
    const itemPrice = e.target.previousSibling.previousSibling.textContent.replace(
      /\$/g,
      ''
    );

    const totalItemPrice = itemPrice * itemCount;

    const newCartItem = {
      name: itemName,
      price: itemPrice,
      count: itemCount,
      totalPrice: totalItemPrice,
    };

    // Update the cart item count and total price
    const newCartNumbersState = [...cart];
    newCartNumbersState.forEach((item) => {
      if (item.name === newCartItem.name) {
        item.count += itemCount;
        item.totalPrice = itemPrice * item.count;
      }
    });
    setCart(newCartNumbersState);

    //Add the names of current cart items to an array
    setCartItemNames([...cartItemNames, newCartItem.name]);

    //Then if the cart doesn't include anything with the names from the above array, update the cart with the new item
    if (!cartItemNames.includes(newCartItem.name)) {
      setCart([...cart, newCartItem]);
    }
    setCartSize(cartSize + newCartItem.count);
    setCartPrice(cartPrice + itemPrice * itemCount);
  }

  function removeStateItem(e) {
    const targetId = parseInt(e.target.id);
    const cartToSplice = [...cart];
    const splicedItem = cartToSplice.splice(targetId, 1);
    setCart(cart.filter((obj) => cart.indexOf(obj) !== targetId));
    setCartSize(cartSize - splicedItem[0].count);
    setCartPrice(cartPrice - splicedItem[0].price);
  }

  function checkForNegative(e) {
    if (e.target.value <= 0) {
      e.target.value = 1;
    }
  }

  return (
    <BrowserRouter>
      <Navbar cartSize={cartSize} />
      <Switch>
        <Route exact path='/shopping-cart' component={HomePage}></Route>
        <Route
          exact
          path='/shopping-cart/shop'
          render={(props) => (
            <Shop
              {...props}
              addToCart={addToCart}
              setCart={setCart}
              checkForNegative={checkForNegative}
            />
          )}
          addToCart={addToCart}
        ></Route>
        <Route
          exact
          path='/shopping-cart/cart'
          render={(props) => (
            <Cart
              {...props}
              cart={cart}
              setCart={setCart}
              cartPrice={cartPrice}
              removeStateItem={removeStateItem}
            />
          )}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
