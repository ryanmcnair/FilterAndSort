import React from 'react';
import './App.scss';
import Jumbotron from '../components/header';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Jumbotron />
      </div>
    );
  }
}

export default App;
