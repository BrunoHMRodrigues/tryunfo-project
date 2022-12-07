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
    // this.removeCard = this.removeCard.bind(this);
  }

  onInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { checked } = target;
    const { name } = target;
    if (value === 'on') {
      this.setState({
        [name]: checked,
      });
    } else {
      this.setState({
        [name]: checked || value,
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
      cardTrunfo,
      savedCards,
      // hasTrunfo,
    } = this.state;

    // let {
    //   hasTrunfo,
    // } = this.state;

    if (cardTrunfo === true) {
      // hasTrunfo = true;
      this.setState({ hasTrunfo: true });
      this.state.hasTrunfo = true;
    }
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
      // hasTrunfo,
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
        cardTrunfo: false,
        // hasTrunfo: false,
      });
    });
  }

  // removeCard(event) {
  //   event.target.remove();
  // }

  render() {
    const { savedCards } = this.state;
    return (
      <div className="container-main">
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        <section className="container-all-cards">
          <div className="all-cards">
            <h2>Todas as Cartas</h2>
            <input
              data-testid="name-filter"
              placeholder="Digite o nome da carta"
              className="input-card-search"
              onChange={ (event) => {
                const arrayCards = event.target.nextElementSibling.childNodes;
                const nameSearch = event.target.value.toUpperCase();
                arrayCards.forEach((card) => {
                  const name = card.firstChild.children[1]
                    .firstElementChild.innerText.toUpperCase();
                  if (name.includes(nameSearch)) {
                    card.style.display = 'flex';
                  } else {
                    card.style.display = 'none';
                  }
                });
              } }
            />
            <ul className="ul-all-cards">
              {
                savedCards.map((element, index) => (
                  <div key={ index } className="cardSaved" id={ index }>
                    <Card key={ Math.random() } { ...element } />
                    <button
                      type="button"
                      data-testid="delete-button"
                      className="button-erase"
                      onClick={ (event) => {
                        const { id } = event.target.parentNode;
                        const { testid } = event.target.previousElementSibling
                          .lastElementChild.dataset;
                        if (testid === 'trunfo-card') {
                          this.setState({ hasTrunfo: false });
                        }
                        const cardsRemoved = savedCards.splice(id, 1);
                        console.log(cardsRemoved); // Verificar maneira que não seja necessário esse console log devido ao linter
                        this.setState({ savedCards });
                      } }
                    >
                      Excluir
                    </button>
                  </div>
                ))
              }
            </ul>
            {/* <Card { ...this.state.savedCards[0] } /> */}
          </div>
        </section>
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
