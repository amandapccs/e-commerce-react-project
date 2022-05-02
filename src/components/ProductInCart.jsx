import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductInCart.module.css';

export default class ProductInCart extends React.Component {
  updateQuantity = ({ target }) => {
    const { products } = this.props;
    const { name } = target;
    if (name === 'increase') {
      products.quantity += 1;
    }
    if (name === 'decrease' && products.quantity > 1) {
      products.quantity -= 1;
    }
    this.forceUpdate();
  }

  render() {
    const { products } = this.props;
    return (
      <div key={ products.id } className={ styles.div }>
        <p data-testid="shopping-cart-product-name">{ products.title }</p>
        <img src={ products.thumbnail } alt={ products.title } />
        <p>{ products.price }</p>
        <p data-testid="shopping-cart-product-quantity">
          {' '}
          { products.quantity }
          {' '}
        </p>
        <div className={ styles.buttons }>
          <button
            type="button"
            name="increase"
            data-testid="product-increase-quantity"
            onClick={ this.updateQuantity }
          >
            +
          </button>
          <button
            type="button"
            name="decrease"
            data-testid="product-decrease-quantity"
            onClick={ this.updateQuantity }
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

ProductInCart.propTypes = {
  products: PropTypes.objectOf(PropTypes.any).isRequired,
};
