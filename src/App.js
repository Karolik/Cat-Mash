import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CatMash from './components/CatMash'
import Results from './components/Results'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/results' render={({ history }) => (
          <div>
            <Results
            />
          </div>
        )}/>
        <Route exact path='/' render={() => (
          <div className="cat-mash">
            <CatMash
              />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;



/*
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a>
*/
