import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
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
        backgroundImage: props => color[props.color] || props.color,
        width: '100%',
    },
    area:{
      display: 'flex',
      flexDirection: props => props.type === "row" ? 'row' : 'column',
      float: 'left',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    content: {
        flex: '1 0 auto',
        padding: '1.25rem',
        width: '180px',
        maxWidth: '100%',
        height: props => props.type === "row" ? 'auto' : 90,
        textAlign: 'left',
    },
    cover: {
        width: '100%',
        height: props => props.type === "row" ? '20px' : 60,
        backgroundSize: props => props.type === "row" ? 'auto 20px' : 60,
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
  const { image, title, detail, link } = props;
  const classes = useStyles(props);
  return (
    <Card className={classes.card}>
      <CardActionArea href={link} target="_blank" className={classes.area}>
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
      </CardActionArea>
    </Card>
  );
}