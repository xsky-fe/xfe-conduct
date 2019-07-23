import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Home, Footer, Explore, About } from '../component/index';
import { withRouter } from 'react-router';

function App(props){
    return(
        <React.Fragment>
            <Header params={props} />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

const AppContainer = withRouter(App);

export default function RouterIndex(params) {
    return(
        <Router>
            <AppContainer>
                <Route exact path="/" component={Home} />
                <Route exact path="/explore" component={Explore} />     
                <Route exact path="/about" component={About} />  
            </AppContainer>
        </Router>
    )
}