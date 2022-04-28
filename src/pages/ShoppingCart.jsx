import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductInCart from '../components/ProductInCart';

export default class ShoppingCart extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: JSON.parse(localStorage.getItem('productCart')) || [],
  //   };
  // }

  // componentDidMount() {
  //   const productsCart = JSON.parse(localStorage.getItem('productCart'));
  //   this.setState({ products: productsCart });
  // }

  render() {
    // const { products } = this.state;
    const { cartProducts } = this.props;
    const isEmpty = cartProducts.length === 0;
    return (
      <section>
        <Link to="/">Home</Link>
        {isEmpty
        && (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)}
        { cartProducts.map((product) => (
          <ProductInCart key={ product.id } products={ cartProducts } />
        )) }
      </section>

    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: propTypes.arrayOf(propTypes.any).isRequired,
};
