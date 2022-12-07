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
      filteredSavedCards: [],
      filterName: '',
      filterRarity: 'todas',
      filterTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.filterCards = this.filterCards.bind(this);
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
    } = this.state;

    if (cardTrunfo === true) {
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
    };
    this.setState((previewSaved) => ({
      savedCards: [...previewSaved.savedCards, card],
      filteredSavedCards: [...previewSaved.savedCards, card],
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
      });
    });
  }

  handleChange = ({ target, target: { name, value, checked } }) => {
    if (name === 'filterTrunfo') {
      const nameElement = target.parentElement
        .previousElementSibling.previousElementSibling;
      const rarityElement = target.parentElement.previousElementSibling;
      if (checked === true) {
        nameElement.disabled = true;
        rarityElement.disabled = true;
      } else {
        nameElement.disabled = false;
        rarityElement.disabled = false;
      }
      this.setState({ [name]: checked }, () => this.filterCards());
    } else {
      this.setState({ [name]: value }, () => this.filterCards());
    }
  };

  filterCards() {
    const { filterName, filterRarity, filterTrunfo, savedCards } = this.state;
    const nameSearch = filterName.toUpperCase();
    const filteringName = savedCards
      .filter((element) => (element.cardName
        .toUpperCase().includes(nameSearch)));
    const filteringRarity = (filterRarity === 'todas') ? filteringName : (
      filteringName.filter((element) => (element.cardRare === filterRarity))
    );
    const filteringTrunfo = (filterTrunfo === false) ? filteringRarity : (
      filteringRarity.filter((element) => (element.cardTrunfo === true))
    );
    this.setState({ filteredSavedCards: filteringTrunfo });
  }

  render() {
    const { savedCards, filteredSavedCards } = this.state;
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
          <h2>Todas as Cartas</h2>
          <div className="container-filter">
            <input
              name="filterName"
              data-testid="name-filter"
              placeholder="Digite o nome da carta"
              className="input-card-search"
              onChange={ (event) => this.handleChange(event) }
            />
            <select
              name="filterRarity"
              data-testid="rare-filter"
              className="select-rarity"
              onChange={ (event) => this.handleChange(event) }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>

            <label htmlFor="filterTrunfo" className="label-filter-super-trunfo">
              <input
                name="filterTrunfo"
                type="checkbox"
                data-testid="trunfo-filter"
                className="filter-super-trunfo"
                onChange={ (event) => this.handleChange(event) }
              />
              Super Trunfo
            </label>
          </div>
          <div className="all-cards">
            <ul className="ul-all-cards">
              {
                filteredSavedCards.map((element, index) => (
                  <li key={ index } className="cardSaved" id={ index }>
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
                        this.setState({ savedCards, filteredSavedCards: savedCards });
                      } }
                    >
                      Excluir
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
