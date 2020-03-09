import React from 'react';
import './cardDescription.css';
import Comment from './comment';

class CardDescription extends React.Component {
	state = {
		show: false
	};
	showComments=()=>{
	    this.state.show ? this.setState({
	        show:false 
	    })
	    :this.setState({
	        show:true
	    })

	}

	render() {
		const allComments = this.props.comments.map((record, index) => {
			return (
				<Comment
					key={index}
					index={index}
					comment={record.comment}
					profileName={record.profileName}
					showComments={this.showComments}
				/>
			);
		});
		// console.log(this.state.show)
		return (
			<div className="description">
				<div className="likes">
					Liked by <span>person</span> and <span>others</span>
					>
				</div>

				<div className="caption">
					<span className="profileName">{this.props.profileName}</span> {this.props.caption}{' '}
					<span id="more">...more</span>
				</div>
				<div className="comments">
					<button onClick={this.showComments}>View all {allComments.length} comments</button>
                    <div className="firstComments">
					<div >
						{' '}
						<span className="name">{this.props.comments[0].profileName}</span>{' '}
						{this.props.comments[0].comment}
					</div>{' '}
					<div>
						<i className="far fa-heart " />
					</div>
                    </div>

                    <div className="firstComments">
					<div >
						<span className="name">{this.props.comments[1].profileName}</span>{' '}
						{this.props.comments[1].comment}
					</div>{' '}
					<div>
						<i className="far fa-heart " />
					</div>
                    </div>
				</div>
				{this.state.show &&allComments }
				<p className="commentTime">{this.props.commentTime}</p>
			</div>
		);
	}
}
export default CardDescription;
