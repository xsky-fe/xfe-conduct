import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import lodash from 'lodash';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import { BaseButton, smothScroll, Container, feedSort, Card, CardDrawer, validation, fetchApi } from '../../../utils';

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
    const [open, setOpen] = React.useState(false);
    const [conducts, setConducts] = React.useState({})
    const [links, setLinks] = React.useState({})
    const [formData, setFormData] = React.useState({
        name: '',
        title: '',
        intro: '',
        link: '',
    });
    lodash.forEach(conducts, (value, key) => {
        feedArray.push({
            item: key,
            len: links[key].expanded !== false ? value.length <=0 ? 3 : value.length <= 3 ? 12 : value.length * 2 + 12 : 1, // 初始状态相当于留行，多余四行之后才
        })
    });
    const { left, right } = feedSort(feedArray);

    function handleChange(label, e) {
        setFormData(Object.assign(formData, {[label]: e.target ? e.target.value : e}))
    }

    useEffect(() => {
        fetchInitData()
    },[])

    function fetchInitData() {
        fetchApi('/links', {}, {}).then(res=>{
            setLinks(JSON.parse(res.content));
        }).then(()=>{
            fetchApi('/conducts', {}, {}).then(res=>{
                setConducts(JSON.parse(res.content));
            })
        })
    }

    function handleSubmit(type, validationType) {
        console.log(type, validationType, formData)
        if(validation(validationType, formData)[0]){
            fetchApi(`/${type}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                cache: 'no-cache',
            }, {formData}).then(()=>{
                fetchInitData()
                setOpen(false);
            })
        } else {
            console.log(validation(validationType, formData))
        }
    }    
    function renderDialog(){
        return(
            <React.Fragment>
                <Card
                    image="/images/logo.png"
                    detail={
                        <Button>添加访问卡片</Button>
                    }
                    type="row"
                    onClick={() => setOpen(true)}
                />
                <Dialog open={open} onClose={() => setOpen(true)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">添加访问卡片</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        需要选择上传卡片的名称、介绍以及网址
                    </DialogContentText>
                    <FormControl fullWidth className={classes.form}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="名称"
                            onChange={handleChange.bind(null, 'title')}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="detail"
                            label="介绍"
                            onChange={handleChange.bind(null, 'detail')}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="link"
                            label="网址"
                            onChange={handleChange.bind(null, 'link')}                    
                            fullWidth
                        />
                    </FormControl>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        取消
                    </Button>
                    <Button onClick={handleSubmit.bind(null, 'add_links','CardForm')} color="primary">
                        提交审核
                    </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
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
                    <Grid item sm={6} xs={12} className={classes['conduct-item']} key={'left'+index}>
                        {left[index] ? <CardDrawer 
                            index={index} 
                            contents={conducts} 
                            item = {links[left[index].item]}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            /> : renderDialog()}
                    </Grid>
                ))}
                {right.map((_, index) => (
                    <Grid item sm={6} xs={12} className={classes['conduct-item']} key={'right'+index} >
                        {right[index] ? <CardDrawer 
                            index={index} 
                            contents={conducts} 
                            item = {links[right[index].item]} 
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            /> : renderDialog()}
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}