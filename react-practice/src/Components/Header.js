import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
    return (
        <Fragment>
            <AppBar position="static">
               <Typography variant='heading'>Exercise Database</Typography> 
            </AppBar>
        </Fragment>
    );
}

export default Header