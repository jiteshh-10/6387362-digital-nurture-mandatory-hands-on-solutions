import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { itemname: 'Laptop', price: 55000 },
        { itemname: 'Headphones', price: 2500 },
        { itemname: 'Keyboard', price: 1500 },
        { itemname: 'Smartwatch', price: 7000 },
        { itemname: 'Mouse', price: 800 },
      ],
    };
  }

  render() {
    return (
      <div className="container mt-4 text-center">
        <h2 className="mb-4">🛒 Welcome to Online Shopping</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.cartItems.map((item, index) => (
            <Cart key={index} itemname={item.itemname} price={item.price} />
          ))}
        </div>
      </div>
    );
  }
}

export default OnlineShopping;
