import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Container } from '../../utils';
import { HeaderInro, HeaderMap } from './Map';
import Conduct from './Conduct';

export default function Home() {
    return(
        <div>
            <Box height="calc(100vh - 20px)">
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} >
                            <HeaderInro />
                        </Grid>
                        <Hidden only={['md', 'xs']}>
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