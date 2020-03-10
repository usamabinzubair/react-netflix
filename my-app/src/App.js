import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Question from './components/Question'



class App extends Component {
  state = {
    questions: [
      { name: "What is Netflix?", plus: "+" },
      { name: "How much does Netflix cost?", plus: "+" },
      { name: "Where can I watch?", plus: "+" },
      { name: "How do I cancel?", plus: "+" },
      { name: "What can I watch on Netflix?", plus: "+" },
      { name: "How does the free trial work?", plus: "+" }
    ]
  };

  render() {
    const eachquestion = this.state.questions.map((questions, index) => {
      return (
        <Question name={questions.name} plus={questions.plus} key={index} />
      );
    });

    return (
      <div class="body">
        <div className="App">
          <div class="boxes">
            <div class="header">
              <h1>Frequently Asked Questions</h1>
            </div>

            {eachquestion}

            <div class="button">
              <div class="trial">
                <h3>TRY 30 DAYS FREE ></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
