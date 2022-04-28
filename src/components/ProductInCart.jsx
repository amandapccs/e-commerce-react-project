import React from 'react';
import PropTypes from 'prop-types';

export default class ProductInCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  addQuantity = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  }

  subtractQuantity = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
  }

  render() {
    const { products } = this.props;
    const { quantity } = this.state;
    return (
      products.map((product) => (
        <div key={ product.id }>
          <p data-testid="shopping-cart-product-name">{ product.title }</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{ product.price }</p>

          <p data-testid="shopping-cart-product-quantity">
            {' '}
            { quantity }
            {' '}
          </p>

          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.addQuantity }
          >
            +

          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.subtractQuantity }
          >
            -

          </button>
        </div>
      ))
    );
  }
}

ProductInCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
};
