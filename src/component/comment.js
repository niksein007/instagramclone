import React from 'react';
import './comment.css';

const Comment = (props) => {
	return (
		<div>
        {props.index > 1?
            <div className="comment">
				<div >
					<span className="profileName">{props.profileName}</span>
					{props.comment}
				</div>

				<div>
					<i className="far fa-heart " />
				</div>
        
		</div>
		:""
		}
        </div>
        
	);
};

export default Comment;
