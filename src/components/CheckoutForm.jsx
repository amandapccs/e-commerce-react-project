import React from 'react';
import styles from './CheckoutForm.module.css';

export default class CheckoutForm extends React.Component {
  render() {
    return (
      <section>
        <form className={ styles.customerInfo }>
          <h2>Informações do comprador</h2>

          <div>
            <input
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome"
              className={ styles.info }
            />
            <input
              type="text"
              data-testid="checkout-email"
              placeholder="Email"
              className={ styles.info }
            />
            <input
              type="text"
              data-testid="checkout-cpf"
              placeholder="CPF"
              className={ styles.info }
            />
            <input
              type="text"
              data-testid="checkout-phone"
              placeholder="Telefone"
              className={ styles.info }
            />
            <input
              type="text"
              data-testid="checkout-cep"
              placeholder="CEP"
              className={ styles.info }
            />
            <input
              type="text"
              data-testid="checkout-address"
              placeholder="Endereço"
              className={ styles.address }
            />
          </div>
        </form>

        <div className={ styles.payment }>
          <h2>Forma de pagamento</h2>

          <div className={ styles.payTypes }>
            <label htmlFor="barcode">
              <input type="radio" id="barcode" name="payment" />
              Boleto
            </label>
            <label htmlFor="visa">
              <input type="radio" id="visa" name="payment" />
              Visa
              <img src="https://super.so/icon/dark/credit-card.svg" alt="debit" />
            </label>
            <label htmlFor="master">
              <input type="radio" id="master" name="payment" />
              Mastercard
              <img src="https://super.so/icon/dark/credit-card.svg" alt="debit" />
            </label>
            <label htmlFor="elo">
              <input type="radio" id="elo" name="payment" />
              Elo
              <img src="https://super.so/icon/dark/credit-card.svg" alt="debit" />
            </label>
          </div>
        </div>

        <button type="button" className={ styles.payBtn }>Comprar</button>

      </section>
    );
  }
}
