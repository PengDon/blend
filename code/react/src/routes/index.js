import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'views/home';
import About from 'views/about';
import User from 'views/user';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/user" component={User}/>
        </div>
    </Router>
)

export default Routes;