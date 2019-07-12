import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import { BaseButton } from './Button';
import TextField from '@material-ui/core/TextField';



const useStyle = makeStyles(theme =>({
    logo: {
        width: '2.25rem',
        verticalAlign: 'text-bottom',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    item: {
        paddingLeft:  0,
        paddingRight:  theme.spacing(1),
    },
    icon: {
        minWidth: '2rem'
    },
    details: {
        alignItems: 'center',
        display: 'flex',
        padding: '8px 24px 24px',
    },
    column: {
        flexBasis: '50%',
        position: 'relative',
    },
    full: {
        flexBasis: '100%',
    },
    zero: {
        flexBasis: '0%',
        position: 'static !important',
    },
    drawer: {
        padding: theme.spacing(1, 2),
        flexShrink: 0,
        maxWidth: 200,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    list: {
        width: '98%',
        backgroundColor: theme.palette.background.paper,
    },
    'conduct-container': {
        display: 'block',
        columnCount: 2,
        '@media screen and (max-width: 600px)': {
            columnCount: 1,
        }
    },
    'conduct-item': {
        breakInside: 'avoid',
        height: 'min-content',
        maxWidth: '100%',
    },
}))

export default function CardDrawer(props) {
    const { item, contents } = props;
    const [open, setOpen] = React.useState(false);
    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }
    const classes = useStyle();
    return(
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe">
                        <img className={classes.logo} alt="" src={item.img} />
                    </Avatar>
                }
                action={
                    !item.extra || item.extra.expanded ? <IconButton aria-label="Settings">
                        <MoreVertIcon />
                    </IconButton> : null
                }
                title={item.title}
                subheader={<Link className={classes.secondaryHeading} href={item.link} target="_blank">{item.detail}</Link>}
            />
            {!item.extra || item.extra.expanded ? <CardContent className={classes.details}>
                <div className={open ? classes.column : classes.full}>
                    <List component="nav" className={classes.list} aria-label="Contacts">
                        {contents[item.title].map(content => (
                            <div>
                                <ListItem className={classes.item} component='a' target="_blank" button href={content.link}>
                                    <ListItemIcon className={classes.icon}>
                                    <StarIcon color = {content.star ? "secondary" : "inherit"} />
                                    </ListItemIcon>
                                    <ListItemText primary={content.title} />
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                </div>
                <Drawer
                        variant="persistent"
                        className={clsx(classes.drawer, open ? classes.column : classes.zero)}
                        anchor="right"
                        open={open}
                        classes={{
                            paper: classes.drawer,
                        }}
                    >
                    <FormControl fullWidth className={classes.margin}>
                        <Typography variant="caption">
                            添加一个快捷访问
                        </Typography>
                        <TextField
                            label={item.link.length > 30 ? item.link.slice(0, 30) + '...' : item.link}
                            defaultValue="/"
                            className={classes.textField}
                        />
                        <TextField
                            label="名称"
                            defaultValue=""
                            className={classes.textField}
                        />
                        <BaseButton variant="outlined">
                            提交审核
                        </BaseButton>
                    </FormControl>
                </Drawer>
            </CardContent> : null}
        </Card>
    )
}