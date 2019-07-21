import React, { Fragment } from 'react'

function SubClass(props) {
    console.log(props);
    return (
        <Fragment>
            <button onClick={() => props.clickHandler('Sub Class')}>Click Me!!!</button>
        </Fragment>
    )
}

export default SubClass
