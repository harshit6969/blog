import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import WorkIcon from '@material-ui/icons/Work';


export default function History() {
  return (
    <Grid direction="row" container>
      <Grid item sm={12} md={6} id="Experience" style={{ height: '100%' }}>
          <CardHeader avatar={<WorkIcon />} title={<Typography component="h5" variant="h5" gutterBottom>
            <b>Employment History</b>
          </Typography>}></CardHeader>
          <CardContent>
            <Typography variant="h6" component="h6">
              Software Engineer at LeadSquared, Bengaluru
        </Typography>
            <Typography style={{ marginBottom: '10' }} color="textSecondary">
              Jun, 2018 - Present
        </Typography>
            <ul>
              <li>
                Managing a lead management micro-service syncing leads in real time with third party providers.
          </li>
              <li>
                Managing a ticket management micro-service integrating LeadSquared with third party ticketing systems.
          </li>
              <li>
                Developed customer portals used by businesses to capture leads.</li>
            </ul>
          </CardContent>
      </Grid>
      <Grid item sm={12} md={6} id="Education" style={{ height: '100%' }}>
          <CardHeader avatar={<SchoolIcon />} title={<Typography component="h5" variant="h5" gutterBottom>
            <b>Education</b>
          </Typography>}></CardHeader>
          <CardContent>
            <Typography variant="h6" component="h6">
              B.Tech(Computer Science),<br />
            SRM Institute Of Science & Technology, Chennai
        </Typography>
            <Typography style={{ marginBottom: '10' }} color="textSecondary">
              Jun, 2014 - Apr, 2018
        </Typography>
            <ul>
              <li>CGPA: 8.6</li>
            </ul>
          </CardContent>
          <CardContent>
            <Typography variant="h6" component="h6">
              City Montessori School, Lucknow
        </Typography>
            <Typography style={{ marginBottom: '10' }} color="textSecondary">
              May, 2009 - Mar, 2014
        </Typography>
            <ul>
              <li>HSC - 91.75%</li>
              <li>SSC - 89.8%</li>
            </ul>
          </CardContent>
      </Grid>
    </Grid>
  );
}