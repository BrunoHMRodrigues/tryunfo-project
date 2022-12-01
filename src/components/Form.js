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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            data-testid="name-input"
            placeholder="Nome Carta"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="text-area">
          <textarea
            name="text-area"
            data-testid="description-input"
            placeholder="Descrição Carta"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attribute1">
          <input
            type="number"
            name="attribute1"
            data-testid="attr1-input"
            placeholder="Valor Atributo 1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attribute2">
          <input
            type="number"
            name="attribute2"
            data-testid="attr2-input"
            placeholder="Valor Atributo 2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attribute3">
          <input
            type="number"
            name="attribute3"
            data-testid="attr3-input"
            placeholder="Valor Atributo 3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          <input
            type="text"
            name="image"
            data-testid="image-input"
            placeholder="Url Image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarity">
          <select
            name="rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo" className="label-super-trunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            className="input-super-trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>

        <button
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
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.string,
  onSaveButtonClick: PropTypes.string,
};

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  // hasTrunfo: false,
  isSaveButtonDisabled: true,
  onInputChange,
  onSaveButtonClick,
};

export default Form;
