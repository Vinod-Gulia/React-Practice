import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import State_BindMethod from './State_BindMethod';
import SuperClass from './SuperClass'

class Left_Pane extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={6}>
                    <Paper style={{padding: '50px'}}>
                      <State_BindMethod />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{padding: '50px'}}>
                      <SuperClass />
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Left_Pane;