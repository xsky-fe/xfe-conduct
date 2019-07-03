import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const color = {
    origin: 'linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%)',
    blue: 'linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%)',
    purple: 'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)',
    green: 'linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%)',
    red: 'linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)',
}
const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        float: 'left',
        backgroundImage: props => color[props.color],
        color: 'white',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        padding: '5px 30px 15px 5px',
    },
    cover: {
        width: '100%',
        height: 85,
        backgroundSize: 60,
        backgroundPosition: '90% 80%',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

export default function MediaControlCard(props) {
  const classes = useStyles(props);
  const { image, title } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title={title}
      />
    </Card>
  );
}