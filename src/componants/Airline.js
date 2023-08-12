import React from 'react'
import '../style/Airline.css'
import 'semantic-ui-css/semantic.min.css'

function Airline(props) {
    return (
        <div className='airlines-container'>
            <div className='airline-details'>{props.name}</div>
            <div className='airline-details'>{props.departure}</div>
            <div className='airline-details'>{props.distance}</div>
            <div className='airline-details'>{props.stopage}</div>
            <div className='airline-details'>{props.arrival}</div>
            <div className='airline-details'>{props.price}</div>
        </div>
    )
}

export default Airline