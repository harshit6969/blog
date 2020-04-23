import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import FlightIcon from '@material-ui/icons/Flight';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
export default function Interests() {
    return (<Grid container direction="row" justify="space-evenly" alignItems="center" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
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
    </Grid>)
};