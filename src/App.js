import React, { Component } from "react";
import Results from './Result';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "JavaScript", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "Kotlin", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  vote(i) {
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;
    this.setState({ languages: newLanguages });
  }

  render() {
    return (
      <>
        <h1>Vote your Language</h1>
        <div className="Languages">
          {this.state.languages.map((lang, i) => (
            <div key={i} className="language">
              <div className="voteCount">{lang.votes}</div>
              <div className="languageName">{lang.name}</div>
              <button onClick={this.vote.bind(this, i)}>Click Here</button>
            </div>
          ))}
        </div>

        {/* Show results component */}
        <Results languages={this.state.languages} />
      </>
    );
  }
}

export default App;
