import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { XskyButton } from '../../../utils';

const useStyles = makeStyles({
  outer: {
    textAlign: 'left',
    paddingTop: '25%',
  },
});
export default function HeaderIntro() {
    const classes = useStyles();
    return(
        <div className={classes.outer}>
             <Typography variant="h3" gutterBottom>
                Xsky前端团队
            </Typography>
            <Typography variant="body1" gutterBottom>
                星辰天合（北京）数据科技有限公司（XSKY）是专注于软件定义基础架构（Software Defined Infrastructure）
                业务的高新技术企业
            </Typography>
            <Typography variant="body1" gutterBottom>
                XSKY自成立以来注重科技创新，致力于以中国技术力量影响开放平台生态系统，创建自主可控的底层设施，以主流的、
                先进的技术和产品为客户创造价值，提供企业级分布式软件定义存储产品，帮助客户实现数据中心架构革新。
            </Typography>
            <ButtonGroup>
                <XskyButton href="https://www.xsky.com/career/?job=9-2#jobs" target="_blank">加入我们～</XskyButton>
            </ButtonGroup>
        </div>
    )
}