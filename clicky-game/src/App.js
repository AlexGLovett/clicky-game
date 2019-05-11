import React, { Component } from "react";
import "./App.css";
import Frame from "./Components/Frame";
import Picture from "./Components/Picture";
import monsters from "./monsters.json";

class App extends Component {
  state = {
    pics: monsters,
    score: 0,
    TopScore: 0,
    Monsters: []
  };

  clickState = {
    selections: this.state.Monsters,
    currScore: this.state.score,
    topScore: this.state.TopScore,
    remaining: 20
  };

  clickPic = id => {
    this.evaluate(id);

    let pics = this.shuffle(this.state.pics);

    this.setState({
      pics: pics,
      score: this.clickState.currScore,
      Score: this.clickState.topScore,
      Monsters: this.clickState.selections
    });
  };

  shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  evaluate(id) {
    if (this.clickState.selections.includes(id)) {
      this.clickState.selections = [];
      if (this.clickState.currScore > this.clickState.topScore) {
        this.clickState.topScore = this.clickState.currScore;
      }
      this.clickState.currScore = 0;
    } else {
      this.clickState.selections.push(id);
      this.clickState.currScore++;
      this.clickState.remaining--;
    }
    this.endCondition();
  }

  endCondition() {
    if (this.clickState.remaining === 0) {
      this.clickState = {
        selections: [],
        currScore: 0,
        topScore: 20,
        remaining: 0
      };
    }
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <div className="row">
            <Frame score={this.state.score} TopScore={this.state.TopScore}>
              {this.state.pics.map((monster, num) => (
                <Picture key={num} image={monster} clickPic={this.clickPic} />
              ))}
            </Frame>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
