import React from 'react'
import './stories.css'

const Stories = (props) => {
    return (
        <div className="stories">
         
       
        {props.index === 0 ? <span id="mainSpan"><img src ={props.profilePic} alt="pic" id="user"/> <span id="addSign">+</span></span> 
        : <img src ={props.profilePic} alt="pic"/>}
        <p>{props.profileName}</p>
            
        </div>
    )
}

export default Stories
