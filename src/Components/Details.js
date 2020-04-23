
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Profile from '../Images/download.png'
import Container from '@material-ui/core/Container';
import Clock from './Clock';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


import FlightIcon from '@material-ui/icons/Flight';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60%'
  },
  paper: {
    margin: theme.spacing(2, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));
function scrollToView(Id){
  document.getElementById(Id).scrollIntoView({ behavior: 'smooth', block: 'center' });
}
export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid direction="row" container>
      <Grid item sm={12} md={4} style={{ width: '100%' }}>
        <Grid item md={12} className={classes.image}>
          <Toolbar id="back-to-top-anchor" />
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6" align="center" color="textSecondary" paragraph gutterBottom>
            Harshit Shrivastava
            </Typography>
          <Typography variant="subtitle2" align="center" color="textSecondary" paragraph gutterBottom>
            Software Engineer @ LeadSquared
            </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
              <Link href="https://github.com/harshit6969" color="inherit"><GitHubIcon /></Link>
              </Grid>
              <Grid item>
              <Link href="https://twitter.com/Harshit39483516" color="inherit"><TwitterIcon /></Link>
              </Grid>
              <Grid item>
              <Link href="https://www.linkedin.com/in/harshit-shrivastava-706347148/" color="inherit"><LinkedinIcon /></Link>
              </Grid>
            </Grid>
          </div>

        </Grid>
      </Grid>
      <Grid item sm={12} md={8} square>
        <Tabs
          indicatorColor="primary"
          textColor="secondary"
          // onChange={handleChange}
          aria-label="disabled tabs example"
          variant="fullWidth"
        >
          <Tab label="Work Experience" icon={<WorkIcon />} onClick={() => scrollToView("Experience")}/>
          <Tab label="Education" icon={<SchoolIcon />} onClick={() => scrollToView("Education")}/>
          <Tab label="Projects" icon={<GitHubIcon/>} onClick={() => scrollToView("Projects")}/>
        </Tabs>
        <div className={classes.paper}>
            <Clock />
          <Typography variant="div" color="textSecondary" paragraph gutterBottom>
              Full stack developer with 2 years of experience in building scalable applications.
            </Typography>
          <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
            <Grid item>
              <List subheader={<Typography component="h6" variant="h6" gutterBottom>
                UI skills
                  </Typography>} component="nav" aria-label="main mailbox folders">
                <ListItem >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="JavaScript" />
                </ListItem>
                <Divider />
                <ListItem >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="jQuery" />
                </ListItem>
                <Divider />
                <ListItem >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="React" />
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <List subheader={<Typography component="h6" variant="h6" gutterBottom>
                Languages
                  </Typography>} component="nav" aria-label="main mailbox folders">
                <ListItem >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="Node.js" />
                </ListItem>
                <Divider />
                <ListItem >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="Python" />
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <List subheader={<Typography component="h6" variant="h6" gutterBottom>
                Technical Skills
                  </Typography>} component="nav" aria-label="main mailbox folders">
                <ListItem >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="AWS" />
                </ListItem>
                <Divider />
                <ListItem >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="Serverless" />
                </ListItem>
                <Divider />

                <ListItem >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="Microservices" />
                </ListItem>
                <Divider />
                <ListItem >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="Web development" />
                </ListItem>
              </List>

            </Grid>

          </Grid>
          <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ paddingTop: '10px', paddingBottom: '20px' }}>
        <Grid item sm={12}>
            <Typography component="h5" variant="h5" align="center" gutterBottom>
                <b>Interests</b>
            </Typography>
        </Grid>
        <Grid item>
            <FlightIcon fontSize="large" />
            <Typography component="h6" variant="h6" gutterBottom>
                Traveling
    </Typography>
        </Grid>
        <Grid item>
            <MenuBookIcon fontSize="large" />
            <Typography component="h6" variant="h6" align="center" gutterBottom>
                Reading
    </Typography>
        </Grid>
        <Grid item>
            <SportsSoccerIcon fontSize="large" />
            <Typography component="h6" variant="h6" align="center" gutterBottom>
                Football
    </Typography>
        </Grid>
        <Grid item>
            <SportsCricketIcon fontSize="large" />
            <Typography component="h6" variant="h6" align="center" gutterBottom>
                Cricket
    </Typography>
        </Grid>
        <Grid item>
            <SportsTennisIcon fontSize="large" />
            <Typography component="h6" variant="h6" align="center" gutterBottom>
                Table tennis
    </Typography>
        </Grid>
    </Grid>
        </div>
      </Grid>
    </Grid>
  );
}