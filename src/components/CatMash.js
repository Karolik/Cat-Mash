import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import cats from './cats.json';

class CatMash extends Component {
  state = {
  }

  render() {
    const catImg = cats.images.map(cat => {return <img src ={cat.url} alt="cat" className="cat-image"/>;});
    //Display random cats
    const cat1 = catImg[Math.floor(Math.random() * cats.images.length)];
    const cat2 = catImg[Math.floor(Math.random() * cats.images.length)];

    return (
      <div>
        <header className="cat-mash-title">
          <h1>Cat Mash</h1>
          <h4>Which cat is cuter?</h4>
        </header>
        <main className="cat-mash-content">
          <div className="cat-photos">
            {cat1}
            <p>OR</p>
            {cat2}
          </div>
        </main>
        <footer>
          <div className="open-results">
              <Link
                to='/results'
                >See the most beautiful cats</Link>
                <p>Number of votes</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default CatMash
