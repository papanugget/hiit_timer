import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormEntry from './FormEntry';

const ClockDisplay = (props) => {
    // const default = props.default;
    return(
        <Grid spacing={3}>
            <Grid item xs={12}>
                <Paper>
                    <Typography variant="h1" component="h1" gutterBottom>
                        Clock Here
                    </Typography>
                </Paper>
                <FormEntry/>
            </Grid>
        </Grid>
    );
}

export default ClockDisplay;