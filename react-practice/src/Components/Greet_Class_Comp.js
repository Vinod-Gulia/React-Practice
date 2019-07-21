import React, { Component, Fragment } from 'react';

class Greet_Class_Comp extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello {this.props.name} from class component</h1>
                {this.props.children}
            </Fragment>
        );
    }
}

export default Greet_Class_Comp;
