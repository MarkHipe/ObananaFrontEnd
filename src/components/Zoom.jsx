
import React from "react";
import styled from "styled-components";

const { Component } = React;

export default class Zoom extends Component {
  state = {
  //  backgroundImage: `url(${this.props.src})`,
    backgroundPosition: "0% 0%",
  };

  handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    this.setState({
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${this.props.src})`,
    });
    console.log(x+""+y)
  };

  render = () => (
    <Con>
      <figure onMouseMove={this.handleMouseMove} style={this.state}>
        <img src={this.props.src} alt="" />
      </figure>
    </Con>
  );
}

  const Con = styled.div`
    figure {
      width: 80%;
      background-repeat: no-repeat;
    }

    figure:hover img {
      opacity: 0;
    }

    img {
      display: block;
      width: 100%;
      pointer-events: none;
    }
  `;