import React, { Component } from 'react';

const withClass = (props) => {
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    )
}

// const usingClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

const usingClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className} >
                    <WrappedComponent {...this.props} />
                </div >
            )
        }
    }
}

export { usingClass };
export default withClass;

