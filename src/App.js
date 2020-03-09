import React from 'react';
import './App.css';
import Footer from './component/footer';
import home from './img/home.jpeg';
import search from './img/search.png';
import upload from './img/upload.png';
import like from './img/like.png';
import profile from './img/profile.png';

class App extends React.Component {

state = {
  Footer:[
    {icon:home}, 
    {icon:search},
    {icon:upload},
    {icon:like},
    {icon:profile}

  ]
}

  render () {
    const footer = this.state.Footer.map ( (footer, index)=> {
      return <Footer icon={footer.icon} key={index} />
    })
    return (
      <div className="AppFooter">
        {footer}
      </div>
    );
  }
}
export default App;
