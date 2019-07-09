import React from 'react';
import Box from '@material-ui/core/Box';
import HeaderNav from './HeaderNav';
import HeaderIntro from './HeaderIntro';
import HeaderMap from './HeaderMap';
import './style.css';

export default function Header() {
    return(
        <Box display="flex" flexDirection="column" height="100vh" id="home">
            <HeaderNav id="home" />
            <Box display="flex" flexDirection="row" height="100%">
                <HeaderIntro />
                <HeaderMap />
            </Box>
        </Box>
    )
}
