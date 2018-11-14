import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme: Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    }
});
interface IProps extends WithStyles<typeof styles> {
  handleClick:(btnName:string)=>void
  auth: boolean
}
class ButtonAppBar extends React.Component<IProps,any> {
  render(){
    const { classes, auth } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} >
              News
            </Typography>
            <Button color="inherit" onClick={()=>this.props.handleClick('Home')}>Home</Button>
            {
              auth && 
              <Button color="inherit" onClick={()=>this.props.handleClick('Page1')}>Page 1</Button> 
            }
            {
              auth && 
              <Button color="inherit" onClick={()=>this.props.handleClick('Page2')}>Page 2</Button>
            }
            {
              !auth && 
            <Button color="inherit" onClick={()=>this.props.handleClick('Login')}>Login</Button>
            }
            {
              auth &&
              <Button color="inherit" onClick={()=>this.props.handleClick('Login')}>Logout</Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBar);