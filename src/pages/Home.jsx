import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';

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
    return (
      <div>
        <aside>
          <h3>Categorias:</h3>
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
        <Link to="shopping-cart" data-testid="shopping-cart-button">Ir ao Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        { products !== null && <Products products={ products } /> }
      </div>
    );
  }
}

export default Home;
