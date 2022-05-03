import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Products.module.css';

export default class Products extends React.Component {
  updateButton = (product) => {
    const { cartProducts } = this.props;
    const productCart = cartProducts.find((products) => products.id === product.id);
    if (productCart) {
      if (productCart.quantity === product.available_quantity) {
        return true;
      }
      return false;
    }
    return false;
  }

  render() {
    const { products, handleClick } = this.props;
    const { results } = products;
    return (
      results.map((product) => (
        <div data-testid="product" key={ product.id } className={ styles.div }>
          <Link
            to={ `/description/${product.id}` }
            data-testid="product-detail-link"
            className={ styles.productlink }
          >
            <p>{ product.title }</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p data-testid="shopping-cart-product-name">{`R$: ${product.price}` }</p>
            {product.shipping.free_shipping
            && <p data-testid="free-shipping">Frete Grátis</p>}
          </Link>
          { product.available_quantity <= 0
            ? (<p>Produto Indisponível</p>)
            : (
              <div>
                <p>{`Estoque Disponível: ${product.available_quantity}`}</p>
                <button
                  disabled={ this.updateButton(product) }
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => handleClick(product) }
                >
                  Adicionar ao carrinho

                </button>
              </div>) }

        </div>
      ))
    );
  }
}

Products.propTypes = {
  products: PropTypes.shape().isRequired,
  handleClick: PropTypes.func.isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.any).isRequired,
};
