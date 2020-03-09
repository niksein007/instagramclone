import React from 'react';
import './mainCard.css';
import CardHead from './cardHead';
import CardLogos from './cardLogos';
import CardDescription from './cardDescription';

class MainCard extends React.Component {
	state = {
		count: 0
	};
	next = () => {
		this.setState({
			count: this.state.count + 1,
			toggle: true
		});
	};

	prev = () => {
		this.setState({
			count: this.state.count - 1
		});
	};

	render() {
		const uploadPics = this.props.uploadPic.map((upload, index) => {
			return <img key={index} src={upload} alt="" />;
		});
		const slides = this.props.uploadPic.map((slide, index) => {
			return <span key={index} index={index} className={index === this.state.count ? 'slide' : 'active'} />;
		});

		// const check =()=>{
		//     this.state.count > (uploadPics.length -1) ?" 009":"hhhy"
		// }

		// console.log(this.state.count);
		// console.log(slides.index);
		return (
			<div className="mainCard">
				<CardHead profilePic={this.props.profilePic} profileName={this.props.profileName} />
				{/*  creating a slide show or carousel */}
				<div className="mainPost">
					<p className="count">
						{' '}
						<span>{this.state.count + 1} </span>/{uploadPics.length}
					</p>
					<div className="mainImg">{uploadPics[this.state.count]}</div>

					<span className={this.state.count === 0 ? 'toggle' : 'prev'} onClick={this.prev}>
						{' '}
						&#10094;
					</span>
					<span
						className={this.state.count === uploadPics.length - 1 ? 'toggle' : 'next'}
						onClick={this.next}
					>
						&#10095;
					</span>
				</div>

				<CardLogos slides={slides} />
				<CardDescription
					profileName={this.props.profileName}
					likes={this.props.likes}
					caption={this.props.caption}
					comments={this.props.comments}
					commentTime={this.props.commentTime}
				/>
			</div>
		);
	}
}

export default MainCard;
