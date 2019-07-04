import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const color = {
    WarmFlame: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    NightFade: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    DeepBlue: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
    PlumPlate: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    RainyAshville: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    WinterNeva: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    ItmeoBranding: 'linear-gradient(180deg, #2af598 0%, #009efd 100%)',
    FarawayRiver: 'linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%)',
}
const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        float: 'left',
        backgroundImage: props => color[props.color],
        color: '#FFFFFF',
        maxWidth: '20%',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        padding: '5px 30px 0px 10px',
        width: '180px',
        maxWidth: '100%',
        height: 90,
        textAlign: 'left',
    },
    cover: {
        width: '100%',
        height: 60,
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
  const { image, title, detail } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="body1">
            {detail}
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