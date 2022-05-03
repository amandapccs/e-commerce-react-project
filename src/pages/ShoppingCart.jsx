import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductInCart from '../components/ProductInCart';

export default class ShoppingCart extends React.Component {
  render() {
    const { cartProducts, saveStorage } = this.props;
    const isEmpty = cartProducts.length === 0;
    return (
      <section>
        <Link to="/"><img src="https://super.so/icon/dark/corner-up-left.svg" alt="home" /></Link>
        {isEmpty
        && (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)}
        { cartProducts.map((product, index) => (
          <ProductInCart
            key={ index }
            products={ product }
            cartProducts={ cartProducts }
            saveStorage={ saveStorage }
          />
        )) }
      </section>

    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: propTypes.arrayOf(propTypes.any).isRequired,
  saveStorage: propTypes.func.isRequired,
};
