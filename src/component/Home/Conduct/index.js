import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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
    const feedArray = [];
    lodash.forEach(contents, (value, key) => {
        feedArray.push({
            item: key,
            len: value.length <=0 ? 3 : value.length <= 3 ? 12 : value.length * 2 + 12, // 初始状态相当于留行，多余四行之后才
        })
    });
    const { left, right } = feedSort(feedArray);
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
                    <Grid item sm={6} xs={12} className={classes['conduct-item']}>
                        {left[index] ? <CardDrawer contents={contents} item = {links[left[index].item]} /> : <Card
                            image="/images/logo.png"
                            detail={
                                <BaseButton>添加访问卡片</BaseButton>
                            }
                            type="row"
                        />}
                    </Grid>
                ))}
                {right.map((_, index) => (
                    <Grid item sm={6} xs={12} className={classes['conduct-item']}>
                        {right[index] ? <CardDrawer contents={contents} item = {links[right[index].item]} /> : <Card
                            image="/images/logo.png"
                            detail={
                                <BaseButton>添加访问卡片</BaseButton>
                            }
                            type="row"
                        />}
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}