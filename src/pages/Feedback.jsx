import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import ImageSlider from "../components/feedback/ImageSlider";





const Feedback = () => {
  return (
    <Con>
      <div className="header1">Testimonials</div>
      <div className="navHistory">
        <div className="navLink">
          <ul>
            <a href="home">Home</a>
            <FaAngleRight className="angleicon" />
            <a href="feedback">Feedback</a>
          </ul>
        </div>
      </div>
      <div className="header2">CLIENT'S SPEAKS</div>
      <div className="carousel">
        <div className="carouselCard">
          <ImageSlider />

        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  width: 100vw;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  max-width: 1800px;
  & .header1 {
    background-color: rgba(182, 174, 174, 0.253);
    width: 100%;
    height: 4.5em;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: bolder;
    font-size: 40px;
  }
  & .navHistory {
    & .navLink {
      background-color: #fffbfb37;
      position: relative;
      display: flex;
      align-items: center;
      border-bottom: 1px solid gray;
      margin: 0 1rem;

      & ul {
        & a {
          color: black;
          font-size: 15px;
          text-decoration: none;
          position: relative;
          margin-right: 30px;
        }
        & .angleicon {
          margin-left: -25px;
          position: relative;
          top: 3px;
        }
      }
    }
  }

  & .header2 {
    background-color: white;
    width: 100%;
    height: 4em;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: bolder;
    font-size: 40px;
  }
  & .carousel{
    height: 400px;
  }
`;

export default Feedback;
