import React, { useState } from 'react'
import styled from 'styled-components'

import { FiSearch } from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaBalanceScale,
  FaRegHeart,
  FaShoppingCart,
  FaAngleRight,
  FaBars,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { InView } from "react-intersection-observer";
import { Link } from 'react-router-dom';



const MainNav = ({ setNav, setInView }) => {
  return (
    <InView onChange={setInView}>
      <Con>
        <div
          className="conWrap"
         
        >
          <FaBars
            className="bar"
            onClick={() => {
              setNav(true);
            }}
          />
          <div className="imgWrap">
            <img
              src="https://obanana.com/wp-content/uploads/2022/03/new-logo.png"
              alt=""
            />
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              //value={"name"}
              // onChange={(e) => setName(e.target.value)}
            />
            <FiSearch className="icon" />
          </div>
          <div className="right">
            <div className="contact">
              <IoCallOutline className="phone" />
              <div className="cont">
                <h1>
                  Live Chat <span>or dial:</span>
                </h1>
                <p>+63 917 722 6002</p>
              </div>
            </div>
            <div className="notif">
              <span>
              <Link to ="/compare" className='link'>
                <FaBalanceScale className="icon" />
                <p>Compare</p>
                </Link>
              </span>
              <span>
              <Link to ="/compare" className='link'>
                <FaRegHeart className="icon" />
                <p>Wishlist</p>
                </Link>
              </span>
            </div>
            <div className="cart">
              <p>₱0.00</p>
              <FaShoppingCart className="icon" />
            </div>
          </div>
        </div>
      </Con>
    </InView>
  );
};

    const Con = styled.div`
      display: flex;
      flex-direction: column;
      // justify-content: space-around;
      padding: 22px 0px 10px 0px;
      width: 100vw;
      max-width: 1800px;
      overflow-x: hidden;
      // justify-content: space-between;
      & .conWrap {
        display: flex;
        align-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;
        justify-content: space-between;

        & .bar {
          display: none;
        }
        @media (max-width: 1024px) {
          & .bar {
            display: block;
            //  margin: auto ;
            font-size: 30px;
            margin-left: 1rem;
            // margin-right:0rem ;
            cursor: pointer;
          }
        }
        & .imgWrap {
          width: 15%;
          & img {
            //  margin-top: 2rem;
            width: 144px;
            margin: auto;
            margin-left: 1rem;
            display: block;
          }
        }

        & .search {
          position: relative;
          display: inline-flex;
          margin: auto 1.2rem;
          height: 47px;
          width: 55%;
          position: relative;
          background-color: transparent;
          // box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
          padding: 0 1rem 0 1rem;
          font-family: inherit;
          border-radius: 15px;
          //  margin-top: 1rem;
          border-radius: 5px;
          border: 2px solid #ec7a5c;
          @media (max-width: 1068px) {
            width: 37%;
          }
          @media (max-width: 1024px) {
            visibility: hidden;
            height: 0;
            width: 0;
          }
          & .icon {
            margin: auto;
            margin-left: 0.5rem;
          }
          input {
            width: 90%;
            padding: 10px;
            //margin: 0;
            //  flex: 1;
            // min-width: 40px;
            font-size: 1.2rem;
            display: block;
            font-family: monospace;
            font-size: 14px;
            transition: all 0.3s ease-in-out;
            background-color: transparent;
            border: none;
          }
          input:focus {
            outline: none;
            width: 80%;
            transition: all 0.3s ease-in-out;
          }
        }
        & .right {
          display: inline-flex;
          position: relative;
          // right: 0;
          width: 33%;
          justify-content: flex-end;
          margin-right: 1rem;
          padding: 1rem;
          @media (max-width: 1468px) {
            width: 47%;
          }
          @media (max-width: 990px) {
            & p {
              display: none;
            }
          }
          & .contact {
            display: inline-flex;
            height: 47px;
            width: 200px;
            @media (max-width: 990px) {
              width: auto;
            }
            @media (max-width: 574px) {
              display: none;
            }
            & .phone {
              margin: auto;
              font-size: 30px;
              @media (max-width: 990px) {
                margin: auto;
                font-size: 35px;
              }
            }
            & .cont {
              margin-left: 0.6rem;
              @media (max-width: 990px) {
                display: none;
                width: 0;
              }

              & h1 {
                font-size: 0.9rem;
                font-weight: 100;
                // margin: 1rem auto;
                & span {
                  color: var(--obanana-light-color);
                }
              }
              & p {
                font-size: 1rem;
                font-weight: 800;
                position: relative;
                top: -18px;
                white-space: nowrap;
              }
            }
          }
          & .notif {
            display: flex;
            height: 47px;
            margin: auto 1rem;
            border-right: 1px solid var(--obanana-light-color);
            border-left: 1px solid var(--obanana-light-color);
            padding: 0rem;
            @media (max-width: 990px) {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            @media (max-width: 574px) {
              display: none;
            }
            & .link {
              color: var(--obanana-secondary-color);
              text-decoration: none;
            }
            & span {
              display: flex;
              flex-direction: column;
              font-size: 13px;
              font-weight: 100;
              text-decoration: none;

              color: var(--obanana-secondary-color);
              margin: auto 1rem;
              position: relative;
              top: 0px;
              & p {
                position: relative;
                top: -0.8rem;
              }
              @media (max-width: 990px) {
                top: 0;
              }
              & .icon {
                font-size: 35px;
                position: relative;
                left: 0.6rem;
                @media (max-width: 990px) {
                  margin: auto;
                }
              }
            }
          }
          & .cart {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            & p {
              font-size: 1rem;
              font-weight: 600;
              color: #ff0000;
            }
            & .icon {
              color: var(--obanana-secondary-color);
              font-size: 35px;
              margin-left: 0.3rem;
              margin-right: 1rem;
            }
          }
        }
      }
    `;
export default MainNav