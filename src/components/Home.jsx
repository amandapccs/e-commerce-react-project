import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="pesquisar" data-testid="home-initial-message">
          <input id="pesquisar" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Link to="shopping-cart" data-testid="shopping-cart-button">Ir ao Carrinho</Link>
      </div>
    );
  }
}

export default Home;
