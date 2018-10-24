import React from 'react';

const Cat = (props) => {

  return (
    <div>
      <li key={props.cat.id}>
        <img src ={props.cat.url} alt="cat" className="cat-image-thumbnail"/>
      </li>
    </div>
  )
}

export default Cat;
