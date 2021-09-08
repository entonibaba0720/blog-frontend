import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AuthService from '../services/auth.service';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  let history = useHistory();
  const logOut = () => {
    AuthService.logout();
    history.push("");
    window.location.reload();
   
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Blog
          </Typography>
          <Button color="inherit" onClick={logOut}>Kilépés</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}