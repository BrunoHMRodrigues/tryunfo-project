import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            data-testid="name-input"
            placeholder="Nome Carta"
          />
        </label>

        <label htmlFor="text-area">
          <textarea
            name="text-area"
            data-testid="description-input"
            placeholder="Descrição Carta"
          />
        </label>

        <label htmlFor="attribute1">
          <input
            type="number"
            name="attribute1"
            data-testid="attr1-input"
            placeholder="Valor Atributo 1"
          />
        </label>

        <label htmlFor="attribute2">
          <input
            type="number"
            name="attribute2"
            data-testid="attr2-input"
            placeholder="Valor Atributo 2"
          />
        </label>

        <label htmlFor="attribute3">
          <input
            type="number"
            name="attribute3"
            data-testid="attr3-input"
            placeholder="Valor Atributo 3"
          />
        </label>

        <label htmlFor="image">
          <input
            type="text"
            name="image"
            data-testid="image-input"
            placeholder="Url Image"
          />
        </label>

        <label htmlFor="rarity">
          <select name="rarity" data-testid="rare-input">
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
          />
          Super Trunfo
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
