import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import lodash from 'lodash';
import { BaseButton, smothScroll, Container, feedSort, Card, CardDrawer } from '../../../utils';

const links = {
    Hooters: {title: 'Hooters', img: '/images/hooters.png', color: 'WarmFlame', detail: '监控集群的健康状态', link: 'http://hooters.xsky.com', extra: {expanded: false}},
    License: {title: 'License',img: '/images/license-logo.png', color: 'NightFade', detail: '获得产品的认证', link: 'http://license.xsky.com/4.0', extra: {expanded: true}},
    OEM: {title: 'OEM', img: '/images/oem-logo.png', color: 'DeepBlue', detail: 'ome包含你需要的xx', link: 'http://oem.xsky.com', extra: {expanded: false}},
    Wiki: {title: 'Wiki', img: '/images/Wiki-logo.png', color: 'PlumPlate', detail: '记录和工作笔记', link: 'http://wiki.xsky.com'},
    Issue: {title: 'Issue', img: '/images/Issue-logo.png', color: 'RainyAshville', detail: '欢迎提交优秀的issue', link: 'http://issue.xsky.com'},
    Italent: {title: 'Italent', img: '/images/italent-logo.png', color: 'WinterNeva', detail: '人事管理', link: 'http://italent.cn', extra: {expanded: false}},
    Maycur: {title: 'Maycur', img: '/images/maycur-logo.png', color: 'ItmeoBranding', detail: '报销平台', link: 'https://www.maycur.com/', extra: {expanded: false}},
}

const contents = {
    Hooters: [],
    License: [
        {title: 'License 4.0', link: 'http://license.xsky.com/4.0'},
        {title: 'License 3.0', link: 'http://license.xsky.com/'},
    ],
    OEM: [],
    Wiki: [
        {title: 'ISSUE Tode', link: 'http://wiki.xsky.com/display/RDWIZ/ISSUE+Todo', star: true},
        {title: '2019 Q2', link: 'http://wiki.xsky.com/display/RDWIZ/2019+Q2', star: true},
        {title: '2019 Q3', link: 'http://wiki.xsky.com/display/RDWIZ/2019+Q3', star: true},
        {title: '开发环境', link: 'http://wiki.xsky.com/pages/viewpage.action?pageId=24647829'},
    ],
    Issue: [
        {title: '当前搜索', link: 'http://issue.xsky.com/issues', star: true},
        {title: '分配给我未解决的问题', link: 'http://issue.xsky.com/issues/?filter=-1', star: true},
        {title: 'XSCALER项目', link: 'http://issue.xsky.com/projects/XSCALER', star: true},
        {title: 'Wizard项目', link: 'http://issue.xsky.com/browse/WIZARD', star: true},  
    ],
    Italent: [],
    Maycur: []
}

const useStyle = makeStyles(theme => ({
    title: {
        maxWidth: '90%',
        '@media screen and (max-width: 960px)': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
        }
    },
    logo: {
        height: '1rem',
        verticalAlign: 'text-bottom',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
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
    },
    column: {
        flexBasis: '50%',
    },
    full: {
        flexBasis: '100%',
    },
    zero: {
        flexBasis: '0%',
    },
    drawer: {
        padding: theme.spacing(1, 2),
        flexShrink: 0,
        maxWidth: 200,
        position: 'relative'
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
        maxWidth: 360,
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

export default function Conduct() {
    const classes = useStyle();
    const [open, setOpen] = React.useState(true);
    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }
    const feedArray = [];
    lodash.forEach(contents, (value, key) => {
        feedArray.push({
            item: key,
            len: value.length <= 3 ? 58 : value.length * 10 + 28, // 初始状态相当于留行，多余四行之后才
        })
    });
    const { left, right } = feedSort(feedArray);
    function renderExp(item){
        return (
            <ExpansionPanel defaultExpanded {...item.extra}>
                <ExpansionPanelSummary
                    expandIcon={!item.extra || item.extra.expanded ? <ExpandMoreIcon /> : null}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>{item.title}</Typography>
                    </div>
                    <div className={classes.column}>
                        <img className={classes.logo} alt="" src={item.img} />&nbsp;
                        <Link className={classes.secondaryHeading} href={item.link} target="_blank">{item.detail}</Link>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
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
                    {!item.extra || !item.extra.expanded ? <Drawer
                        variant="persistent"
                        className={clsx(open ? classes.column : classes.zero, classes.drawer)}
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
                    </Drawer>: null}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
    return(
        <Container id="conduct" data-navname="导航">
            <Box textAlign="left" marginTop="2.25rem">
                <Typography className={classes.title} variant="h4" gutterBottom>我们整理了会常用的几个网站和我们的开源库</Typography>
                <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap="wrap" marginBottom='2rem'>
                    <Typography variant="body1" gutterBottom>最常访问的站点</Typography>
                    <BaseButton href="#conduct-more" onClick={e => smothScroll(e, 'conduct-more')} >查看更多</BaseButton>
                </Box>
            </Box>
            <Grid container spacing={3} className={classes['conduct-container']}>
                {left.map((_, index) => (
                    <React.Fragment>
                        <Grid item sm={6} xs={12} className={classes['conduct-item']}>
                            {left[index] ? <CardDrawer contents={contents} item = {links[left[index].item]} /> : <Card
                                image="/images/logo.png"
                                detail={
                                    <BaseButton>添加访问卡片</BaseButton>
                                }
                                type="row"
                            />}
                        </Grid>
                    </React.Fragment>
                ))}
                {right.map((_, index) => (
                    <React.Fragment>
                        <Grid item sm={6} xs={12} className={classes['conduct-item']}>
                            {right[index] ? <CardDrawer contents={contents} item = {links[right[index].item]} /> : <Card
                                image="/images/logo.png"
                                detail={
                                    <BaseButton>添加访问卡片</BaseButton>
                                }
                                type="row"
                            />}
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Container>
    )
}