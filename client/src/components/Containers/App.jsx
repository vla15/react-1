import React from 'react';
// import CounterComponent from '../CounterComponent/counterComponent.jsx';
import CounterContainer from './CounterContainer.jsx';
import Header from '../Header/header.jsx';
import Footer from '../Footer/footer.jsx';

const App = () => (
  <div className="app-body">
      <Header />
      <CounterContainer />
      <Footer />
  </div>
)

export default App;