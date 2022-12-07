import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <div className="container-card-make">
        <label htmlFor="name-card">
          Pokemon Name
          <p data-testid="name-card">
            { cardName }
          </p>
        </label>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        <hr className="division" />

        <label htmlFor="description-card">
          Description
          <p data-testid="description-card">
            { cardDescription }
          </p>
        </label>

        <hr />

        <label htmlFor="attr1-card" className="label-attribute power">
          Power - - - - - - - - - - - - - - - - - - - - - - -
          <p data-testid="attr1-card" className="attribute power">{ cardAttr1 }</p>
        </label>
        <label htmlFor="attr2-card" className="label-attribute speed">
          Speed   - - - - - - - - - - - - - - - - - - - - - - -
          <p data-testid="attr2-card" className="attribute speed">{ cardAttr2 }</p>
        </label>
        <label htmlFor="attr3-card" className="label-attribute defense">
          Defense - - - - - - - - - - - - - - - - - - - - - -
          <p data-testid="attr3-card" className="attribute defense">{ cardAttr3 }</p>

        </label>

        <hr />

        <label htmlFor="rare-card">
          Rarity
          <p data-testid="rare-card">{ cardRare }</p>
        </label>

        {/* <p data-testid="trunfo-card">{ (cardTrunfo) && 'Super Trunfo' }</p> */}
        { (cardTrunfo) && <p data-testid="trunfo-card">Super Trunfo</p> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
};

export default Card;
