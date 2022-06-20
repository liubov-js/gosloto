import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';
import { connect } from 'react-redux';
import { 
  showResult, 
  createFirstField, 
  createSecondField, 
  randomSelectionNumbers,
} from '../store/actions';

class Field extends React.Component {
  static propTypes = {
    createFirstField: PropTypes.func,
    createSecondField: PropTypes.func,
    showResult: PropTypes.func,
    randomSelectionNumbers: PropTypes.func,
    firstField: PropTypes.array,
    secondField: PropTypes.array,
  };

  render() {
    return (
      <div className='Field'>
        <div className='InsideField'>
          <div style={{padding: '8px'}}>
            <div>
              <div >Билет 1</div>
              <img 
                onClick={this.props.randomSelectionNumbers} 
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
                  onClick={() => this.props.createFirstField(num)}
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
                  onClick={() => this.props.createSecondField(num)}
                >
                  {num}
                </button>;
              })}
            </div>
            <button className='Button'>
              <div 
                className='ButtonText' 
                onClick={this.props.showResult}
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

const mapStateToProps = state => {
  return {
      firstField: state.firstField,
      secondField: state.secondField,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFirstField: (num) => dispatch(createFirstField(num)),
    createSecondField: (num) => dispatch(createSecondField(num)),
    showResult: () => dispatch(showResult()),
    randomSelectionNumbers: () => dispatch(randomSelectionNumbers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
