import React from 'react';
import "./Question.css";



const Question = props => {
    return (
      <div class="main">
        <div class="name">
          <p>{props.name}</p>
        </div>
  
        <div class="plus">
          <p>{props.plus}</p>
        </div>
      </div>
    );
  };

  export default Question;