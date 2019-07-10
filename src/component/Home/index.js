import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { HeaderInro, HeaderMap } from './Map';
import Conduct from './Conduct';

export default function Home() {
    return(
        <div>
            <Box height="calc(100vh - 50px)">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} >
                        <HeaderInro />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <HeaderMap />
                    </Grid>
                </Grid>
                </Box>
            <Conduct />
        </div>
    )
}