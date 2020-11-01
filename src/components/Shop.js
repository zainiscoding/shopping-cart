import React from 'react';
import Images from './ImageContainer';

const Shop = (props) => {
  return (
    <div id='shop'>
      <h1 className='page-heading'>Shop</h1>
      <div id='shop__shop-items'>
        {Images.map((item) => {
          return (
            <div className='shop-items__shop-item'>
              <img
                src={item.image}
                alt={item.name}
                className='shop-item__image'
              ></img>
              <p className='shop-item__name'>{item.name}</p>
              <p className='shop-item__price'>${item.price}</p>
              <input
                type='number'
                className='shop-item__item-count'
                min='1'
                defaultValue='1'
                onChange={props.checkForNegative}
              ></input>
              <input
                type='button'
                className='shop-item__item-button'
                onMouseEnter={(e) =>
                  (e.target.className = 'shop-item__item-button--color')
                }
                onClick={props.addToCart}
                value='Add to cart'
              ></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
