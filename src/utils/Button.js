import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const XskyButton = withStyles({
    'root': {
        height: '2rem',
        background: 'linear-gradient(45deg, #448aff 30%, #6b58c4 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(107, 88, 196, .3)',
    }
})(props => <Button {...props} />)

const BaseButton = withStyles({
    'root': {
        height: '2rem',
        borderRadius: 3,
        border: 0,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    }
})(props => <Button {...props} />)

export { XskyButton, BaseButton }