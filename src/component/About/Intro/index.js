import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { XskyButton, Container } from '../../../utils';

const useStyles = makeStyles({
    outer: {
        width: '100%',
    },
    title: {
        position: 'absolute',
        left: 80,
        '@media screen and (max-width: 960px)':{
            position: 'static',
            width: '100%',
        },
    },
    introduce: {
        position: 'absolute',
        right: 80,
        bottom: 30,
        width: '25vw',
        '@media screen and (max-width: 960px)':{
            position: 'static',
            width: '100%',
        },
    },
    location: {
        position: 'absolute',
        left: 80,
        bottom: 20,
        width: '15vw',
        '@media screen and (max-width: 960px)':{
            position: 'static',
            width: '100%',
        },
    }
});
export default function Intro() {
    const classes = useStyles();
    return(
        <Container className={classes.outer}>
             <Typography variant="h3" className={classes.title} gutterBottom>
                Xsky前端团队
            </Typography>
            <Typography variant="caption" className={classes.location} gutterBottom>
                成都、长沙、西安、南宁、深圳、广州、上海、大连、哈尔滨、南昌
            </Typography>
            <div className={classes.introduce}>
                <Typography variant="body1" gutterBottom>
                    我们的前端团队由来自广东、湖南、北京、福建、江苏等的小伙伴组成，我们因为自己喜欢的东西聚集在了一起
                </Typography>
                <Typography variant="body1" gutterBottom>
                    如果你也喜欢前端，如果你也热爱开源精神，那么
                </Typography>
                <ButtonGroup>
                    <XskyButton href="https://www.xsky.com/career/?job=9-2#jobs" target="_blank">加入我们～</XskyButton>
                </ButtonGroup>
            </div>
        </Container>
    )
}