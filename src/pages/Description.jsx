import React from 'react';
import propTypes from 'prop-types';
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
    this.setState({ product: description });
  }

  render() {
    const { product } = this.state;
    const { thumbnail, title, price, attributes } = product;
    console.log(product);
    return (
      <main>
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
        </div>
      </main>
    );
  }
}

Description.propTypes = {
  match: propTypes.objectOf(propTypes.any).isRequired,
};

export default Description;
