import React, { Component, Fragment } from 'react';
import { Typography } from '@material-ui/core';

class State_BindMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome Visitor',
            buttonText: 'Subscribe',
            subscribeCount:0,
            unsubscribeCount:0
        }
        this.changeMessageOnSubscribing = this.changeMessageOnSubscribing.bind(this)
        this.resetSubscribes = this.resetSubscribes.bind(this)
    }
    changeMessageOnSubscribing() {
        if (this.state.buttonText=='Subscribe') {
            this.setState({
                message:'Thank you for subscribing',
                buttonText: 'Unsubscribe',
                subscribeCount: this.state.subscribeCount + 1
            })
        }else{
            this.setState({
                message:'You have unsubscribed',
                buttonText: 'Subscribe',
                unsubscribeCount: this.state.unsubscribeCount + 1
            })
        }  
    }

    resetSubscribes(){
        this.setState({
            message: 'Welcome Visitor',
            subscribeCount:0,
            unsubscribeCount :0
        })
    }

    render() {
        return (
            <Fragment>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessageOnSubscribing}>{this.state.buttonText}</button>
                <Typography variant="subtitle1" gutterBottom>You have subscribed for {this.state.subscribeCount} times</Typography>
                <Typography variant="subtitle1" gutterBottom>You have unsubscribed for {this.state.unsubscribeCount} times</Typography>
                <button onClick={this.resetSubscribes}>Reset subscription data</button>          
            </Fragment>
        );
    }
}

export default State_BindMethod;