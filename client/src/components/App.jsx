import React from 'react';
import CounterComponent from './CounterComponent/counterComponent.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CounterComponent props={this.props}/>
  }
}
