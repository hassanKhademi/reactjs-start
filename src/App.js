import Counter from "./components/counter";
import React, { Component } from "react";
import { Header } from "./components/header";
import Pagination from "./components/utilites/pagination";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
    ],
    allCount: 0,
  };

  increaseCounter = (index) => {
    let counters = this.state.counters;
    counters[index]++;
    this.setState({ counters });
  };

  decreamentCounter = (index) => {
    let counters = this.state.counters;
    counters[index]--;
    this.setState({ counters });
  };

  deleteCounter(index) {
    let { counters } = this.state;
    counters.splice(index, 1);
    this.setState({ counters });
  }

  render() {
    this.allCount = this.state.counters.reduce((s, f) => (s += f), 0);
    return (
      <div className="m-2">
        <Header allCount={this.allCount} />
        {this.state.counters.map((f, index) => (
          <Counter
            key={index}
            counter={f}
            onIncreaseCounter={() => this.increaseCounter(index)}
            onDecreamentCounter={() => this.decreamentCounter(index)}
            onDeleteCounter={() => this.deleteCounter(index)}
          />
        ))}
        <Pagination pageLength={5} itemSize={this.state.counters.length} />
      </div>
    );
  }
}

export default App;
