import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Results extends Component {
  state = {
    cats: [],
    views: [],
    score: []
  }

  render() {
    const {cats} = this.state

    return(
      <div className="results">
        <Link to='/' className="close-results">Close Results</Link>
        <ul>
        </ul>
      </div>
    )
  }
}

export default Results