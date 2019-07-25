import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import { BaseButton } from './Button';
import TextField from '@material-ui/core/TextField';

const colors = [
    ["#dad6f7", "#846ee0", "#6b58c4"],
    ["#feecdf", "#8e5d2e","#ffb71c"],
    ["#d9f9f5", "#66cdcb", "#60d1cd"],
]

const useStyle = makeStyles(theme =>  ({
    card: {
        boxShadow: 'none',
    },
    avatar: {
        color: '#fff',
        background: '#ffffff',
    },
    logo: {
        width: '2.25rem',
        verticalAlign: 'text-bottom',
    },
    divider: {
        backgroundColor: props => colors[props.index % colors.length][1],
    },
    header: {
        background: props => `radial-gradient(circle closest-side at 98.5% 10%, ${colors[props.index % colors.length][2]} 90%,#ffffff 0%, #ffffff 150%, ${colors[props.index % colors.length][0]} 90%)`,
        color: props => colors[props.index % colors.length][1],
        '& a': {
            textDecoration: 'blink',
            color: props => colors[props.index % colors.length][1],
        },
        '& a:hover': {
            color: '#000'
        },
        '& .MuiAvatar-root': {
            borderRadius: '35%',
        }
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
        backgroundColor: props => colors[props.index % colors.length][0],
        padding: theme.spacing(1, 3, 3),
    },
    column: {
        flexBasis: '50%',
    },
    full: {
        flexBasis: '100%',
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    list: {
        color: props => colors[props.index % colors.length][1],
        width: '98%',
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
    form: {
        padding: theme.spacing(1, 2),
        borderLeft: 'solid 1px #eee',
        height: 151,
        flexBasis: props => props.open ? '50%' : '0%',
        position: 'relative',
        right: props => props.open ? 0 : '-50%',
        visibility: props => props.open ? 'visible' : 'hidden',
        transition: 'right 350ms ease',
    }
}))

const ColorfulMoreVertIcon = withStyles(theme => ({
    root: {
        color: props => colors[props.index % colors.length][1],    
    },
  }))(props => <MoreVertIcon {...props} />);

export default function CardDrawer(props) {
    const { item, contents, index } = props;
    const [open, setOpen] = React.useState(false);
    function handleDrawerToggle() {
        setOpen(!open);
    }
    const classes = useStyle(
        {open, index}
    );
    return(
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        <img className={classes.logo} alt="" src={item.img} />
                    </Avatar>
                }
                action={
                    item.expanded !== false ? <IconButton
                        aria-label="toggle drawer"
                        onClick={handleDrawerToggle}
                        >
                        <ColorfulMoreVertIcon index={index} />
                    </IconButton> : null
                }
                title={item.title}
                subheader={<Link className={classes.secondaryHeading} href={item.link} target="_blank">{item.detail}</Link>}
            />
            {item.expanded !== false ? <CardContent className={classes.details}>
                <div className={open ? classes.column : classes.full}>
                    <List component="nav" className={classes.list} aria-label="Contacts">
                        {contents[item.title].map(content => (
                            <div>
                                <ListItem key={"ListItem" + item.title} className={classes.item} component='a' target="_blank" button href={content.link}>
                                    <ListItemIcon className={classes.icon}>
                                    <StarIcon color = {content.star ? "secondary" : "inherit"} />
                                    </ListItemIcon>
                                    <ListItemText primary={content.title} />
                                </ListItem>
                                <Divider key={"Divider" + item.title} className={classes.divider} />
                            </div>
                        ))}
                    </List>
                </div>
                <FormControl fullWidth className={classes.form}>
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
            </CardContent> : null}
        </Card>
    )
}