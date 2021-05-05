import React from 'react'

const Ratings = (props) => {
    let rating = Math.round(props.children);
    let rate = '';

    for (let i = 0; i < 5; i++) {
        rate += (rating <= i ? '☆' : '★')
    }

    return (
        <div >
            <h2>{rate}</h2>
        </div>
    )
}



export default Ratings;