import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

// iniciando
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      // onInputChange: this.onInputChange,
      // onSaveButtonClick: this.onSaveButtonClick,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        // hasTrunfo,
        // isSaveButtonDisabled,
      } = this.state;
      const totalMax = 210;
      const attributeMax = 90;
      const validationName = cardName !== '';
      const validationDescription = cardDescription !== '';
      const validationImage = cardImage !== '';
      const validationRare = cardRare !== '';
      const power = parseInt(cardAttr1, 10);
      const speed = parseInt(cardAttr2, 10);
      const defense = parseInt(cardAttr3, 10);
      const validationPower = (power <= attributeMax && power >= 0 && power !== '');
      const validationSpeed = (speed <= attributeMax && speed >= 0 && speed !== '');
      const validationDefense = (defense <= attributeMax
        && defense >= 0 && defense !== '');
      const validationTotalMax = (power + speed + defense) <= totalMax;
      if (validationName && validationDescription && validationImage && validationRare
        && validationPower && validationSpeed && validationDefense
        && validationTotalMax) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      // cardTrunfo: false,
      // hasTrunfo: false,
    };
    this.setState((previewSaved) => ({
      savedCards: [...previewSaved.savedCards, card],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        // cardTrunfo: false,
        // hasTrunfo: false,
      });
    });
  }

  render() {
    return (
      <div className="container-main">
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

// App.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   cardRare: PropTypes.string.isRequired,
//   // cardTrunfo: PropTypes.bool.isRequired,
//   // hasTrunfo: PropTypes.bool.isRequired,
//   // isSaveButtonDisabled: PropTypes.bool.isRequired,
// };

export default App;
