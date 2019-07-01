import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTabs = withStyles({
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

const useStyle = makeStyles({
    outer: {
        float: 'left',
    }
})
export default function HeaderNav() {
    const classes = useStyle();
    const [value, setValue] = React.useState(0);
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return(
        <div className={classes.outer}>
            <StyledTabs value={value} onChange={handleChange}>
                <StyledTab label="首页" />
                <StyledTab label="导航" />
                <StyledTab label="博客" />
            </StyledTabs>
        </div>
    )
}