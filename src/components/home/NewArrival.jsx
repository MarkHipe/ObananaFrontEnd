import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import Left from "./newArrival/Left";
import Right from "./newArrival/Right";
const images = [
  {
    link: "https://obanana.com/wp-content/uploads/2022/07/LOWER-CENTRAL.png",
    btn:"Shop Now",

  },
];
const NewArrival = () => {
  return (
    <Con>
      <div className="left"><Left/></div>
      <div className="bannerCon">
       
        <div className="imgCons one">
          <img src={images[0].link} className="bannerImg" alt="" />
          <div className="texts">         
            <p>
              Let's <span>EAT-SHOP-TRAVEL</span> and <span>MANY MORE</span>
            </p>
            <button>
              {images[0].btn} <BsArrowRight className="icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="right"><Right/></div>
    </Con>
  );
};
const Con = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas: "left banner right";
  height: 680px;
  margin: auto;
  position: relative;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      " banner banner"
      "left right";
    height: 1280px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.6fr 1fr 1fr;
    grid-template-areas:
      " banner "
      "left " "right";
    height: 2580px;
  }
  @media (max-width: 468px) {
    height: 2550px;

  }
  @media (max-width: 368px) {
    height: 2400px;

  }

  & .bannerCon {
    grid-area: banner;
    display: flex;
    height: 600px;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    & .imgCons {
      position: relative;
      display: flex;
      width: 43vw;
      height: 582px;
      flex-direction: column;
      //  margin: 0;
      @media (min-width: 1800px) {
        width: 800px;
        margin: 0;
      }
      @media (max-width: 1480px) {
        width: 38vw;
      }
      @media (max-width: 1320px) {
        width: 30vw;
      }
      @media (max-width: 992px) {
        width: 90%;
        margin: 1rem auto;
        margin-right: 2.8rem;
      }
      @media (max-width: 768px) {
        width: 95%;
      }
      & img.bannerImg {
        position: relative;
        object-fit: cover;
        height: 582px;
        // margin: auto;
      }
      & button {
        position: relative;
        background-color: #ba3f02bc;
        color: #fff;
        border-radius: 5px;
        padding: 0.9rem 1.2rem;
        border: none;
        display: flex;
        cursor: pointer;
        height: 3rem;
        justify-content: center;
        align-items: center;
        margin: auto;
        // bottom: -5rem;
        & .icon {
          font-size: 18px;
          margin: auto 10px;
        }
        &:hover {
          background-color: #ba3f02bc;
          color: #fff;
          & .icon {
            -webkit-animation: slide-in-right 0.3s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              both;

            @keyframes slide-in-right {
              0% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
                opacity: 1;
              }
              50% {
                -webkit-transform: translateX(30px);
                transform: translateX(15px);
                opacity: 1;
              }
              100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
                opacity: 1;
              }
            }
          }
        }
      }
      &.one .texts {
        & h3 {
          color: #fff;
          font-size: 2.5rem;
          font-weight: 400;
        }
        & h2 {
          color: var(--obanana-primary-color);
          font-size: 2.5rem;
          font-weight: 600;
          position: relative;
          //   line-height: 0px;
          //  top: -2rem;
        }
        & p {
          position: relative;
          line-height: 25px;
          //   top: -2rem;
        }
        @media (max-width: 1500px) {
          left: -10%;
        }
        @media (max-width: 1300px) {
          left: -5%;
        }
        @media (max-width: 1192px) {
          left: 1%;
        }
        @media (max-width: 992px) {
          left: -25%;
        }
      }

      & .texts {
        position: relative;
        top: -15rem;
        left: -20%;
        margin: auto;
        display: flex;
        line-height: 10px;
        flex-direction: column;
        height: 150px;
        width: 300px;
        & p {
          // font-weight: 900;
          font-size: 1.3rem;
          color: var(--obanana-secondary-color);
        }
        & span {
          font-weight: 900;
          font-size: 1.5rem;
          color: var(--obanana-primary-color);
        }
      }
    }
  }
  & .right {
    height: 600px;
    grid-area: right;
  
  }
  & .left {
    height: 600px;
    grid-area: left;
  }
`;
export default NewArrival;
