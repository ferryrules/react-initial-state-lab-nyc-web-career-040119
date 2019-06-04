import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }

  changeSlide = () => {
    let i = this.state.currentSlideIndex
    this.setState({
      currentSlideIndex: i++
    })
  }

  render() {
    return (
      <div
        className="cell"
        onClick={this.changeSlide}>
        I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}
