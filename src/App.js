import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Description from './pages/Description';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
    };
  }

  addToCart = (product) => {
    const { cartProducts } = this.state;

    this.setState((prevState) => ({ cartProducts: [...prevState.cartProducts, product] }),
      () => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      });
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
          <Route
            path="/shopping-cart"
            render={ () => <ShoppingCart cartProducts={ cartProducts } /> }
          />
          <Route
            exact
            path="/description/:id"
            render={ (props) => (<Description
              { ...props }
              handleClick={ this.addToCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
