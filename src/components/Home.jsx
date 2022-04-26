import React from 'react';
import { getCategories } from '../services/api';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };
  }

  async componentDidMount() {
    const list = await getCategories();
    this.setState({ categoriesList: list,
    });
    console.log(this.list);
  }

  render() {
    const { categoriesList } = this.state;
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
