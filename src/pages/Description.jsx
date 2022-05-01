import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsId } from '../services/api';

class Description extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const description = await getProductsId(match.params.id);
    console.log(description);
    this.setState({ product: description });
  }

  render() {
    const { product } = this.state;
    const { thumbnail, title, price, attributes } = product;
    const { handleClick } = this.props;
    return (
      <main>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Ir ao Carrinho</Link>
        <div data-testid="product-detail-name">
          <h2>{ `${title} - R$${price}` }</h2>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            { product.length !== 0 && attributes.map((description) => (
              <li key={ description.id }>
                {description.name}
                :
                { description.value_name }
              </li>
            )) }
          </ul>
          { product.length !== 0
          && (
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => handleClick(product) }
            >
              Adicionar ao carrinho

            </button>)}
        </div>
      </main>
    );
  }
}

Description.propTypes = {
  match: propTypes.objectOf(propTypes.any).isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Description;
