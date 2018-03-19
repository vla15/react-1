import React from 'react';
import LikeButton from '../like-button/like-button.jsx'
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Body from '../body/body.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
    <div className="app-body">
        <Header />
        <Route exact path="/" component={Body}/>
        <Route path="/counter" component={LikeButton}/>
        <Footer />
    </div>
)

export default App;