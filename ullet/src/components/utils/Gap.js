import React from 'react';

function Gap(props) {

    const{children, direction} = props

    switch (direction) {
        case "vertical":
            return(<div style={{height: children}}></div>)            
        default:
            return <div style={{ height: children }}></div>;  
    }
}

export default Gap;