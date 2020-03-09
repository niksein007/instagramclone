import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './component/navBar.js';
import camera from './images/camera.png';
import arrow from './images/arrowicon.png';
import insta from './images/insta.png';


class App extends React.Component {
  render() {
    return (
      <header>
        <NavBar
          camera={camera}
          arrowIcon={arrow}
          insta={insta} />

      </header>

    )
  }
}

export default App;
