import React from 'react';
import './Field.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Result extends React.Component {
  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return (
      <div className='Field'>
        <div className='InsideField'>
          <div style={{padding: '8px'}}>
            <div>Билет 1</div>
            <div className='FieldStyle W3'>
              {this.props.message}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps)(Result);
