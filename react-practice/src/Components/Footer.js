import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = (props) => {
    return (
        <Fragment>
            <AppBar position="static">
                <Tabs value={0}>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
        </Fragment>
    );
}

export default Footer