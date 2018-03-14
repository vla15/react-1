import React from 'react';
import { counterActions } from '../../../actions/counterAction';
import CounterComponent from '../counter-component/counterComponent.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementer: () => dispatch(counterActions.increment()),
    decrementer: () => dispatch(counterActions.decrement())
  };
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export default CounterContainer;