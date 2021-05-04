import React from 'react';

const Random = (props) => {
    let result = 0;
    let max = props.max;
    let min = props.min;
    result = Math.floor(Math.random() * max) + min;
    return (
        <div className="box">
            <p>
                Random value between {props.min} and {props.max} =&gt; {result}
            </p>
        </div>
    )
}

export default Random;