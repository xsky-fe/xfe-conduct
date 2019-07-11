import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { XskyButton, BaseButton, Card, smothScroll, Container } from '../../utils';

const useStyle = makeStyles(theme => ({
    container: {
        marginTop:'2.25rem',
    },
    'header--border': {
        backgroundColor: '#6b58c4',
        height: '.25rem',
        marginBottom: '2rem',
        width: '100%',
    },
    title: {
        padding: theme.spacing(2),
        textAlign: 'center',
        maxWidth:'100%',
    },
    post: {
        textAlign: 'left',
    },
    'post1--img':{
        maxWidth: '100%',
    },
    'post--card':{
        width: '100%',
    },
}))

export default function Blog() {
    const classes = useStyle();
    return(
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h3" gutterBottom>Build <strong>Anything</strong> </Typography>
                    <div className={classes["header--border"]}></div>
                    <Box display="flex" flexDirection="row" justifyContent='space-between'>
                        <Typography variant="h5" gutterBottom>博客</Typography>
                        <Button>查看更多</Button>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} className={classes['post']}>
                    <Typography variant="caption" display="block" gutterBottom>
                        10/07/2019
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        前端安全系列：如何防护xss攻击
                    </Typography>
                    <img alt="" src="/images/test1.png" className={classes['post1--img']} />
                    <Typography variant="body2" display="block" gutterBottom>
                    随着互联网的高速发展，信息安全问题已经成为企业最为关注的焦点之一，
                    而前端又是引发企业安全问题的高危据点。在移动互联网时代，前端人员除了传统的 XSS、CSRF 等安全问题之外，
                    又时常遭遇网络劫持、非法调用 Hybrid API 等新型安全问题。当然，浏览器自身也在不断在进化和发展，
                    不断引入 CSP、Same-Site Cookies 等新技术来增强安全性，但是仍存在很多潜在的威胁，这需要前端技术人员不断进行“查漏补缺”。
                    </Typography>
                </Grid>
                <Grid item md={6} xs={12} className={classes['post']}>
                    <Typography variant="caption" display="block" gutterBottom>
                        10/07/2019
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        前端安全系列：如何防护xss攻击
                    </Typography>
                    <Typography variant="body2" display="block" gutterBottom>
                    随着互联网的高速发展，信息安全问题已经成为企业最为关注的焦点之一，
                    而前端又是引发企业安全问题的高危据点。在移动互联网时代，前端人员除了传统的 XSS、CSRF 等安全问题之外，
                    又时常遭遇网络劫持、非法调用 Hybrid API 等新型安全问题。
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        10/07/2019
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        前端安全系列：如何防护xss攻击
                    </Typography>
                    <Typography variant="body2" display="block" gutterBottom>
                    随着互联网的高速发展，信息安全问题已经成为企业最为关注的焦点之一，
                    而前端又是引发企业安全问题的高危据点。在移动互联网时代，前端人员除了传统的 XSS、CSRF 等安全问题之外，
                    又时常遭遇网络劫持、非法调用 Hybrid API 等新型安全问题。
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        10/07/2019
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        前端安全系列：如何防护xss攻击
                    </Typography>
                    <Typography variant="body2" display="block" gutterBottom>
                    随着互联网的高速发展，信息安全问题已经成为企业最为关注的焦点之一，
                    而前端又是引发企业安全问题的高危据点。在移动互联网时代，前端人员除了传统的 XSS、CSRF 等安全问题之外，
                    又时常遭遇网络劫持、非法调用 Hybrid API 等新型安全问题。
                    </Typography>
                    <Card
                        image="/images/logo.png"
                        detail={
                                <Button>发布文章</Button>
                        }
                        className={classes['post--card']}
                        type="row"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}