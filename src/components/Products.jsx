import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Products extends React.Component {
  render() {
    const { products } = this.props;
    const { results } = products;
    console.log(results, products);
    return (
      results.map((product) => (
        <Link
          to={ `/description/${product.id}` }
          key={ product.id }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <p>{ product.title }</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.price }</p>
          </div>
        </Link>
      ))
    );
  }
}

Products.propTypes = {
  products: PropTypes.shape().isRequired,
};
