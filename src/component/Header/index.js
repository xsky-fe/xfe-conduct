import React, { useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { smothScroll, Container } from '../../utils';

const StyledTabs = withStyles({
  root: {
    '& .MuiTabs-scroller .MuiTabs-flexContainer': {
      float: 'right',
      width: '100%',
      '& :first-child': {
        marginRight: 'auto',
      }
    }
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '120px',
    '& > div': {
      maxWidth: 30,
      width: '100%',
      backgroundColor: '#635e34',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

const useStyle = makeStyles(() => ({
  logo: {
    height: '1.25rem'
  },
  outer: {
    boxShadow: '0 0.1875rem 0.125rem #efefef'
  },
}))
const AdoperLink = React.forwardRef((props, ref) => <RouterLink to={props.to} innerRef={ref} {...props} />)

export default function HeaderNav(props) {
  const { history } = props.params;
  const [value, setValue] = React.useState(history.location.pathname);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [nav, setNav] = React.useState([]);
  history.listen(location => {
    setValue(location.pathname);
  })
  useEffect(() => {
    const ids = Array.prototype.slice.call(document.querySelectorAll('*[id]'));
    const navs = [];
    ids.map(id => {
      if (id.dataset.navname) {
        navs.push({ url: id.id, title: id.dataset.navname });
      }
    })
    setNav(navs)
  }, [value])
  function handleChange(event, newValue) {
    if (
      event.target.parentNode.href &&
      event.target.parentNode.href.split('#').length !== 2 &&
      event.target.parentNode.target !== "_blank"
    ) {
      setValue(newValue);
    }
  }
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(scroll, e) {
    setAnchorEl(null);
    if (e && typeof scroll === 'string' || scroll instanceof String) {
      console.log(scroll, e)
      smothScroll(e, scroll);
    }
  }

  const classes = useStyle()
  return (
    <Container className={classes.outer}>
      <Hidden only={['xs']}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab icon={
            <Link href="https://www.xsky.com/" target="_blank">
              <img className={classes.logo} alt="" src="/images/logo.png" />
            </Link>
          } />
          <StyledTab label="首页" component={AdoperLink} to='/' value='/' />
          {nav.map(i => (
            <StyledTab key={i.url} label={i.title} component='a' href={`/#${i.url}`} onClick={e => smothScroll(e, i.url)} />
          ))}
          <StyledTab label="探索" component={AdoperLink} to='/explore' value='/explore' />
          <StyledTab label="关于" component={AdoperLink} to='/about' value='/about' />
        </StyledTabs>
      </Hidden>
      <Hidden only={['xl', 'lg', 'md', 'sm']}>
        <Box display="flex" justifyContent='space-between'>
          <Button aria-controls="simple-menu" aria-haspopup="true" href="https://www.xsky.com/" target="_blank">
            <img alt="" src="/images/logo.png" className={classes.logo} />
          </Button>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Open Menu
          </Button>
        </Box>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={AdoperLink} to='/' onClick={handleClose}>首页</MenuItem>
          {nav.map(i => (
            <MenuItem key={i.url} component='a' href={`/#${i.url}`} onClick={handleClose.bind(null, i.url)}>{i.title}</MenuItem>
          ))}
          <MenuItem component={AdoperLink} to='/explore' onClick={handleClose}>探索</MenuItem>
          <MenuItem component={AdoperLink} to='/about' onClick={handleClose}>关于</MenuItem>
        </Menu>
      </Hidden>
    </Container>
  )
}