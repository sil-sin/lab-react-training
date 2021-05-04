import React from 'react';

const BoxColor = ({ r, g, b }) => {

    return (
        <div className="card red" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <p className='red'>
                RGB({r},{g},{b})
            </p>
        </div>
    )
}

export default BoxColor;