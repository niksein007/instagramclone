import React from 'react';
import './sharePlane.css';

const SharePlane = (props) => {
	return (
		<div className="share">
			<div />
			<h4>Share</h4>
			<hr />
			<p>
				<i className="far fa-paper-plane" />Share to Direct
			</p>
			<p> <i className="fab fa-facebook-square" />Share to Facebook</p>
			<p> <i className="fab fa-facebook-messenger" />Share to Messenger</p>
			<p> <i className="fab fa-whatsapp-square" />Share to WhatsApp</p>
			<p> <i className="fab fa-twitter" />Share to Twitter</p>
			<p> <i className="fas fa-envelope-square" />Share via Email</p>
			<p> <i className="fas fa-link" />Copy Link</p>
			<button onClick={props.showShareHandle}>Cancel</button>
		</div>
	);
};

export default SharePlane;
