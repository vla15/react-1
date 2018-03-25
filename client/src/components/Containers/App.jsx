import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Body from '../body/body.jsx';
import CampaignForm from '../campaign-form/campaign-form.jsx';
import Dogs from '../body/dogthing/dogthing';
import { Route } from 'react-router-dom';

const App = () => (
    <div className="app-body">
        <Header />
        <Route exact path="/" component={Body}/>
        <Route path="/counter" component={Dogs}/>
        <Footer />
    </div>
)

export default App