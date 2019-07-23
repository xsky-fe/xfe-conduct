import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Banner, Content, Detail } from '../../utils';

const useStyle = makeStyles(theme => ({
    'container': {
        margin: '4rem auto',
        textAlign: 'left',
        display:'flex',
        justifyContent: 'space-between',
        // fontSize: '.9em',
        '& p': {
            // fontSize: '.9em',
        },
        '& ul': {
            float: 'left',
            marginRight: '1rem',
            paddingTop: 0,
        }
    },
    'footer--border': {
        backgroundColor: '#6b58c4',
        height: '.25rem',
        marginBottom: '4rem',
    },
    'list': {
        margin: 1,
        display:'flex',
        flexDirection: 'column',
    },
    'sub--footer': {
    boxShadow: '0 -0.1875rem 0.125rem #efefef',
    left: 0,
    position: 'absolute',
    width: '100%',
    },
    logo: {
        height: '2.25rem'
    }

}))

const productList = [
    {name: 'XCBS', link: 'https://www.xsky.com/product-xcbs/'},
    {name: 'XEBS', link: 'https://www.xsky.com/product-xebs/'},
    {name: 'XEFS', link: 'https://www.xsky.com/product-xefs/'},
    {name: 'XEUS', link: 'https://www.xsky.com/product-xeus/'},
    {name: 'XDEP', link: 'https://www.xsky.com/product-xedp/'},
    {name: 'XEOS', link: 'https://www.xsky.com/product-xeos/'},
    {name: 'XE2000', link: 'https://www.xsky.com/product-xe2000/'},
]
const contactList = [
    {name: '北京Office', detial: '北京市海淀区蓝靛厂路金源时代商务中心B区写字楼802-806'},
    {name: '深圳Office', detial: '广东省深圳市南山区高新南六道航盛科技大厦20层20A室'},
]

export default function Footer() {
    const classes = useStyle();
    return (
        <React.Fragment>
            <Container className={classes['container']}>
                <div className={classes["footer--border"]}></div>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            关于我们
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                            星辰天合（北京）数据科技有限公司（XSKY）是专注于软件定义基础架构（Software Defined Infrastructure） 业务的高新技术企业
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            我们的产品
                        </Typography>
                        {productList.slice(0, productList.length / 4 + 1).map((item, index) => (
                            <List key={item.name + index} className={classes['list']}>
                                {productList.slice(index * 4, (index + 1) * 4).map(item => (
                                    <Link variant="caption" key={item.name} href={item.link} color='inherit'>{item.name}</Link>
                                ))}
                            </List>
                        ))}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle2" gutterBottom>
                            联系我们
                        </Typography>
                        {contactList.slice(0, contactList.length / 4 + 1).map((item, index) => (
                            <List key={item.name + index} className={classes['list']}>
                                {contactList.slice(index * 4, (index + 1) * 4).map(item => (
                                    <Typography variant="caption" gutterBottom key={item.name}>{item.name}：{item.detial}</Typography>
                                ))}
                            </List>
                        ))}
                    </Grid>
                </Grid>
            </Container>
            <div className={classes["sub--footer"]}>
                <Container className={classes['container']}>
                    <IconButton>
                        <Link href="https://www.xsky.com/" target="_blank">
                            <img alt="" src="/images/logo.png" className={classes.logo} />
                        </Link>
                    </IconButton>
                    <Typography variant="body1" gutterBottom>
                        <List className={classes['list']}>
                            <Typography variant="caption" gutterBottom>{'2019 XSKY Inc. All Rights Reserved.'}</Typography>
                            <Typography variant="caption" gutterBottom>{'京ICP备xxxxxxxx号'}</Typography>
                        </List>
                    </Typography>
                </Container>
            </div>
        </React.Fragment>
    )
}