import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import styles from './Checkout.module.css';

export default class Checkout extends React.Component {
  render() {
    const { cartProducts } = this.props;
    const totalPrice = cartProducts.reduce((acc, curr) => acc + curr.price, 0);
    return (
      <div>
        <Link to="/shopping-cart" className={ styles.cartLink }>
          <img src="https://super.so/icon/dark/shopping-cart.svg" alt="cart" />
          <span>CARRINHO</span>
        </Link>

        <section className={ styles.checkoutProducts }>
          <h2>Revise seus produtos</h2>

          { cartProducts.map((product, i) => (
            <div key={ product.id } className={ styles.div }>
              <img src={ product.thumbnail } alt={ product.title } />
              <div>
                <p>{ `${i + 1} - ${product.title}` }</p>
                <p>{ ` R$ ${product.price}` }</p>
              </div>
            </div>
          )) }

          <h3>
            { `Total: R$ ${totalPrice}` }
          </h3>
        </section>

        <CheckoutForm />
      </div>
    );
  }
}

Checkout.propTypes = {
  cartProducts: propTypes.arrayOf(propTypes.any).isRequired,
};
