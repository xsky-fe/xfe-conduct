import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const Banner = withStyles({
    root: {
        opacity: '0.7'
    },
  })(props => <Typography {...props} variant="h2" component="h2" gutterBottom />);

const CusContainer = withStyles({
    root: {
        '@media screen and (min-width: 600px)': {
            paddingLeft: 80,
            paddingRight: 80
        }
    },
  })(props => <Container {...props} maxWidth="lg" />);

const useStyle = makeStyles({
    
})

export default function Conduct() {
    return(
        <CusContainer>
            <Banner>
                MAKA DATA ALIVE
            </Banner>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </CusContainer>
    )
}