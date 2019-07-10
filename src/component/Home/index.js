import React from 'react';
import Box from '@material-ui/core/Box';
import { HeaderInro, HeaderMap } from './Map';
import Conduct from './Conduct';

export default function Home() {
    return(
        <div>
            <Box display="flex" flexDirection="row" height="calc(100vh - 50px)">
                <HeaderInro />
                <HeaderMap />
            </Box>
            <Conduct />
        </div>
    )
}