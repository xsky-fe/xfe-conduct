import React from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { XskyButton, BaseButton, Container, Content, Detail } from '../../../utils';

const useStyle = makeStyles(theme => ({
    button1: {
        marginRight: theme.spacing(2),
    },
}))

export default function OSLibrary(){
    const classes = useStyle();
    return(
        <Container id="conduct-more">
            <Content>
                <Detail>
                    <Grid item md={5} xs={12}>
                        <img alt="img1" src="images/wizardUI.png" />
                    </Grid>
                    <Grid item md={6} xs={12}>
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
                    <Grid item md={6} xs={12}>
                        <Typography variant="h3" gutterBottom>GITHUB 主页</Typography>
                        <Typography variant="body1" gutterBottom>汇集了XFE所有开发的项目</Typography>
                        <Typography variant="body1" gutterBottom>你可以看到xfe-wizard、xsky的官方网站等等项目的源码，当然还有本项目的～</Typography>
                        <Typography variant="body1" gutterBottom>欢迎star、fork、提issue</Typography>
                        <Typography variant="subtitle1" gutterBottom></Typography>
                        <ButtonGroup>
                            <BaseButton className={classes.button1} href="http://github.xsky.com">内网</BaseButton>
                            <BaseButton href="https://github.com/xsky-fe">公网</BaseButton>
                        </ButtonGroup>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <img alt="img1" src="images/XFEGITHUB.png" />
                    </Grid>
                </Detail>
            </Content>
        </Container>
    )
}