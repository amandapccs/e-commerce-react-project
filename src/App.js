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

  componentDidMount() {
    const returnedReviwes = JSON.parse(localStorage.getItem('reviews'));
    this.setState({ reviewsList: returnedReviwes || [] });
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
      localStorage.setItem('reviews', JSON.stringify(newReviews));
      return {
        reviewsList: newReviews,
        email: '',
        message: '',
        rating: 0,
      };
    });
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

  handlerRate = (grade) => {
    this.setState({ rating: grade });
  }

  render() {
    const { cartProducts, email, message, reviewsList } = this.state;
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
              email={ email }
              message={ message }
              handleClick={ this.addToCart }
              onInputChange={ this.onInputChange }
              handlerSubmitButton={ this.handlerSubmitButton }
              handlerRate={ this.handlerRate }
              reviewsList={ reviewsList }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
