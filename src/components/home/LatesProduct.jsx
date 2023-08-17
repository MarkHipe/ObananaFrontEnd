import React, { useState } from "react";
import styled from "styled-components";
import { product } from "./productsAssets/products";
import { FaBalanceScale } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
const navs = [
  "Groceries & Merchandise",
  "Food & Beverages",
  "Construction Services",
  "Apparels",
  "Home & Living",
];

const LatesProduct = () => {
  const [prodHover, setprodHover] = useState();
  return (
    <Con>
      <div className="header">
        <h1>Latest product For You</h1>
        <div className="navLatest">
          {navs.map((nav, i) => {
            return <h6 key={i}>{nav}</h6>;
          })}
        </div>
      </div>
      <div className="contentsCon">
        {product.map((prod, i) => {
          return (
            <div
              className="prodCard"
              onMouseOver={() => {
                setprodHover(i);
              }}
              onMouseLeave={() => {
                setprodHover();
              }}
            >
              <FiSearch
                className={
                  prodHover === i ? "searchfloat active" : "searchfloat"
                }
              />
              {prodHover === i && prod.img.length > 1 ? (
                <img src={prod.img[1]} alt="" />
              ) : (
                <img src={prod.img[0]} alt="" />
              )}
              <div className={prodHover === i ? "details active" : "details"}>
                <p>{prod.productName}</p>
                <h4>₱{prod.price}.00</h4>

                <FaBalanceScale
                  className={prodHover === i ? "icon active" : "icon"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Con>
  );
};
const Con = styled.div`
  // padding: 2rem 1rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .header {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
    & .navLatest {
      display: flex;
      flex-wrap: wrap;
      margin: 1rem;
      & h6 {
        margin: auto 0.4rem;
        font-size: 0.8rem;
        font-weight: 400;
        &:hover {
          cursor: pointer;
          color: var(--obanana-primary-color-hover);
        }
      }
    }
  }
  & .contentsCon {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 95%;

    & .prodCard {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      height: auto;
      @media (max-width: 1200px) {
        width: 22%;
      }
      @media (max-width: 1200px) {
        width: 22%;
      }
      @media (max-width: 902px) {
        width: 30%;
        height: auto;
      }
      @media (max-width: 868px) {
        width: 30%;
        height: auto;
      }
      @media (max-width: 650px) {
        width: 40%;
        height: auto;
      }
      @media (max-width: 350px) {
        width: 90%;
        height: auto;
      }
      & img {
        width: 200px;
        height: 200px;
        -webkit-animation: opacity-low 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          both;
        animation: opacity-low 0.3s cubic-bezier(0.95, 0.59, 0.07, 0.94) both
          ease-in-out;
        cursor: pointer;
        object-fit: scale-down;
        @media (max-width: 650px) {
          width: 40vw;
          height: 40vw;
        }
        @media (max-width: 350px) {
          width: 90vw;
          height: auto;
        }
        @keyframes opacity-low {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      }
      & .searchfloat {
        position: absolute;
        align-self: flex-end;
        // top: 1rem;
        border-radius: 100%;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
        // height: 50px !important;
        font-size: 20px;
        margin-top: -280px;
        margin-right: 0.6rem;
        visibility: hidden;
        background-color: #fff;
        color: #292828;
        z-index: 27;
        &.active {
          visibility: visible;
        }
      }
      & .details {
        padding: 1rem;
        background-color: #fff;
        //animation: slide-down 4s ease-in-out;
        &.active {
          position: relative;

          animation: slide-up 0.5s ease-in-out both;

          top: -1.8rem;
          @keyframes slide-up {
            0% {
              top: 0rem;
            }

            100% {
              top: -1.8rem;
            }
          }
        }
        & p {
          font-size: 0.8rem;
        }
        & h4 {
          color: red;
          margin: 0rem auto;
          margin-bottom: 0.5rem;
        }
        & .icon {
          color: var(--obanana-secondary-color);
          visibility: hidden;
          cursor: pointer;
          font-size: 1.3rem;
          height: 1rem;
          &.active {
            /* height: auto; */
            visibility: visible;
            -webkit-animation: slide-in-left 0.3s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              both;

            @keyframes slide-in-left {
              0% {
                -webkit-transform: translateX(-30px);
                transform: translateX(-30px);
                opacity: 0;
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
    }
  }
`;
export default LatesProduct;
