import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';
import styles from './Home.module.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      searchInput: '',
      getCategory: '',
      products: null,
    };
  }

  async componentDidMount() {
    const list = await getCategories();
    this.setState({ categoriesList: list,
    });
    // console.log(this.list);
  }

  handleChange = ({ target }) => {
    this.setState({ searchInput: target.value });
  }

  handleClick = async () => {
    const { searchInput, getCategory } = this.state;
    const getPrdcts = await getProductsFromCategoryAndQuery(getCategory, searchInput);
    this.setState({ products: getPrdcts });
  }

  getCategoryItens = ({ target }) => {
    const { id } = target;
    this.setState(({ getCategory: id }), () => this.handleClick()); // chamará handleClick pois é nela onde a requisição à API é feita
  }

  render() {
    const { categoriesList, products } = this.state;
    const { addToCart } = this.props;
    return (
      <div className={ styles.maindiv }>
        <aside className={ styles.categories }>
          <h3>CATEGORIAS</h3>
          {categoriesList.map((category) => (
            <button
              key={ category.id }
              id={ category.id }
              data-testid="category"
              type="button"
              onClick={ this.getCategoryItens }
            >
              { category.name }
            </button>

          ))}
        </aside>
        <div className={ styles.searchAndProducts }>
          <section className={ styles.search }>
            <label htmlFor="pesquisar">
              <input
                id="pesquisar"
                data-testid="query-input"
                onChange={ this.handleChange }
              />
            </label>
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.handleClick }
            >
              Buscar

            </button>
            <Link to="shopping-cart" data-testid="shopping-cart-button"><img src="https://super.so/icon/dark/shopping-cart.svg" alt="cart" /></Link>
          </section>

          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>

          <section className={ styles.products }>
            { products !== null
        && <Products products={ products } handleClick={ addToCart } /> }
          </section>

        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
