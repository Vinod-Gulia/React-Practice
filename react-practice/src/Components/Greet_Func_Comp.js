import React, {Fragment} from 'react';

const Greet_Func_Comp = (props) => {
    return (
        <Fragment>
            <h1>Hello {props.name} from functional component</h1>
            {props.children}
        </Fragment>      
    )
}

export default Greet_Func_Comp