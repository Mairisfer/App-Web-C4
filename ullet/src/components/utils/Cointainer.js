import React from 'react';

function Container(props) {
    const { children, padding, maxWidth } = props

    return (
        <div clssName='container' style={{ paddingLeft: padding, paddingRight: padding, maxWidth }}>
            {children}
        </div>
    );
}

export default Container;