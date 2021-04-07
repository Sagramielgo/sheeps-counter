import React from 'react';
import '../stylesSheet/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <h1>Las ovejas</h1>
          <h2>Número total de ovejas: 0</h2>
          <button className="form__btn" onClick={this.handleButton}>
            Añadir oveja
          </button>
        </div>
      </div>
    );
  }
}

export default App;
