import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';

class CatMash extends Component {
  state = {
    cats: []
  }

  render() {
    return (
      <div>
        <header className="cat-mash-title">
          <h1>Cat Mash</h1>
        </header>
        <main className="cat-mash-content">
          <div className="cat-photos">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />

          </div>

        </main>
        <footer>
          <div className="open-results">
              <Link
                to='/results'
                >See Results</Link>
          </div>
        </footer>
      </div>
    )
  }
}

export default CatMash