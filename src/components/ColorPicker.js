import React, { Component } from 'react'

class ColorPicker extends Component {
  state = {
    hue: 178,
    sat: 99,
    light: 72
  }

  getHSL = () => {
    return `hsl(${this.state.hue}, ${this.state.sat}%, ${this.state.light}%)`
  }
  hueValue = event => {
    this.setState({
      hue: event.target.value
    })
  }
  satValue = event => {
    this.setState({
      sat: event.target.value
    })
  }
  lightValue = event => {
    this.setState({
      light: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="swatch" style={{ backgroundColor: this.getHSL() }} />
        <div className="sliders">
          <h6>HUE</h6>
          <input name="hue" type="range" min="1" max="360" onChange={this.hueValue} />
          <h6>SATURATION</h6>
          <input name="sat" type="range" min="1" max="100" onChange={this.satValue} />
          <h6>LIGHTNESS</h6>
          <input name="light" type="range" min="1" max="100" onChange={this.lightValue} />
        </div>
      </div>
    )
  }
}

export default ColorPicker
