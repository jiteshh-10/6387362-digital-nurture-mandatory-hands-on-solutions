import React from 'react';

class Cart extends React.Component {
  render() {
    const { itemname, price } = this.props;

    return (
      <div className="card m-2 shadow-sm" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{itemname}</h5>
          <p className="card-text text-muted">Price: ₹{price}</p>
        </div>
      </div>
    );
  }
}

export default Cart;
