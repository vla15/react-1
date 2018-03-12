import React from 'react';
import CounterComponent from './CounterComponent/counterComponent.jsx';
import Header from './Header/header.jsx';
import Footer from './Footer/footer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="app-body">
      <Header props={this.props}/>
      <CounterComponent props={this.props}/>
      <Footer props={this.props}/>
    </div>
  }
}
