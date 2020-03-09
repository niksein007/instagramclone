import React from 'react';
import './navbar.css'


export default function NavBar(props) {
    return (

        <div className="navbar">

            <img className="camera" src={props.camera} alt="camera" />
            <img className="insta" src={props.insta} alt="insta" />
            <img className="arrow" src={props.arrowIcon} alt="arrowicon" />

        </div>

    )
}
