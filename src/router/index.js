import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Home, Footer } from '../component/index';

export default function RouterIndex(params) {
    return(
        <Router>
            <Header />
            <Route exact path="/" component={Home} />
            <Footer />
        </Router>
    )
}