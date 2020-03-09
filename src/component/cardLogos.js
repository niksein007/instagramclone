import React from 'react';
import './cardLogos.css';

import SharePlane from './sharePlane';

class CardLogos extends React.Component {
	state = {
		heart: false,
		bookmark: false,
		showShare: false
	};

	heartHandle = () => {
		this.state.heart === false
			? this.setState({
					heart: true
				})
			: this.setState({
					heart: false
				});
	};
	bookmarkHandle = () => {
		this.state.bookmark === false
			? this.setState({
					bookmark: true
				})
			: this.setState({
					bookmark: false
				});
	};
	showShareHandle = () => {
		this.state.showShare === false?
		this.setState({
			showShare:true
		})
		:
		this.setState({
			showShare:false
		});
	};
	

	render() {
		console.log(this.state.showShare);
		return (
			<div>
			<div className= {this.state.showShare?"hide":"logos"}>
				<span>
					<i
						onClick={this.heartHandle}
						className={this.state.heart ? 'fas fa-heart ' : 'far fa-heart '}
						id={this.state.heart ? 'heart' : ''}
					/>

					<i className="far fa-comment fa-rotate-270" />

					<i onClick={this.showShareHandle} className="far fa-paper-plane">
						
					</i>
				</span>
				<span className="slidesContainer">{this.props.slides}</span>
				<span>
					<i
						onClick={this.bookmarkHandle}
						className={this.state.bookmark ? 'fas fa-bookmark' : 'far fa-bookmark'}
					>
						{' '}
					</i>
				</span>

			</div>
			{this.state.showShare &&<SharePlane showShareHandle={this.showShareHandle}/>}

			</div>
		);
	}
}

export default CardLogos;
