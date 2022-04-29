import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Reviews.css';

class Reviews extends Component {
  render() {
    const { email,
      id,
      message,
      rating,
      reviewsList,
      onInputChange,
      handlerSubmitButton,
    } = this.props;
    return (
      <section className="section-form-container">
        <h3 className="form-title">Avaliações</h3>
        <form className="rating-form">
          <section className="rate">
            <input
              name="email"
              type="text"
              placeholder="email"
              data-testid="product-detail-email"
              value={ email }
              onChange={ onInputChange }
            />
            <span
              role="img"
              aria-label="star"
              data-testid={ `${index}-rating` }
            >
              ⭐⭐⭐⭐⭐
              {rating}
            </span>
          </section>
          <section className="txta-button">
            <textarea
              name="message"
              className="txtarea-opinion"
              placeholder="Mensagem(opcinal)"
              data-testid="product-detail-evaluation"
              value={ message }
              onChange={ onInputChange }
            />
            <button
              type="submit"
              onClick={ () => handlerSubmitButton(id) }
            >
              Avaliar
            </button>
          </section>
        </form>
        <section>
          {reviewsList.map((review) => (
            <section>
              
      email,
      message,
      rating,
            </section>
          ))}
        </section>
      </section>

    );
  }
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewsList: PropTypes.arrayOf(Object).isRequired,
  handlerSubmitButton: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Reviews;
