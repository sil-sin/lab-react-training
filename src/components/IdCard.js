import React from 'react';
import './IdCard.css'

const IdCard = (props) => {
    return (
        <div className='card' >
            <img src={props.picture} alt={props.firstName} />
            <div className='info'><p>
                <strong>First Name: </strong> {props.firstName}
            </p>
                <p>
                    <strong>Last Name: </strong> {props.lastName}
                </p>
                <p>
                    <strong>Gender: </strong> {props.gender}
                </p>
                <p>
                    <strong>Height: </strong> {props.height}
                </p>
                <p>
                    <strong>Birth: </strong>
                    {props.birth.getMonth() + 1 + '/' + props.birth.getDate() + '/' + props.birth.getFullYear()}
                </p></div>

        </div >
    )
}

export default IdCard;