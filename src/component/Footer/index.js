import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Banner, Content, Detail } from '../../utils';

const useStyle = makeStyles(theme => ({
    'footer--border': {
        borderStyle: 'solid',
        borderColor: '#fff',
        backgroundColor: '#4285f4',
        height: '.25rem',
        marginBottom: '4rem',
      },
}))

export default function Footer() {
    const classes = useStyle();
    return (
        <Container>
            <div className={classes["footer--border"]}></div>
        </Container>
    )
}