import React from 'react'
import './footer.css';

export default function Footer(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li><img src={props.icon} alt=""></img></li>
                </ul>
            </nav>
        </div>
    )
}
 