import React from 'react';
import gif from '../images/ovejita.gif';
import '../stylesSheet/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheeps: 0,
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    console.log('Me han clickado');
    /*    this.setState({
      sheeps: this.state.sheeps + 1
    }); */
    this.setState((prevState) => {
      return {
        sheeps: prevState.sheeps + 1,
      };
    });
  }

  render() {
    console.log(this.state);
    //pinto el listado
    const result = [];
    for (let index = 0; index < this.state.sheeps; index++) {
      result.push(
        <li key={index}>
          <img className="sheepGif" src={gif} alt="Ovejita" />
        </li>
      );
    }

    return (
      <div className="App-container">
        <h1>Sheeps counter</h1>
        <h2>Number of sheeps: {this.state.sheeps}</h2>
        <button className="form__btn" onClick={this.handleButton}>
          One more sheep
        </button>
        <ul className="App-farm">{result}</ul>
      </div>
    );
  }
}

export default App;
