import React from 'react'
import './cardLogos.css'

 const CardLogos = (props) => {

	return (
		<div className="logos">
				<span>
					<i className="far fa-heart"  />

					<i className="far fa-comment fa-rotate-270" />

					 <i className="far fa-paper-plane" ></i>  
				</span>
                <span className="slidesContainer">{props.slides}</span>
				<span>
					<i className="far fa-bookmark	" />
				</span>
			</div>
	)
}

export default CardLogos