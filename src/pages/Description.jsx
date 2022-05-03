import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Reviews from '../components/Reviews';
import { getProductsId } from '../services/api';

class Description extends React.Component {
  constructor() {
    super();
    this.state = {
      product: null,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const description = await getProductsId(match.params.id);
    this.setState({ product: description });
  }

  render() {
    const { product } = this.state;
    const { handleClick,
      totalCart,
      onInputChange,
      handlerSubmitButton,
      handlerRate,
      reviewsList,
      email,
      message,
      match: {
        params: {
          id },
      },
    } = this.props;
    if (!product) {
      return (<p data-testid="shopping-cart-size">{ totalCart() }</p>);
    }
    // console.log('--------', product);
    const { thumbnail, title, price, attributes,
      shipping: { free_shipping: freeShipping } } = product;
    // console.log(freeShipping);
    return (
      <main>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Ir ao Carrinho</Link>
        <p data-testid="shopping-cart-size">{ totalCart() }</p>
        <div data-testid="product-detail-name">
          <h2>{ `${title} - R$${price}` }</h2>
          {freeShipping
            && <p data-testid="free-shipping">Frete Grátis</p>}
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
        <section className="opinion">
          <Reviews
            email={ email }
            message={ message }
            productId={ id }
            reviewsList={ reviewsList }
            onInputChange={ onInputChange }
            handlerSubmitButton={ handlerSubmitButton }
            handlerRate={ handlerRate }
          />
        </section>
      </main>
    );
  }
}

Description.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  reviewsList: PropTypes.arrayOf(Object).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  handleClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  handlerSubmitButton: PropTypes.func.isRequired,
  handlerRate: PropTypes.func.isRequired,
  totalCart: PropTypes.func.isRequired,
};

export default Description;
