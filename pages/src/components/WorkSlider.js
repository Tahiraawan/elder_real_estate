import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    return (
      <div className="">
        
        <Slider {...settings} >
          <div className="p-2 hover:-my-5 hover:transition hover:ease-in hover:duration-300">
          <img src="https://images.unsplash.com/photo-1664575601711-67110e027b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="p-2 hover:-my-5 hover:transition hover:ease-in hover:duration-300">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="p-2 hover:-my-5 hover:transition hover:ease-in hover:duration-300">
          <img src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="p-2 hover:-my-5 hover:transition hover:ease-in hover:duration-300">
          <img src="https://images.unsplash.com/photo-1664575601711-67110e027b9b?ixlib=rb-4.0.3ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
          <h1></h1>
          </div>
          <div className="p-2 hover:-my-5 hover:transition hover:ease-in hover:duration-300">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
        </Slider>
      </div>
    );
  }
}