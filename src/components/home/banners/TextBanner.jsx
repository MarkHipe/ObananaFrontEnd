import React from 'react'
import styled from 'styled-components'

const TextBanner = () => {
  return (
    <Con>
        <div className="border"></div>
      <div className="rightText">
        {" "}
        <div className="coverCon">
          <div className="cover"></div>
          <div className="slice"></div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing eli.</h1>
      </div>
      <div className="left">
        {" "}
        <div className="coverCon">
          <div className="cover"></div>
          <div className="slice"></div>
        </div>
      </div>
    </Con>
  );
}
const Con = styled.div`
  display: flex;
  & .border {
    height:60px;
    width: 99%;
    outline-style: dashed;
    outline-offset: -0.6rem;
    outline-color: #fff;
    position: absolute;
    z-index: 22;
  }
  z-index: 222;
  & .rightText {
    width: 80%;
    height:60px;
    overflow: hidden;
    background-color: #ffb62f;
    display: inline-flex;
    & h1 {
      position: absolute;
      width: 200%;
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      margin-top: 7px;
      animation: rightToLeft 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      @media (max-width:768px){
        width: 400%;
      }
      @keyframes rightToLeft {
        0% {
          transform: translateX(50%);
        }
        100% {
          transform: translateX(-90%);
        }
      }
    }
    & .coverCon {
      position: relative;
      z-index: 20;
      & .cover {
        position: absolute;
        width: 150px;
        height: 200px;
        top: -50px;
        left: -50px;
        transform: rotate(20deg);
        background-color: var(--obanana-ptb-bg-color);
      }
      & .slice {
        overflow: hidden;
        position: relative;
        width: 5px;
        height: 140px;
        top: -1rem;
        left: 110px;
        background-color: var(--obanana-ptb-bg-color);

        transform: rotate(20deg);
      }
    }
  }
  & .left {
    width: 20%;
    position: relative;
    height:60px;
    overflow: hidden;
    z-index: 20;
    background-color: #ffb62f;
    & .coverCon {
      position: relative;
      z-index: 20;
      & .cover {
        position: absolute;
        width: 150px;
        height: 200px;
        top: -50px;
        left: -50px;
        transform: rotate(20deg);
        background-color: var(--obanana-ptb-bg-color);
      }
      & .slice {
        overflow: hidden;
        position: relative;
        width: 5px;
        height: 140px;
        top: -1rem;
        left: 110px;
        background-color: var(--obanana-ptb-bg-color);

        transform: rotate(20deg);
      }
    }
  }
`;
export default TextBanner