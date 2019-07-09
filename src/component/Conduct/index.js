import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { XskyButton, BaseButton, Card, smothScroll, Container, Banner, Content, Detail } from '../../utils';

const useStyle = makeStyles(theme => ({
    button1: {
        marginRight: theme.spacing(2),
      },
}))

const links = [
    {img: '/images/hooters.png', title: 'Hooters', color: 'WarmFlame', detail: 'Hooters监控着集群的健康状态', link: 'http://hooters.xsky.com'},
    {img: '/images/license-logo.png', title: 'License', color: 'NightFade', detail: '你可以在license获得产品的认证', link: 'http://license.xsky.com/4.0'},
    {img: '/images/oem-logo.png', title: 'oem', color: 'DeepBlue', detail: 'ome包含你需要的xx', link: 'http://oem.xsky.com'},
    {img: '/images/Wiki-logo.png', title: 'wiki', color: 'PlumPlate', detail: '学城里藏了我们所有的记录和工作笔记', link: 'http://wiki.xsky.com/pages/viewpage.action?pageId=3538967'},
    {img: '/images/Issue-logo.png', title: 'Issue', color: 'RainyAshville', detail: '欢迎提交优秀的issue，这样我们会变得更好', link: 'http://issue.xsky.com'},
    {img: '/images/italent-logo.png', title: 'Italent', color: 'WinterNeva', detail: '来看看有没有什么代办项，或者来查一查工资', link: 'http://italent.cn'},
    {img: '/images/maycur-logo.png', title: 'Maycur', color: 'ItmeoBranding', detail: '报个销吧', link: 'https://www.maycur.com/'},
    {img: '/images/logo.png', title: 'Xsky', color: 'FarawayRiver', detail: '每天都能开心的工作，每天都能准时的下班', link: 'http://www.xsky.com'},
]

export default function Conduct() {
    const classes = useStyle();
    return(
        <Container id="conduct">
            <Banner>
                <Box textAlign="left">
                    <Typography variant="h3" gutterBottom>快速开始一天的工作</Typography>
                    <Box display='flex' justifyContent='space-between' alignItems='center' marginBottom='2rem'>
                        <Typography variant="body1" gutterBottom>整理了在一天的工作之中可能会用到的网址</Typography>
                        <BaseButton href="#conduct-more" onClick={e => smothScroll(e, 'conduct-more')} >查看更多</BaseButton>
                    </Box>
                </Box>
                {links.slice(0, links.length / 4 + 1).map((item, index) => (
                    <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap' marginBottom='2rem' key={item.title + index}>
                        {links.slice(index * 4, (index + 1) * 4).map(item => (
                            <Card 
                                key={item.title}
                                image={item.img}
                                title={item.title}
                                color={item.color}
                                detail={item.detail}
                                link={item.link}
                            />
                        ))}
                    </Box>
                ))}
            </Banner>
            <Content id="conduct-more">
                <Detail>
                    <Grid item xs={5}>
                        <img alt="img1" src="images/wizardUI.png" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>WIZARD UI</Typography>
                        <Typography variant="body1" gutterBottom>基于 React 16+ 和 Typescript 的组
                        件模块化解决方案，让设计和开发专注更好的用户体验。</Typography>
                        <Typography variant="body1" gutterBottom>提供一套简单易用的 React 组件库，提升开发体验。Typescript 保证代码稳定性。
                        尝试在多层面、多纬度封装基础组件。满足多个应用场景。</Typography>
                        <Typography variant="body1" gutterBottom>提供常用的复杂业务组件。UI 层面定制了颜色、布局结构
                        在 React Bootstrap 的基础上，做了很多扩展，提升了可用性并补充了复杂交互组件。</Typography>
                        <Typography variant="subtitle1" gutterBottom></Typography>
                        <ButtonGroup>
                            <XskyButton className={classes.button1} href="https://xsky-fe.github.io/wizard-ui/">访问官网</XskyButton>
                            <BaseButton href="https://github.com/xsky-fe/wizard-ui">GitHub</BaseButton>
                        </ButtonGroup>
                    </Grid>
                </Detail>
                <Detail>
                    <Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>GITHUB 主页</Typography>
                        <Typography variant="body1" gutterBottom>汇集了XFE所有开发的项目</Typography>
                        <Typography variant="body1" gutterBottom>你可以看到xfe-wizard、xsky的官方网站等等项目的源码，当然还有本项目的～</Typography>
                        <Typography variant="body1" gutterBottom>欢迎star、fork、提issue</Typography>
                        <Typography variant="subtitle1" gutterBottom></Typography>
                        <ButtonGroup>
                            <BaseButton href="https://github.com/xsky-fe">GitHub</BaseButton>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={5}>
                        <img alt="img1" src="images/XFEGITHUB.png" />
                    </Grid>
                </Detail>
            </Content>
        </Container>
    )
}