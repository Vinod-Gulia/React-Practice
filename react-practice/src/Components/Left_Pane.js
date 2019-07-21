import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Left_Pane extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={6}>
                    <Paper style={{padding: '50px'}}>Left-Pane</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{padding: '50px'}}>Right-Pane</Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Left_Pane;