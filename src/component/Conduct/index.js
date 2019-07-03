import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { XskyButton, BaseButton, Card } from '../../utils';

const Banner = withStyles({
    root: {
        background: '#513dae',
        width: '100%',
        height: 300,
        borderRadius: '0 10px 10px 0',
        position: 'relative',
        left: '-40px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
  })(props => <Typography {...props} variant="h2" component="h2" gutterBottom />);

const CusContainer = withStyles({
    root: {
        '@media screen and (min-width: 600px)': {
            paddingLeft: 80,
            paddingRight: 80
        }
    },
  })(props => <Container {...props} maxWidth="lg" />);

const Content = withStyles({
    root: {
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(158, 158, 158, .3)',
        padding: 20,
    }
})(props => <Typography {...props} component="div" />)

const Detial = withStyles({
    root: {
        borderRadius: 10,
        // boxShadow: '0 3px 5px 2px rgba(158, 158, 158, .3)',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'left',
        padding: 20,
        '& img': {
            width: '100%',
            // boxShadow: '0 3px 5px 2px rgba(158, 158, 158, .3)',
        },
        '& button': {
            marginRight: 10,
        }
    }
})(props => <Grid {...props} container spacing={2} />)

const useStyle = makeStyles(theme => ({
    button1: {
        marginRight: theme.spacing(2),
      },
}))

export default function Conduct() {
    const classes = useStyle();
    return(
        <CusContainer>
            <Banner>
                <Card image="/images/hooters.png" title="Hooters" color="origin" />
                <Card image="/images/hooters.png" title="Hooters" color="purple" />
                <Card image="/images/hooters.png" title="Hooters" color="blue" />
                <Card image="/images/hooters.png" title="Hooters" color="green" />
                <Card image="/images/hooters.png" title="Hooters" color="red" />
            </Banner>
            <Content>
                <Detial>
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
                </Detial>
                <Detial>
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
                </Detial>
            </Content>
        </CusContainer>
    )
}