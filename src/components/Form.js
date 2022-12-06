import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h2>Adicione Carta</h2>
        <label htmlFor="cardName">
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            placeholder="Nome Carta"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          <textarea
            name="cardDescription"
            data-testid="description-input"
            placeholder="Descrição Carta"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1">
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            placeholder="Valor Atributo 1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            placeholder="Valor Atributo 2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            placeholder="Valor Atributo 3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            placeholder="Url Image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare">
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        {
          !hasTrunfo ? (
            <label htmlFor="cardTrunfo" className="label-super-trunfo">
              <input
                name="cardTrunfo"
                type="checkbox"
                data-testid="trunfo-input"
                className="input-super-trunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trunfo
            </label>
          ) : (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          )
        }

        <button
          name="save-button"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

// Form.defaultProps = {
//   cardName: '',
//   cardDescription: '',
//   cardAttr1: 0,
//   cardAttr2: 0,
//   cardAttr3: 0,
//   cardImage: '',
//   cardRare: '',
//   cardTrunfo: false,
//   hasTrunfo: false,
//   isSaveButtonDisabled: true,
//   onInputChange: '',
//   onSaveButtonClick: '',
// };

export default Form;
