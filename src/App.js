import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './component/navBar.js';
import camera from './images/camera.png';
import arrow from './images/arrowicon.png';
import insta from './images/insta.png';



import './App.css';
import Footer from './component/footer';
import home from './img/home.jpeg';
import search from './img/search.png';
import upload from './img/upload.png';
import like from './img/like.png';
import profile from './img/profile.png';

import Stories from './component/stories';
import mark from './images/stories/mark.jpg';
import abigail from './images/stories/abigail.jpg';
import gemma from './images/stories/gemma.jpg';
import jake from './images/stories/jake.jpg';
import katy from './images/stories/katy.jpg';
import leona from './images/stories/leona.jpg';
import princess from './images/stories/princess.jpg';
import MainCard from './component/mainCard';
//main pictures
import beach from './images/mainCard/beach.jpg';
import dawn from './images/mainCard/dawn.jpg';
import forest from './images/mainCard/forest.jpg';
import frog from './images/mainCard/frog.jpg';
import santa from './images/mainCard/santa.jpg';
import space from './images/mainCard/space.jpg';
import water from './images/mainCard/water.jpg';
//logos 

class App extends React.Component {
	//constructor(props){
	//super(props)
	state = {
    Footer:[
    {icon:home}, 
    {icon:search},
    {icon:upload},
    {icon:like},
    {icon:profile}

  ],
		upload: [
			{
				profilePic: mark,
				profileName: 'niktop77',
				uploadPic: [ beach, santa, frog ],
				//likes to contain an array of names
				likes: [ 'alex', 'james', 'lora', 'owen' ],
				caption: 'This is a fantastic beach',
				comments: [
					{profileName:"nauty001",
						comment:'this is a wonderful'},
					{profileName:"niktop007",
						comment:'cant wait for summer'},
					{profileName:"edduie-muf",
						comment:'yeahh rocking it in my bikinis'},
					{profileName:"jack-shit",
						comment:'wonderful......'}
				],
				commentTime: '1hr'
			},

			{
				profilePic: abigail,
				profileName: 'abi007',
				uploadPic: [ dawn ],
				//likes to contain an array of names
				likes: [ 'baldwin', 'jordan', 'princess', 'lora', 'owen' ],
				caption: 'Good morning alll',
				comments: [ 
					{profileName:"hulusius",
						comment:'moring tooo.'}, 
				{profileName:"niktop007",
					comment:'not wakiing up now'}, 
				{profileName:"lovenest",
					comment:'lovely setting'}, 
				{profileName:"abi001",
				comment:'this is a wonderful'} ],

				commentTime: '8hrs'
			},
			{
				profilePic: gemma,
				profileName: 'lovenest',
				uploadPic: [ forest ],
				//likes to contain an array of names
				likes: [ 'rebecca', 'leona', 'james', 'lora', 'michael' ],
				caption: 'Nature is beautiful',
				comments: [
					{profileName:"debs23",
						comment:'really tall trees'},
					{profileName:"laylai",
						comment:'love to go hiking in the forest'},
					{profileName:"superman",
						comment:'be carefull of creepy crawlies'},
					{profileName:"davis123",
						comment:'hummmmm.......'},
					{profileName:"nauty-io0",
						comment:' wonderful animal'}
				],
				commentTime: '45mins'
			},
			{
				profilePic: jake,
				profileName: 'cool..dude',
				uploadPic: [ frog ],
				//likes to contain an array of names
				likes: [ 'dan', 'baz', 'koser', 'lora', 'rachael' ],
				caption: 'frogs are wonderfull creatures',
				comments: [
					{profileName:"asleyay",
						comment:'i have some in my backyard'},
					{profileName:"debie34d",
						comment:' some are poisinous'},
					{profileName:"nosy878",
						comment:'stay away from bright colored frogs'},
					{profileName:"eddie--muf",
						comment:' wonderful animal'},
					{profileName:"ray009",
						comment:' wonderful animal'},
					{profileName:"debbieee",
						comment:' wonderful animal'}
				],

				commentTime: '30mins'
			},
			{
				profilePic: [ katy ],
				profileName: 'sexy-baby01',
				uploadPic: [ santa ],
				//likes to contain an array of names
				likes: [ 'imran', 'sasy', 'tobi', 'lora', 'joyce' ],
				caption: 'merry chrismass everyone',
				comments: [
					{profileName:"santama",
						comment:'jingle bells'},
					{profileName:"sexynadia99",
						comment:'santa is coming'},
					{profileName:"grandauls",
						comment:'hope my good deeds are remembered'},
					{profileName:"holiday-Land",
						comment:'this is a wonderful'}
				],
				commentTime: '3hrs'
			},

			{
				profilePic: princess,
				profileName: "daddy's girl",
				uploadPic: [ water ],
				//likes to contain an array of names
				likes: [ 'larry', 'loveth', 'james', 'lora', 'gemma' ],
				caption: 'WATER is life amazing stuff',
				comments: [ 
				{profileName:"dick-hEAD",
					comment:'i like to dive'}, 
				{profileName:"deepn-ocean",
					comment:'lots of life in water'}, 
				{profileName:"swin12",
					comment:'this is a wonderful'}, 
				{profileName:"lovenest",
					comment:'great picture'} ],

				commentTime: '1hr'
			},

			{
				profilePic: leona,
				profileName: 'deepLove001',
				uploadPic: [ space ],
				//likes to contain an array of names
				likes: [ 'david', 'alex', 'theodeor', 'lora', 'owen' ],
				caption: 'Space is a lovely place',
				comments: [ 
					{profileName:"daddy's girl",
					comment:'i will like to live in space'},
				{profileName:"deepLove001",
					comment:'see you in mars'} ,
				 {profileName:"sexy-baby01",
					comment:'lovely picture'}, 
				 {profileName:"rick-ross",
					comment:'our future home'} ],

				commentTime: '2hrs'
			}
		]
	};
	//}

	render() {
    const footer = this.state.Footer.map ( (footer, index)=> {
      return <Footer icon={footer.icon} key={index} />
    })
		const stories = this.state.upload.map((story, index) => {
			return <Stories key={index} index={index} profilePic={story.profilePic} profileName={story.profileName} />;
		});

		const card = this.state.upload.map((upload, index) => {
			return (
				<MainCard
					key={index}
					profilePic={upload.profilePic}
					profileName={upload.profileName}
					uploadPic={upload.uploadPic}
					likes={upload.likes}
					caption={upload.caption}
					comments={upload.comments}
					commentTime={upload.commentTime}
				/>
			);
		});

		// console.log(card)
		return (
			<div className="App">
          <header>
        <NavBar
          camera={camera}
          arrowIcon={arrow}
          insta={insta} />

      </header>
				<div className="AppStories">{stories}</div>

				<div className="AppMainCard">{card}</div>
       {footer}
			</div>
		);
	}

}


export default App;
