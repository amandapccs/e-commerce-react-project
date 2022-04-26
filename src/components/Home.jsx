import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';

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
    console.log(this.list);
  }

  handleChange = ({ target }) => {
    this.setState({ searchInput: target.value });
  }

  handleClick = async () => {
    const { searchInput, getCategory } = this.state;
    const getPrdcts = await getProductsFromCategoryAndQuery(getCategory, searchInput);
    console.log(getPrdcts);
    this.setState({ products: getPrdcts });
  }

  render() {
    const { categoriesList, products } = this.state;
    return (
      <div>
        <aside>
          <h3>Categorias:</h3>
          {categoriesList.map((category) => (
            <label htmlFor={ category.name } key={ category.id } data-testid="category">
              <input
                id={ category.name }
                type="radio"
                name="category"
                value={ category.name }
              />
              {category.name}
            </label>

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
