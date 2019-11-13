import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import FastForward from '@material-ui/icons/FastForward';

const useStyles = makeStyles(theme => ({
    buttonRow: {
       textAlign: 'center',
       marginBottom: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 200,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
}));


const FormEntry = (props) => {
    const handleSave = props.handleSave;
    const handleGo = props.handleGo;
    console.log(handleSave);
    const classes = useStyles();
    return(
        <Paper>
            <FormControl className="container" autoComplete="off">
                <div id="number-entry">
                    <TextField
                        id="rounds"
                        label="Rounds"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        className={classes.textField}
                        InputProps={{ inputProps: { min: 1, } }}
                    />
                    <TextField
                        id="work-time"
                        label="Work Time"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        className={classes.textField}
                        InputProps={{ inputProps: { min: 10, step: 5 } }}
                    />
                    <TextField
                        id="rest-time"
                        label="Rest Time"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        className={classes.textField}
                        InputProps={{ inputProps: { min: 5, step: 5 } }}
                    />
                </div>
                <div className={classes.buttonRow}>
                    <Button variant="contained" className={classes.button} color="primary" size="large" onClick={handleSave}>
                        <SaveIcon className={classes.extendedIcon} />
                        Save
                    </Button>
                    <Button variant="contained" className={classes.button} color="secondary" size="large" onClick={handleGo}>
                        <FastForward className={classes.extendedIcon} />
                        Go!
                    </Button>
                </div>
            </FormControl>
        </Paper>
    );
}

export default FormEntry;