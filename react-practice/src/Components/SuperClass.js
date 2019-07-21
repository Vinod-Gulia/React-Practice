import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SubClass from './SubClass'

class SuperClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          superClassName: 'Super Class'   
        }

        this.greetMethod = this.greetMethod.bind(this)
        
    }

    greetMethod(subClassName) {     
        alert(`${subClassName} has called Greet Method of ${this.state.superClassName}`)
    }

    render() {
           
        return (
            <Fragment>
               <SubClass clickHandler={this.greetMethod}/> 
            </Fragment>
        )
    }
}

export default SuperClass
