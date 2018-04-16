import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Body from '../body/body.jsx';
import CampaignForm from '../campaign-form/campaign-form.jsx';
import Dogs from '../body/dogthing/dogthing.jsx';
import { Route } from 'react-router-dom';
import { CurrentCampaignsContainer } from './currentCampaignContainer.jsx';
import LoginComponent from '../body/login/login.jsx';
import SignupComponent from '../body/signup/signup.jsx';

const App = () => (
    <div className="app-body">
        <div className="site-content">
            <Route exact path="/" component={Dogs}/>
            <Route exact path="/campaigns" component={Body}/>
            <Route exact path="/users" component={LoginComponent} />
            <Route exact path="/signup" component={SignupComponent} />
        </div>
        <Footer />
    </div>
)

export default App