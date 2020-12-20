import React from 'react';

const Progressbar = ({bgcolor, completed}) => {

    const containerStyles = {
        height: 7,
        width: '180px',
        backgroundColor: '#E7E7EB',
        borderRadius: 50,
        margin: 2
    }
    const fillesStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAling: 'right',
    }
    return (
        <div style={containerStyles}>
            <div style={fillesStyles}>
                <span></span>
            </div>
        </div>
    );
};

export default Progressbar;