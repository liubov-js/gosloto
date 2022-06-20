import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';
import { connect } from 'react-redux';
import { getMessage } from '../store/actions';

class Field extends React.Component {
  static propTypes = {
    getMessage: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      firstField: [],
      secondField: [],
      winningResult: {
        first: [],
        second: [],
      },
      isTicketWon: false,
    };

    this.createFirstField = this.createFirstField.bind(this);
    this.createSecondField = this.createSecondField.bind(this);
    this.showResult = this.showResult.bind(this);
    this.randomGenerationNumbers = this.randomGenerationNumbers.bind(this);
  }

  componentDidMount() {
    this.randomGenerationNumbers(this.state.winningResult.first, this.state.winningResult.second);
  }

  createFirstField(number) {
    const firstField = this.state.firstField;
    
    if (firstField.length < 8) {
      if (firstField.includes(number)) {
        firstField.splice(firstField.indexOf(number), 1);
      } else {
        firstField.push(number);
      }
    } else {
      if (firstField.includes(number)) {
        firstField.splice(firstField.indexOf(number), 1);
      }
    }
  }

  createSecondField(number) {
    const secondField = this.state.secondField;
    if (secondField.length < 1) {
      if (secondField.includes(number)) {
        secondField.pop(number);
      } else {
        secondField.push(number);
      }
    } else {
      if (secondField.includes(number)) {
        secondField.pop(number);
      }
    }
  }

  async showResult() {
    const { firstField, secondField, winningResult: { first, second }, isTicketWon } = this.state;

    if (firstField.length === 8 && secondField.length === 1) {
      if (
        firstField.filter(num => first.includes(num)).length >= 4 || 
        (firstField.filter(num => first.includes(num)).length >= 3 && secondField[0] === second[0])
      ) {
        this.setState({isTicketWon: true});
        this.props.getMessage('Ого, вы виграли! Поздравляем!');
      } else {
        this.setState({isTicketWon: false});
        this.props.getMessage('Увы, вы проиграли.');
      }

      let body = {
        selectedNumber: {
          firstField: firstField,
          secondField: secondField,
        },
        isTicketWon: isTicketWon,
      };
      
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      // let response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
      });
              
      if (response.status >= 400) {
        alert('Ошибка при отправке данных.');
      } 
    }
  }

  randomGenerationNumbers(firstArray, secondArray) {
    if (this.state.firstField.length !== 0 && this.state.secondField.length !== 0) {
      this.setState({firstField: [], secondField: []});
    }
    for (let i = 1; i <= 19; i++) {
      const num = Math.floor(Math.random() * 19) + 1;
      if (!firstArray.includes(num) && firstArray.length < 8) {
        firstArray.push(num);
      }
    }
    for (let i = 1; i <= 2; i++) {
      const num = Math.floor(Math.random() * 2) + 1;
      if (secondArray.length < 1) {
        secondArray.push(num);
      }
    }
    return this.state;
  }

  render() {
    const { firstField, secondField } = this.state;

    return (
      <div className='Field'>
        <div className='InsideField'>
          <div style={{padding: '8px'}}>
            <div>
              <div >Билет 1</div>
              <img 
                onClick={() => this.randomGenerationNumbers(firstField, secondField)} 
                className='MagicWand' 
                src='magic-wand.png' 
              />
            </div>
            <div className='FieldStyle'>
              Поле 1 <span className='W3'>Отметьте 8 чисел</span>
            </div>
            <div>
              {Array.from({length: 19}, (_, i) => i + 1).map(num => {
                return <button 
                  className='ButtonNumber' 
                  key={num} 
                  onClick={() => this.createFirstField(num)}
                >
                  {num}
                </button>;
              })}
            </div>
            <div>
              <div className='FieldStyle'>
                Поле 2 <span className='W3'>Отметьте 1 число</span>
              </div>
              {Array.from({length: 2}, (_, i) => i + 1).map(num => {
                return <button 
                  className='ButtonNumber' 
                  key={num} 
                  onClick={() => this.createSecondField(num)}
                >
                  {num}
                </button>;
              })}
            </div>
            <button className='Button'>
              <div 
                className='ButtonText' 
                onClick={this.showResult}
              >
                Показать результат
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessage: (message) => dispatch(getMessage(message)),
  };
};

export default connect(() => ({}), mapDispatchToProps)(Field);
