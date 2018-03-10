import React from 'react';

export default class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => ({ currentCount: prevState.currentCount + 1 }));
  }

  decrement() {
    this.setState((prevState) => {
      const isZero = prevState.currentCount === 0;
      const setCount = isZero ? 0 : prevState.currentCount - 1;
      return ({ currentCount: setCount });
    });
  }

  render() {
    return <div className="counterComponent">
        <div className="counterComponentContainer">
          <button onClick={this.increment}>+</button>
          <div>{this.state.currentCount}</div>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>;
  }
}
