import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
const SubBanners = () => {
  return (
    <Con>
      <div className="header">
        <h1>BULK ORDERS?</h1>
      </div>
      <div className="text">
        <div className="subHeader">
          Get Multiple
          <br />
          <span>Quotes with Us!</span>
        </div>
        <div className="button">
          <button>
            <p>REQUEST FOR QUOTATION</p>
            <BsArrowRight className="icon" />
          </button>
        </div>{" "}
      </div>
    </Con>
  );
};
const Con = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  background-color: #ffad15;
  padding: 2rem 0rem;
  & .text {
    width: 70%;
    margin: auto;
    justify-content: space-between;
    display: flex;
  }
  & .header {
    font-size: 68px;
    text-transform: uppercase;
    font-weight: 700;
    width: 30%;
    max-width: 276px;

    & h1 {
      margin: auto 2rem;
      margin-left: 3rem;
      line-height: 1;
      font-size: 4rem;
      font-weight: 900;
    }
  }
  font-size: 30px;
  & .subHeader {
    font-weight: 400;
    margin: 1rem;
    color: var(--obanana-primary-color);
    & span {
      position: relative;
      top: -1rem;
      font-size: 30px;
      font-weight: 900;
    }
  }
  & .button {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    & button {
      cursor: pointer;
      height: 56px;
      min-width: 330px;
      padding: 10px 20px;
      font-size: 18px;
      border: 2px solid #ffb715;
      background-color: #fff;

      font-weight: 400;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      & .icon {
        margin-left: 0.5rem;
        font-size: 1.5rem;
      }
      &:hover {
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
            100% {
              -webkit-transform: translateX(30px);
              transform: translateX(15px);
              opacity: 1;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1324px) {
    & .text {
      width: 60%;
    }
  }
  @media (min-width: 1024px) {
    min-height: 228px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    & .text {
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    & .header {
      max-width: 400px;
    }
    & .button {
      width: 50%;
    }
  }

  @media (max-width: 620px) {
    & .text {
      flex-direction: column;
    }
    & .button {
      width: 100%;
      margin: 0;
      display: flex;
      justify-content: flex-start;
      & button {
        margin: 0;
      }
    }
  }
  @media (max-width: 768px) and (min-width: 573px) {
    & .header {
      width: 100%;
      max-width: 100%;
      & h1 {
        font-size: 40px;
      }
      & p {
        width: 100%;
        margin: auto 0rem;
        margin-left: 3rem;
      }
    }
  }
  @media (max-width: 573px) {
    & .header {
      width: 100%;
      max-width: 100%;
      & h1 {
        font-size: 50px;
      }
      & p {
        width: 100%;
        margin: auto 0rem;
        margin-left: 3rem;
        font-size: 40px;
      }
    }
    & .button button {
      width: 80% !important;
      margin: 0;
      display: flex;
      justify-content: flex-start;
      /* padding:0px; */
      min-width: 250px;
      & button {
        margin: 0;
      }
      font-size: 13px;
    }
  }
`;

export default SubBanners;
