import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Reviews.css';

class Reviews extends Component {
  render() {
    const rate = ['1', '2', '3', '4', '5'];
    const { email,
      productId,
      message,
      reviewsList,
      onInputChange,
      handlerSubmitButton,
      handlerRate,
    } = this.props;
    const newReviewsList = reviewsList.filter((r) => r.productId === productId);
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
            <div>
              {rate.map((grade, index) => (
                <button
                  type="button"
                  className="btn-rate"
                  onClick={ () => handlerRate(grade) }
                  data-testid={ `${grade}-rating` }
                  key={ index }
                >
                  <span
                    role="img"
                    aria-label="star"
                  >
                    ⭐

                  </span>
                </button>
              ))}
            </div>
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
              type="button"
              data-testid="submit-review-btn"
              onClick={ () => handlerSubmitButton(productId) }
            >
              Avaliar
            </button>
          </section>
        </form>
        <section>
          {newReviewsList.map((review) => (
            <section key={ review.email }>
              <section className="reviews-header">
                <p>
                  { review.email }
                </p>
                <span>
                  { review.rating }
                </span>
              </section>
              <section className="review-message">
                <p>
                  { review.message }
                </p>
              </section>
              <hr />
            </section>
          ))}
        </section>
      </section>

    );
  }
}

Reviews.propTypes = {
  productId: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  reviewsList: PropTypes.arrayOf(Object).isRequired,
  handlerRate: PropTypes.func.isRequired,
  handlerSubmitButton: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Reviews;
