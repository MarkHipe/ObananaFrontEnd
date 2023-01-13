import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const images = [
  {
    link: "https://obanana.com/wp-content/uploads/2022/08/lower-banner-2.jpg",
    btn: "ORDER NOW",
  },
  {
    link: "https://obanana.com/wp-content/uploads/2022/08/lower-banner-1.jpg",
    btn: "SHOP NOW",
  },
];

const TwoBanner = () => {
  return (
    <Con>
      <div className="cons">
        <div className="imgCon one">
          <img src={images[0].link} alt="" />
          <div className="text">
            <h3>Secure Your</h3>
            <h2>HEALTH CARE</h2>
            <p>
              <span>Enjoy</span> ₱ 100 OFF <span>for a minimum spend of </span>₱
              199
            </p>
            <button>
              {images[0].btn}
              <BsArrowRight className="icon" />
            </button>{" "}
          </div>
        </div>
        <div className="imgCon two">
          <img src={images[1].link} alt="" />
          <div className="text">
            <h3>GUADALUPE</h3>
            <h2>DRIED MANGOES</h2>
            <p>
              Satisfy <span>your</span> Craving
            </p>
            <button>
              {images[1].btn} <BsArrowRight className="icon" />
            </button>{" "}
          </div>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  position: relative;
  width: 100%;
  //margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & .cons {
    display: flex;
    width: 100%;
    //margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (min-width: 992px) {
      display: inline-flex;
    }
  }
  & img {
    position: absolute;
    margin: auto;
    border-radius: 8px;
    width: 45%;
    height: 300px !important;
    height: auto;
    object-fit: cover;
    margin: 1rem;
    @media (max-width: 992px) {
      width: 90%;
    }
    @media (max-width: 400px) {
      width: 100%;
      margin: 1rem 0;
    }
  }
  & button {
    position: relative;
    // bottom: 3rem;
    //right: 2rem;
    background: #ffffffdf;
    border-radius: 5px;
    padding: 0.7rem 1.2rem;
    cursor: pointer;
    &:hover {
      background-color: #ba3f02bc;
      color: #fff;
    }
  }
  & .imgCon {
    justify-content: space-around;
    display: flex;
    width: 45vw;
    height: 300px;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 992px) {
      width: 95%;
      margin: 1rem auto;
    }
    @media (max-width: 400px) {
      width: 100%;
      margin: 1rem auto;
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
      @media (max-width: 400px) {
        bottom:2rem;
      }
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
    &.one .text {
      left: -20%;

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
        line-height: 0px;
        top: -2rem;
      }
      & p {
        position: relative;
        line-height: 20px;
        top: -2rem;
      }
      @media (max-width: 1500px) {
        left: -10%;
      }
      @media (max-width: 1100px) {
        left: -5%;
      }
      @media (max-width: 992px) {
        left: -20%;
      }
      @media (max-width: 768px) {
        left: -15%;
      }
      @media (max-width: 612px) {
        left: -10%;
      }
      @media (max-width: 568px) {
        left: -5%;
      }
      @media (max-width: 400px) {
        left: 10%;
        width: 300px;
     //  white-space: normal;
      }
    }
    &.two .text {
      // bottom: 5rem;
      right: -25%;
      @media (max-width: 1100px) {
        right: -20%;
      }
      @media (max-width: 568px) {
        right: -15%;
      }
      @media (max-width: 400px) {
        right: -2%;
      }
      & h3 {
        color: var(--obanana-primary-color);
        font-size: 2rem;
        font-weight: 400;
      }
      & h2 {
        color: var(--obanana-primary-color);
        font-size: 2.3rem;
        font-weight: 600;
        position: relative;
        line-height: 0px;
        top: -2rem;
      }
      & p {
        position: relative;
        //line-height: 0px;
        top: -2rem;
      }
    }
    & .text {
      position: relative;
      top: 1rem;
      margin: auto;
      display: flex;
      line-height: 10px;
      flex-direction: column;
      height: 250px;
      & p {
        font-weight: 900;
        color: var(--obanana-secondary-color);
      }
      & span {
        font-weight: 100;
      }
    }
  }
`;

export default TwoBanner;
