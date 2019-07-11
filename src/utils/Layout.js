import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const CusContainer = withStyles({
    root: {
        marginBottom: '2rem',
        '@media screen and (min-width: 960px)': {
            paddingLeft: 80,
            paddingRight: 80
        },
    },
  })(props => <Container {...props} maxWidth="lg" />);

const Banner = withStyles({
    root: {
        // background: '#513dae',
        width: '100%',
        borderRadius: '0 10px 10px 0',
        // position: 'relative',
        // left: '-40px',
    },
  })(props => <Typography {...props} variant="h2" component="h2" gutterBottom />);

const Content = withStyles({
    root: {
        borderRadius: '10px 0',
        boxShadow: '0 3px 5px 2px rgba(158, 158, 158, .3)',
        padding: 20,
    }
})(props => <Typography {...props} component="div" />)

const Detail = withStyles({
    root: {
        borderRadius: 10,
        // boxShadow: '0 3px 5px 2px rgba(158, 158, 158, .3)',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'left',
        padding: 20,
        '& img': {
            width: '100%',
            // boxShadow: '0 3px 5px 2px rgba(158, 158, 158, .3)',
        },
        '& button': {
            marginRight: 10,
        }
    }
})(props => <Grid {...props} container spacing={2} />)

export { CusContainer, Banner, Content, Detail };