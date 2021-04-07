import React from 'react';
import '../stylesSheet/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App-container">
        <h1>Sheeps counter</h1>
        <h2>Number of sheeps: 0</h2>
        <button className="form__btn" onClick={this.handleButton}>
          One more sheep
        </button>
      </div>
    );
  }
}

export default App;
