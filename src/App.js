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
    let prevState = [...cartProducts];

    const existeProduct = prevState.find((prod) => prod.id === product.id);
    if (existeProduct) {
      prevState = prevState.map((prod) => {
        if (prod.id === product.id) {
          prod.quantity += 1;
        }
        return prod;
      });
    } else {
      prevState = [...prevState, { ...product, quantity: 1 }];
    }
    this.setState({ cartProducts: prevState });
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
