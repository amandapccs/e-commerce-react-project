import React from 'react';
import PropTypes from 'prop-types';

export default class Products extends React.Component {
  render() {
    const { products } = this.props;
    const { results } = products;
    return (
      <div>
        { results.map((product) => (
          <div key={ product.title } data-testid="product">
            <p>{ product.title }</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.price }</p>
          </div>
        )) }
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.shape().isRequired,
};
