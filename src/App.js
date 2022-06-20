import React from 'react';
import './App.css';
import Field from './components/Field';
import Result from './components/Result';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <Field />
        <Result />
      </div>
    );
  }
}

export default App;
