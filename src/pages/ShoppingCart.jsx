import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductInCart from '../components/ProductInCart';
import styles from './ShoppingCart.module.css';

export default class ShoppingCart extends React.Component {
  render() {
    const { cartProducts } = this.props;
    const isEmpty = cartProducts.length === 0;
    return (
      <section>
        <nav>
          <Link to="/" className={ styles.links }>
            <img src="https://super.so/icon/dark/corner-up-left.svg" alt="home" />
            <span>HOME</span>
          </Link>
          <Link to="/checkout" data-testid="checkout-products" className={ styles.links }>
            <img src="https://super.so/icon/dark/dollar-sign.svg" alt="checkout" />
            <span>PAGAMENTO</span>
          </Link>
        </nav>

        {isEmpty
        && (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)}
        { cartProducts.map((product, index) => (
          <ProductInCart
            key={ index }
            products={ product }
          />
        )) }
      </section>

    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: propTypes.arrayOf(propTypes.any).isRequired,
};
