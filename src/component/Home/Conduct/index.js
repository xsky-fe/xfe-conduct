import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { BaseButton, smothScroll, Container } from '../../../utils';

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
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
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
}))

const links = [
    {img: '/images/hooters.png', title: 'Hooters', color: 'WarmFlame', detail: '监控集群的健康状态', link: 'http://hooters.xsky.com'},
    {img: '/images/license-logo.png', title: 'License', color: 'NightFade', detail: '获得产品的认证', link: 'http://license.xsky.com/4.0'},
    {img: '/images/oem-logo.png', title: 'OEM', color: 'DeepBlue', detail: 'ome包含你需要的xx', link: 'http://oem.xsky.com'},
    {img: '/images/Wiki-logo.png', title: 'Wiki', color: 'PlumPlate', detail: '记录和工作笔记', link: 'http://wiki.xsky.com/pages/viewpage.action?pageId=3538967'},
    {img: '/images/Issue-logo.png', title: 'Issue', color: 'RainyAshville', detail: '欢迎提交优秀的issue', link: 'http://issue.xsky.com'},
    {img: '/images/italent-logo.png', title: 'Italent', color: 'WinterNeva', detail: '人事管理', link: 'http://italent.cn'},
    {img: '/images/maycur-logo.png', title: 'Maycur', color: 'ItmeoBranding', detail: '报销平台', link: 'https://www.maycur.com/'},
]

const contents = {
    Hooters: [{
        title: 'cluster-9d45ec1f', link: 'http://hooters.xsky.com/'
    }],
    License: [
        {title: 'License 4.0', link: 'http://license.xsky.com/4.0'},
        {title: 'License 3.0', link: 'http://license.xsky.com/'},
    ],
    OEM: [{
        title: 'cluster-9d45ec1f', link: 'http://hooters.xsky.com/'
    }],
    Wiki: [
        {title: 'ISSUE Tode', link: 'http://wiki.xsky.com/display/RDWIZ/ISSUE+Todo', star: true},
        {title: '2019 Q2', link: 'http://wiki.xsky.com/display/RDWIZ/2019+Q2', star: true},
        {title: '2019 Q3', link: 'http://wiki.xsky.com/display/RDWIZ/2019+Q3', star: true},
        {title: '开发环境', link: 'http://wiki.xsky.com/pages/viewpage.action?pageId=24647829'},
    ],
    Issue: [{
        title: 'cluster-9d45ec1f', link: 'http://hooters.xsky.com/'
    }],
    Italent: [{
        title: 'cluster-9d45ec1f', link: 'http://hooters.xsky.com/'
    }],
    Maycur: [{
        title: 'cluster-9d45ec1f', link: 'http://hooters.xsky.com/'
    }]
}

export default function Conduct() {
    const classes = useStyle();
    return(
        <Container id="conduct" data-navname="导航">
            <Box textAlign="left" marginTop="2.25rem">
                <Typography className={classes.title} variant="h4" gutterBottom>我们整理了会常用的几个网站和我们的开源库</Typography>
                <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap="wrap" marginBottom='2rem'>
                    <Typography variant="body1" gutterBottom>最常访问的站点</Typography>
                    <BaseButton href="#conduct-more" onClick={e => smothScroll(e, 'conduct-more')} >查看更多</BaseButton>
                </Box>
            </Box>
            {links.slice(0, links.length / 2 + 1).map((item, index) => (
                <Grid container spacing={2} key={item.title + index}>
                    {links.slice(index * 2, (index + 1) * 2).map(item => (
                        <Grid item sm={6} xs={12} key={item.title}>
                            <ExpansionPanel defaultExpanded>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
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
                                    <div className={classes.column}>
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
                                    <div className={clsx(classes.column, classes.helper)}>
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
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Container>
    )
}