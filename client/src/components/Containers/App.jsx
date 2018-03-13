import React from 'react';
import CounterContainer from './CounterContainer.jsx';
import Header from '../Header/header.jsx';
import Footer from '../Footer/footer.jsx';
import Body from '../body/body.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
    <div className="app-body">
        <Header />
        <Route exact path="/" component={Body}/>
        <Route path="/counter" component={CounterContainer}/>
        <Footer />
    </div>
)

export default App;