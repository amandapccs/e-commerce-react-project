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
      email: '',
      message: '',
      rating: 0,
      cartProducts: [],
      reviewsList: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handlerSubmitButton = (productId) => {
    const { email, message, rating } = this.state;
    const userReview = {
      productId,
      email,
      message,
      rating,
    };
    this.setState((prevState) => {
      const newReviews = [...prevState.reviewsList, userReview];
      return {
        reviewsList: newReviews,
      };
    });
  }

  addToCart = (product) => {
    const { cartProducts } = this.state;

    this.setState((prevState) => ({ cartProducts: [...prevState.cartProducts, product] }),
      () => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      });
  }

  render() {
    const { cartProducts, reviewsList } = this.state;
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
              onInputChange={ this.onInputChange }
              handlerSubmitButton={ this.handlerSubmitButton }
              reviews={ reviewsList }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
