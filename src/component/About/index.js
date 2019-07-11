import React from 'react';
import Intro from './Intro';
import Map from './Map';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    root: {
    //    margin: '0 auto',
    }
}))

export default function About() {
    const classes = useStyle();
    return(
        <div className={classes.root}>
            <Intro />
            <Map />
        </div>
    )
}