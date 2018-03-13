import React from 'react';

const CounterComponent = ({decrementer, incrementer, counter}) => {
    return (<div className="counterComponent">
      <div className="counterComponentContainer">
        <button onClick={incrementer}>+</button>
        <div>{counter}</div>
        <button onClick={decrementer}>-</button>
      </div>
    </div>
  )
}

export default CounterComponent;