import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import PersonalDetails from './Components/Details'
import History from './Components/History'
import ProjectWork from './Components/Projects'
import Interests from './Components/Interests'
import logo from './logo.svg';
import './App.css';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = document.querySelector('#back-to-top-anchor');
    console.log(anchor);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}


export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <PersonalDetails />
      <History />
      <ProjectWork />
      {/* <Typography variant="body2" color="textSecondary" align="center">
        Made with <>❤</> with <img src={logo} className="App-logo" alt="logo" />
    </Typography> */}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
