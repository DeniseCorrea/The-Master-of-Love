import React from "react";
import { withRouter } from "react-router-dom";
import "./intro.css";

function Intro(saberIsOn) {

  const saber = React.forwardRef((props, ref) => (
    <div id="saber" className="hidden"></div>
  ));

  const soundOn = React.forwardRef((props, ref) => (
    <audio src="http://soundbible.com/mp3/Lightsaber%20Turn%20On-SoundBible.com-1637663395.mp3">
  </audio>
  ));

  const soundOff = React.forwardRef((props, ref) => (
    <audio src="http://soundbible.com/mp3/Lightsaber%20Turn%20On-SoundBible.com-1637663395.mp3">
  </audio>
  ));

  const toggleSaber = () => {

    this.saber = React.createRef();
    this.soundOn = React.createRef();
    this.soundOff = React.createRef();

    console.log("Hi, function has started");
    console.log("Get Element Test->");
    console.log(soundOn);

    if (saberIsOn) {
      saberIsOn = false;
      saber.style.display = "none";
      document.body.style.background = "white"
      document.body.style.transition = "1s"
      soundOff.play();    
    } else {
      saberIsOn = true;
      saber.style.display = "block";
      document.body.style.background = "black"
      soundOn.play(); 
    }
  };


  return (
    <>
        <div id="container">
            <div id="hilt"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/18515/lightsaber-hilt.png" alt="hilt" onClick={toggleSaber}/></div>
            <div id="saber" ref={this.saber} className="hidden"></div>
        </div>

        <audio id="soundOn" ref={this.soundOn} src="http://soundbible.com/mp3/Lightsaber%20Turn%20On-SoundBible.com-1637663395.mp3">
        </audio>
        <audio id="soundOff" ref={this.soundOff} src="http://soundbible.com/mp3/Lightsaber Turn On-SoundBible.com-647586083.mp3">
        </audio>
    </>
  );
}
export default withRouter(Intro);