import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { smothScroll } from '../../utils';

const StyledTabs = withStyles({
  root:{
    padding: '0 100px',
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

export default function HeaderNav() {
    const [value, setValue] = React.useState(1);
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return(
        <div>
            <StyledTabs value={value} onChange={handleChange}>
              <StyledTab icon={
                <Link href="https://www.xsky.com/" target="_blank">
                  <img alt="" src="/images/logo.png" />
                </Link>
                } />
              <StyledTab label="首页" component='a' href='#home' onClick={e => smothScroll(e, 'home')} />
              <StyledTab label="导航" component='a' href='#conduct' onClick={e => smothScroll(e, 'conduct')} />
              <StyledTab label="博客" component='a' href='http://xfe.blog.com' />
            </StyledTabs>
        </div>
    )
}