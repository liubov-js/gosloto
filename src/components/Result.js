import React from 'react';
import './Field.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Result extends React.Component {
  static propTypes = {
    isTicketWon: PropTypes.bool,
  };

  render() {
    return (
      <div className='Field'>
        <div className='InsideField'>
          <div style={{padding: '8px'}}>
            <div>Билет 1</div>
            <div className='FieldStyle W3'>
              {this.props.isTicketWon ? 'Ого, вы выиграли! Поздравляем!' : 'Увы, вы проиграли.'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isTicketWon: state.isTicketWon,
  };
};

export default connect(mapStateToProps)(Result);
