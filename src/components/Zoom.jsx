import React from "react";
import styled from "styled-components";
import { MdZoomOutMap } from "react-icons/md";
const { Component } = React;

export default class Zoom extends Component {
  state = {
    //  backgroundImage: `url(${this.props.src})`,
    backgroundPosition: "0% 0%",
  };

  handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 90;
    const y = ((e.pageY - top) / height) * 90;
    this.setState({
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${this.props.src})`,
    });
    // console.log(x+""+y)
  };

  render = () => (
    <Con>
      <figure onMouseMove={this.handleMouseMove} style={this.state}>
        <img src={this.props.src} alt="" />
      </figure>

      <MdZoomOutMap
        className="icon"
        onClick={() => {
          this.props.float(true);
        }}
      />
    </Con>
  );
}

const Con = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  flex-direction: column;
  & .icon {
    position: relative;
    bottom: 0rem;
    color: #b4b4b4;
    font-size: 1rem;
    box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.1);
    background-color: #f8f8f8;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    margin-top: -5rem;
    padding: 5px;
    cursor: pointer;
    left: 30%;
    &:hover {
      animation: zoomIn 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      color: #464646;

      @keyframes zoomIn {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.15);
          //color: black;
        //  padding: 10px;
          
        }
        100% {
          transform: scale(1);

        }
      }
    }
  }
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
    // height: 400px;
    pointer-events: none;
  }
`;
