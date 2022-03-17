import React, { Component } from "react";
import "./home.css";
// import {Button} from '../Button'
class Home extends Component {

  state ={ clicked:false}

  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }

  render() {
    return (
    <section className="home container">
        <div className="animation">
            <img src="./Hackathon.jpg" alt="" />
            <div className="anima"></div>
        </div>
        <div className="home-content">
            <div className="home-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vitae, earum amet odit laboriosam delectus tenetur culpa quidem doloremque provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium inventore at ullam dolorum enim sunt impedit! Sed, iure soluta?</div>
            <div className="home-buttons">
                <button className="btn-company">Sign In</button>
                <button className="btn-admin">Sign In</button>
            </div>
        </div>
    </section>
    );
  }
}

export default Home;
