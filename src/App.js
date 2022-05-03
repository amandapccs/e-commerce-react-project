import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Description from './pages/Description';
import Checkout from './pages/Checkout';

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

  componentDidMount() {
    const returnedReviwes = this.getStorage('reviews');
    const returnedCartProducts = this.getStorage('cartProducts');
    if (returnedCartProducts !== null) {
      this.setState({
        reviewsList: returnedReviwes || [],
        cartProducts: returnedCartProducts,
      });
    }
    this.setState({
      reviewsList: returnedReviwes || [],
    });
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
      this.saveStorage('reviews', newReviews);
      return {
        reviewsList: newReviews,
        email: '',
        message: '',
        rating: 0,
      };
    });
  }

  getStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
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
    this.setState({ cartProducts: prevState },
      this.saveStorage('cartProducts', prevState));
  }

  handlerRate = (grade) => {
    this.setState({ rating: grade });
  }

  totalCart = () => {
    const { cartProducts } = this.state;
    if (!cartProducts) {
      return 0;
    }
    const totalCart = cartProducts.reduce((prev, curr) => prev + curr.quantity, 0);
    return totalCart;
  }

  saveStorage(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
  }

  render() {
    const { cartProducts, email, message, reviewsList } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              addToCart={ this.addToCart }
              totalCart={ this.totalCart }
            />) }
          />
          <Route
            path="/shopping-cart"
            render={ () => (<ShoppingCart
              cartProducts={ cartProducts }
              saveStorage={ this.saveStorage }
              getStorage={ this.getStorage }
            />) }
          />
          <Route
            exact
            path="/description/:id"
            render={ (props) => (<Description
              { ...props }
              email={ email }
              message={ message }
              handleClick={ this.addToCart }
              onInputChange={ this.onInputChange }
              handlerSubmitButton={ this.handlerSubmitButton }
              handlerRate={ this.handlerRate }
              reviewsList={ reviewsList }
              totalCart={ this.totalCart }
            />) }
          />
          <Route
            path="/checkout"
            render={ () => <Checkout cartProducts={ cartProducts } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
