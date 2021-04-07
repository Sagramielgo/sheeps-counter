import React from 'react';

import '../stylesSheet/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheeps: 0,
      sheepsInArray: [],
    };
    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    console.log('Me han clickado');
  }
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
