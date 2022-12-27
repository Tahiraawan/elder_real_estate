import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
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
      infinite: true,
      fade: true,
      lazyLoad: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div
      className=""
      style={{
        height: "980px"}}>
          {/* <h1 className=" z-10 flex justify-center items-center">Elder Real Estate</h1> */}
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
        
            <div className="w-full h-[1000]">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="w-full"/>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1367954158/photo/residential-district-with-luxury-villas-walking-path-and-palm-trees.jpg?b=1&s=170667a&w=0&k=20&c=7fnelIUBmNUXI7Di9Txc6CaaKd0rdevqdHlSK-R1h5s=" className="w-full" />
            </div>
        </Slider>
      </div>
    );
  }
}
