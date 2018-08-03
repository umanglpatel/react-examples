import React from 'react';

const withClass = (props) => {
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    )
}

const usingClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}

export default withClass;
export { usingClass };

