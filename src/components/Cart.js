import React from 'react';

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
                <div className='cart-item'>
                  <p>
                    {item.name} x {item.count}
                  </p>{' '}
                  <p>Price: ${item.price}</p>
                  {item.count > 1 && <p>Total: ${item.totalPrice}</p>}
                  <input
                    type='button'
                    value='X'
                    id={index}
                    onClick={props.removeStateItem}
                  ></input>
                </div>
              );
            })}
            <div id='total-price-wrapper'>
              <p>Cart Total: ${props.cartPrice}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
