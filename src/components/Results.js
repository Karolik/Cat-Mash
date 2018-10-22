import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import cats from './cats.json';
import Cat from './Cat.js';

class Results extends Component {
  state = {
  }

  render() {

    return(
      <div className="results">
        <Link to='/' className="close-results">Close Results</Link>
        <ol className="results-list">
          {cats.images.map((cat, index) =>
          <Cat
            key={index}
            cat={cat}
            />
          )}
        </ol>
      </div>
    )
  }
}

export default Results
