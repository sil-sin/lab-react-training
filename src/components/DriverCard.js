import React from 'react'
import Ratings from './Ratings'
import './DriverCard.css'
export default function DriverCard({ name, rating, img, car }) {
    return (
        <div className='driverCard'>
            <div >
                <img className="driverImg" src={img} alt={name} />
            </div>
            <div >
                {name}
                <Ratings >{rating}</Ratings>
                {car.model} - {car.licensePlate}
            </div>
        </div>
    )
}
