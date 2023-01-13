
import React, { useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";
import MapObanana from "../components/helpCenter/MapObanana";
import PeopleAsk from "../components/helpCenter/PeopleAsk";
import SendUsMessage from "../components/helpCenter/SendUsMessage";
import Slider from "../components/helpCenter/Slider";

const HelpCenter = () => {
  return (
    <Con>
      <div className="contactUs">Contact Us</div>
      <div className="navHistory">
        <div className="navLink">
          <ul>
            <a href="home">Home</a>
            <FaAngleRight className="angleicon" />
            <a href="contact">Contact Us</a>
          </ul>
        </div>
      </div>
      <div className="getInTouch">
        <div className="header">
          <h1>GET IN TOUCH</h1>
        </div>
        <div className="details">
          <p>
            Email us with any questions or inquiries or give us a call. We will
            <br />
            be happy to answer your questions and set up a meeting with you.
          </p>
        </div>
        <div className="slidesCon">
          <Slider />
        </div>
      </div>
      <div className="wrapper">
        <PeopleAsk />
        <SendUsMessage />
      </div>
      <MapObanana />
    </Con>
  );
};

const Con = styled.div`
width: 100%;
  & .contactUs {
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
    width: 99%;
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

  & .getInTouch {
    /* margin-top: 13rem; */
    width: 98%;

    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid gray;
    margin: 0 1rem;
    & h1 {
      font-weight: 900;
      font-size: 23px;
    }
    & p {
      color: #666666;
      font-size: 0.9rem;
      line-height: 24px;
    }
  }
  & .slidesCon {
    width: 100vw;
  }
  & .wrapper{
    display: flex;
    margin: 1rem;
    margin-bottom: 2rem;
  }
`;

export default HelpCenter;
