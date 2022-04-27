import React from 'react';
import PropTypes from 'prop-types';

export default class ProductInCart extends React.Component {
  render() {
    const { products } = this.props;
    // console.log(products);
    return (
      products.map((product) => (
        <div key={ product.id }>
          <p data-testid="shopping-cart-product-name">{ product.title }</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{ product.price }</p>
          <div data-testid="shopping-cart-product-quantity">
            {' '}
            { product.quantity }
            {' '}
          </div>
        </div>
      ))
    );
  }
}

ProductInCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
};
