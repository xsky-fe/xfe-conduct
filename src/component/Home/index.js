import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Container } from '../../utils';
import { HeaderInro, HeaderMap } from './Map';
import { makeStyles } from '@material-ui/core/styles';
import Conduct from './Conduct';

const useStyles = makeStyles({
    box: {
        height: "calc(100vh - 20px)",
        '@media screen and (max-width: 960px)': {
            height: 'auto',
            marginBottom: '2rem',
        }
    },
  });
export default function Home() {
    const classes=useStyles();
    return(
        <div>
            <Box className={classes.box}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} >
                            <HeaderInro />
                        </Grid>
                        <Hidden only={['md', 'xs', 'sm']}>
                            <Grid item xs={12} md={6} >
                                <HeaderMap />
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
            </Box>
            <Conduct />
        </div>
    )
}