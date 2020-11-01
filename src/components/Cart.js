import React from 'react';
var uniqid = require('uniqid');

const Cart = (props) => {
  return (
    <div id='cart'>
      <h1 className='page-heading'>Cart</h1>
      <div id='cart-items'>
        {props.cart.length === 0 && (
          <div id='empty-cart'>
            <p>Your cart is empty. Head to the shop to add an item.</p>
          </div>
        )}
        {props.cart.length > 0 && (
          <>
            {props.cart.map((item, index) => {
              return (
                <div key={uniqid()} className='cart-item'>
                  <input
                    type='button'
                    value='X'
                    className='cart-item__delete-button '
                    id={index}
                    onClick={props.removeStateItem}
                    onMouseEnter={(e) =>
                      (e.target.className = 'cart-item__delete-button--color')
                    }
                  ></input>
                  <p className='cart-item__name'>
                    {item.name} x {item.count}
                  </p>{' '}
                  <p className='cart-item__price'>Price: ${item.price}</p>
                  {item.count > 1 && <p>Total: ${item.totalPrice}</p>}
                </div>
              );
            })}
            <div id='total-price-wrapper'>
              <p>Cart Total: ${props.cartPrice}</p>
            </div>
            <div id='checkout-button-wrapper'>
              <input
                className='shop-item__item-button'
                value='Checkout'
                type='button'
                onMouseEnter={(e) =>
                  (e.target.className = 'shop-item__item-button--color')
                }
              ></input>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
