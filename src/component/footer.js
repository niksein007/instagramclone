import React from 'react'
import './footer.css';

export default function Footer(props) {
    return (
        <div>
            <nav className="footer">
                    <img src={props.icon} alt=""></img>
            </nav>
        </div>
    )
}
 