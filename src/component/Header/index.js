import React from 'react';
import Box from '@material-ui/core/Box';
import HeaderNav from './HeaderNav';
import HeaderIntro from './HeaderIntro';
import HeaderMap from './HeaderMap';
import './style.css';

export default function Header() {
    return(
        <Box display="flex" justifyContent= "space-between">
            <Box display="flex" flexDirection="column">
                <HeaderNav/>
                <HeaderIntro />
            </Box>
            <HeaderMap />
        </Box>
    )
}
