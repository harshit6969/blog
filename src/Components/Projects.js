import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';


export default function Projects() {
    return (
        <Grid direction="row" container id="Projects">
            <Grid item sm={12} >
                    <CardHeader title={<Typography component="h5" variant="h5" align="center" gutterBottom>
                        <GitHubIcon /> <b>Projects</b>
                    </Typography>}></CardHeader>
                    <Grid container direction="row">
                        <Grid item sm={12} md={6}>
                            <CardContent>

                                <Typography variant="h6" component="h6">
                                    Visualizer
</Typography>
                                <Typography style={{ marginBottom: '10' }} color="textSecondary">
                                    A visual representation of searching and sorting algorithms.
</Typography>

                            </CardContent>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <CardContent>

                                <Typography variant="h6" component="h6">
                                Cloudwatch Handler
</Typography>
                                <Typography style={{ marginBottom: '10' }} color="textSecondary">
                                   Retrieve logs from AWS Cloudwatch applying custom filters.
</Typography>

                            </CardContent>
                        </Grid>
                    </Grid>

            </Grid>
        </Grid>
    );
}