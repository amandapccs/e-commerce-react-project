import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Products extends React.Component {
  render() {
    const { products, handleClick } = this.props;
    const { results } = products;
    // console.log(results, products);
    return (
      results.map((product) => (
        <div data-testid="product" key={ product.id }>
          <Link
            to={ `/description/${product.id}` }
            data-testid="product-detail-link"
          >
            <p>{ product.title }</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p data-testid="shopping-cart-product-name">{ product.price }</p>
          </Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => handleClick(product) }
          >
            Adicionar ao carrinho

          </button>
        </div>
      ))
    );
  }
}

Products.propTypes = {
  products: PropTypes.shape().isRequired,
  handleClick: PropTypes.func.isRequired,
};