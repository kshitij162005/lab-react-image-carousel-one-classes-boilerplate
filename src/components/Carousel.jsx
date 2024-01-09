import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super(); // brings all the components of react to our class
    this.state = {
      index: 0,
    };
  }

  render() {
    let {index} = this.state; //destructuring
    let currentImage = images[index];

    let handlePrev = () => {
        this.setState({index:(this.state.index+1+images.length)% images.length}) // insted of looping we did this so this never get out of index as it will be like 0 , 1, 2, 3, 0 as 3%3  = 0, so after 3 it will go to 0 index. 
    }

    let handleNext = () => {
        this.setState({index:(this.state.index+1)% images.length})
    }

    return (
      <>
        <div class="mainContainer">
          <div>
            <ArrowBackIosIcon onClick = {handlePrev}/>
          </div>
          <div className="imageBox">
            <img src = {currentImage.img} />

          </div>
          <div className="imageContainer">
            <div className="titleBox">
                <p>{currentImage.title}</p>

            </div>
            <div className="subTitleBox">
            <p>{currentImage.subtitle}</p>

            </div>
          </div>
          <div>
            <ArrowForwardIosIcon onClick = {handleNext}/>
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
