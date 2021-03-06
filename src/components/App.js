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
    this.handleResetButton = this.handleResetButton.bind(this);
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

  handleResetButton() {
    console.log('han clickado Reset');
    this.setState((prevState) => {
      return {
        sheeps: 0,
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
        <h1 className="title">Counting sheep</h1>
        <h2 className="sheepNumber">Number of sheeps: {this.state.sheeps}</h2>
        <div>
          <button className="form__btn" onClick={this.handleButton}>
            One more sheep
          </button>
          <button
            className="form__btn resetBtn"
            onClick={this.handleResetButton}
          >
            Reset
          </button>
        </div>
        <ul className="App-farm">{result}</ul>
        <footer className="footer">
          <a
            className="copy"
            href="https://github.com/Sagramielgo"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="">
              By #gitFuntastic&nbsp;
              <span>
                <i className="fas fa-paw "></i>
              </span>
              &nbsp;2021
            </h4>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
