import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const ClockDisplay = (props) => {
    // const default = props.default;
    console.log(props);
    return(
        <Paper>
            <Typography variant="h1" component="h1" gutterBottom id="clock-display">
                Clock Here
            </Typography>
        </Paper>
    );
}

export default ClockDisplay;