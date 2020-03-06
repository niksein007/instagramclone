import React from 'react';
import './App.css';
import Stories from './component/stories'
import mark from './images/stories/mark.jpg'
import abigail from './images/stories/abigail.jpg'
import gemma from './images/stories/gemma.jpg'
import jake from './images/stories/jake.jpg'
import katy from './images/stories/katy.jpg'
import leona from './images/stories/leona.jpg'
import princess from './images/stories/princess.jpg'
import MainCard from './component/mainCard'
//main pictures
import beach from './images/mainCard/beach.jpg'
import dawn from './images/mainCard/dawn.jpg'
import forest from './images/mainCard/forest.jpg'
import frog from './images/mainCard/frog.jpg'
import santa from './images/mainCard/santa.jpg'
import space from './images/mainCard/space.jpg'
import water from './images/mainCard/water.jpg'



class App extends React.Component{
//constructor(props){
//super(props)
state ={

      upload:[
       { profilePic:mark,
      profileName:"niktop77",
    uploadPic:[beach,santa,frog],
    //likes to contain an array of names
  likes:["alex","james","lora","owen" ],
  caption:"This is a fantastic beach",
  comments:["this is a wonderful","cant wait for summer","yeahh rocking it in my bikinis","wonderful......"],
  commentTime:"1hr"},

  { profilePic:abigail,
  profileName:"abi007",
uploadPic:[dawn,],
//likes to contain an array of names
likes:["baldwin","jordan","princess","lora","owen"],
caption:"Good morning alll",
comments:["moring tooo.","not wakiing up now","lovely setting","this is a wonderful"],
commentTime:"8hrs"},
{ profilePic:gemma,
profileName:"lovenest",
uploadPic:[forest,],
//likes to contain an array of names
likes:["rebecca","leona","james","lora","michael"],
caption:"Nature is beautiful",
comments:["really tall trees","love to go hiking in the forest","be carefull of creepy crawlies","hummmmm......."," wonderful animal"],
commentTime:"45mins"},
{ profilePic:jake,
profileName:"cool..dude",
uploadPic:[frog],
//likes to contain an array of names
likes:["dan","baz","koser","lora","rachael"],
caption:"frogs are wonderfull creatures",
comments:["i have some in my backyard"," some are poisinous","stay away from bright colored frogs"," wonderful animal"," wonderful animal"," wonderful animal"],
commentTime:"30mins"},
{ profilePic:[katy],
profileName:"sexy-baby01",
uploadPic:[santa],
//likes to contain an array of names
likes:["imran","sasy","tobi","lora","joyce"],
caption:"merry chrismass everyone",
comments:["jingle bells","santa is coming","hope my good deeds are remembered","this is a wonderful"],
commentTime:"3hrs"},

{ profilePic:princess,
profileName:"daddy's girl",
uploadPic:[water],
//likes to contain an array of names
likes:["larry","loveth","james","lora","gemma"],
caption:"WATER is life amazing stuff",
comments:["i like to dive","lots of life in water","this is a wonderful","great picture"],
commentTime:"1hr"},

{ profilePic:leona,
profileName:"deepLove001",
uploadPic:[space],
//likes to contain an array of names
likes:["david","alex","theodeor","lora","owen"],
caption:"Space is a lovely place",
comments:["i will like to live in space","see you in mars","lovely picture","our future home"],
commentTime:"2hrs"
}

      ]
}
//}

  render(){
   
    const stories = this.state.upload.map((story,index)=>{
        return <Stories 
        key={index}
        index={index}
         profilePic={story.profilePic}
           profileName={story.profileName}
         />
    })

    const card = this.state.upload.map((upload,index)=>{
      return <MainCard 
      key = {index} 
      profilePic={upload.profilePic}  
      profileName={upload.profileName}
      uploadPic={upload.uploadPic}
      likes={upload.likes}
      caption={upload.caption}
      comments={upload.comments}
      commentTime={upload.commentTime}

      />
    })

    // console.log(card)
  return (
    <div className="App">
    <div className="AppStories">
  {stories}
    </div>


   
    <div className="AppMainCard">
    {card}
    </div>
    </div>
  );
}
}

export default App;
