import React from 'react'
import './cardHead.css'

 const CardHead = (props) => {
    return (
        <div className="head">
        <div >
            <img className="profilePic" src={props.profilePic} alt="" />
            
            <span className="profileName">{props.profileName}</span>
        </div>
        <div className="stuff">...</div>
    </div>
    )
}

export default CardHead