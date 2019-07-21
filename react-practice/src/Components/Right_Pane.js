import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GreetF from './Greet_Func_Comp';
import GreetC from './Greet_Class_Comp';
import { display } from '@material-ui/system';

class Right_Pane extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={6}>
                    <Paper style={{padding: '20px', textAlign: 'left'}}>
                        <GreetF name = "Avi">
                            <table>
                                <tr>
                                    <th>Desc</th>
                                    <th>Pic</th>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            I'm Avi Gulia. I study in Maxfort school, Dwarka. I'm seven years old.
                                        </p>
                                    </td>
                                    <td>
                                        <img src='../Resources/Images/Avi.jpg' alt = 'Avi Picture' display='inline-block' width='100px' height='100px' />
                                    </td>
                                </tr>
                            </table>                     
                        </GreetF>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{padding: '20px', textAlign: 'left'}}>
                        <GreetC name = "Tishu">
                            <table>
                                <tr>
                                    <th>Desc</th>
                                    <th>Pic</th>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                        I'm Tanisha Gulia. I study in AVE MARIA school, Dwarka. I'm three years old.
                                        </p>
                                    </td>
                                    <td>
                                        <img src='../Resources/Images/Tishu.jpg' alt = 'Tanisha Picture' style={{display:'inline-block',width:'100px', height:'100px'}} />
                                    </td>
                                </tr>
                            </table> 
                        </GreetC>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Right_Pane;