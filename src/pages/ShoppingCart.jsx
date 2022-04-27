import React from 'react';
import ProductInCart from '../components/ProductInCart';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: JSON.parse(localStorage.getItem('productCart')) || [],
    };
  }

  // componentDidMount() {
  //   const productsCart = JSON.parse(localStorage.getItem('productCart'));
  //   this.setState({ products: productsCart });
  // }

  render() {
    const { products } = this.state;
    const isEmpty = products.length === 0;
    return (
      <section>
        {isEmpty
        && (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)}
        { products.map((product) => (
          <ProductInCart key={ product.id } products={ products } />
        )) }
      </section>

    );
  }
}
