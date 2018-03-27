import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Body from '../body/body.jsx';
import CampaignForm from '../campaign-form/campaign-form.jsx';
import Dogs from '../body/dogthing/dogthing.jsx';
import { Route } from 'react-router-dom';
import { CurrentCampaignsContainer } from './currentCampaignContainer.jsx';

const App = () => (
    <div className="app-body">
        <Header />
        <div className="site-content">
            <Route exact path="/" component={Dogs}/>
            <Route path="/campaigns" component={Body}/>
        </div>
        <Footer />
    </div>
)

export default App