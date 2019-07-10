import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Home, Footer, Explore } from '../component/index';

export default function RouterIndex(params) {
    return(
        <Router>
            <Header params={params} />
            <Route exact path="/" component={Home} />
            <Route exact path="/explore" component={Explore} />            
            <Footer />
        </Router>
    )
}