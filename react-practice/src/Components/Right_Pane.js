import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GreetF from './Greet_Func_Comp';
import GreetC from './Greet_Class_Comp';

class Right_Pane extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={6}>
                    <Paper style={{padding: '20px', textAlign: 'left'}}>
                        <GreetF name = "Avi">
                            <p>
                            I'm Avi Gulia. I study in Maxfort school, Dwarka. I'm seven yesrs old.
                            </p>
                        </GreetF>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{padding: '20px', textAlign: 'right'}}>
                        <GreetC name = "Tishu">
                            <p>
                            I'm Tanisha Gulia. I study in AVE MARIA school, Dwarka. I'm three yesrs old.
                            </p>
                        </GreetC>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Right_Pane;