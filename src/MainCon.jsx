import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./components/mainCon/Nav";
import SideNav from "./components/mainCon/SideNav";
import HeaderNav from "./components/mainCon/HeaderNav";
import MainNav from "./components/mainCon/MainNav";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import SellOnObanana from "./pages/SellOnObanana";
import Footer from "./components/mainCon/Footer";
import FAQs from "./pages/FAQs";
import Account from "./pages/Account";
import HelpCenter from "./pages/HelpCenter";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";
import ProductPage from "./pages/ProductPage";
import { IoMdClose } from "react-icons/io";
import {
  AiOutlineClose,
  AiOutlineUnorderedList,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import ScrollButton from "./pages/ScrollButton";
import CartFloat from "./components/mainCon/CartFloat";

const MainCon = () => {
  const [sideNav, setSideNav] = useState(false);
  const [inView, setInView] = useState(false);
  const [searchPop, setsearchPop] = useState(false);
  const location = useLocation();
  const [fullImage, setfullImage] = useState(false);
  const [imagePop, setimagePop] = useState("");
  const [cartFloat, setcartFloat] = useState(true)
  //const [unScroll, setunScroll] = useState(false)
  useEffect(() => {
    const preTitle = location.pathname
      .split("/")
      .pop()
      .replace(/%20/g, " ")
      .replace(/-/g, " ");
    const title = preTitle.charAt(0).toUpperCase() + preTitle.slice(1);
    location.pathname === "/"
      ? (document.title = "Obanana | Home")
      : (document.title = "Obanana | " + title);
  }, [location]);

  return (
    <AnimatePresence>
      <Con className={sideNav === true ? "active" : ""}>
        <div
          className="shadow"
          onClick={() => {
            setSideNav(!sideNav);
          }}
        ></div>
        <div className={sideNav === true ? "sidebar active" : "sidebar"}>
          {" "}
          <div className="i">
            <motion.i
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
              onClick={() => {
                setSideNav(!sideNav);
              }}
            >
              <AiOutlineClose
                className="close"
                onClick={() => {
                  setSideNav(!sideNav);
                }}
              />
            </motion.i>
          </div>
          <div className="bars">
            <SideNav />
          </div>{" "}
          {/* <div
            className="shadow"
            onClick={() => {
              setSideNav(!sideNav);
            }}
          ></div> */}
        </div>
        <div className={fullImage === true ? "main fullImg" : "main"}>
          <HeaderNav />
          <MainNav
            setNav={setSideNav}
            setInView={setInView} 
          />
          <div className={inView === false ? "nav inview" : "nav"}>
            <Nav />
          </div>
          <div className={inView === false ? "navMain inview" : "navMain"}>
            <Nav />
          </div>
          <div className={inView === false ? "content inview" : "content"}>
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/testimonials" element={<Feedback />} />
              <Route path="/faq" element={<FAQs />} />
              <Route path="/my-account/" element={<Account />} />
              <Route
                path="/product/:prodName"
                element={
                  <ProductPage imagePop={setimagePop} pop={setfullImage} />
                }
              />
              <Route path="/sell-on-obanana" element={<SellOnObanana />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contacts" element={<HelpCenter />} />
              <Route path="*" element={<p>Path not resolved</p>} />
            </Routes>
          </div>
          {fullImage ? (
            <div className="imageFull">
              <div
                className="shadowOverlay"
                onClick={() => {
                  setfullImage(false);
                }}
              ></div>
              <div className="header">
                <IoMdClose
                  className="icon"
                  onClick={() => {
                    setfullImage(false);
                  }}
                />
              </div>
              <img src={imagePop} alt="" />
              <style jsx></style>
            </div>
          ) : null}
          {/* {
            cartFloat ? (
              <div className="cartFloat"><CartFloat/></div>
            ):(null)
          } */}
          <Footer />
        </div>
        <div className={inView === false ? "bottomNav inview" : "bottomNav"}>
          <div className="wrap">
            <nav>
              <span>
                <AiOutlineHome className="i" />
                <p>HOME</p>
              </span>
              <span
                onClick={() => {
                  setSideNav(true);
                }}
              >
                <AiOutlineUnorderedList className="i" />
                <p>CATEGORIES</p>
              </span>
              <span>
                <AiOutlineUser className="i" />
                <p>ACCOUNT</p>
              </span>
              <span
                onMouseOver={() => {
                  setsearchPop(false);
                }}
              >
                <BsBag className="i" />
                <p>CART</p>
              </span>
              <span
                onMouseOver={() => {
                  setsearchPop(true);
                }}
                onMouseLeave={() => {
                  setsearchPop(false);
                }}
              >
                <div
                  className={
                    searchPop === true ? "searchCon active" : "searchCon"
                  }
                >
                  <div className="triangle">{"  "}</div>
                  <div className="wrap">
                    <div className="searchs">
                      <input
                        type="text"
                        placeholder="Search..."
                        //value={"name"}
                        // onChange={(e) => setName(e.target.value)}
                      />
                      <FiSearch className="icon" />
                    </div>
                  </div>
                </div>
                <FiSearch className="i" />
                <p>SEARCH</p>
              </span>
            </nav>
          </div>
        </div>{" "}
        <ScrollButton />
      </Con>
    </AnimatePresence>
  );
};

const Con = styled.div`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  & .imageFull {
    position: absolute;
    top: 0;
    z-index: 50;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;

    & .shadowOverlay {
      height: 100vh;
      width: 100vw;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.35);
      cursor: pointer;
    }
    & img {
      position: relative;
      z-index: 52;
      max-height: 90vh;
      max-width: 100vw;
      object-fit: cover;
      margin: auto;
      animation: appear 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      @keyframes appear {
        0% {
          opacity: 0;
          transform: scale(0.8);
        }
        10% {
          opacity: 1;
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
    & .header {
      height: 8vh;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.32);

      & .icon {
        color: #fff;
        display: flex;
        align-self: flex-end;
        position: relative;
        z-index: 53;
        float: right;
        margin-right: 2rem;
        margin-top: 1rem;
        font-size: 1.8rem;
        cursor: pointer;
        &:hover {
          -webkit-animation: rotate-90-cw 0.4s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            infinite both;
        }
      }
    }
    // align-items: center;
  }
  & .main {
    max-width: 1800px;
    &.fullImg {
      max-height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
  }
  &.active {
    overflow-y: hidden;
    max-height: 100vh;
    & .shadow {
      background-color: #2c2c2c8d;
      position: fixed;
      z-index: 30;
      height: 100vh;
      width: 100%;
      right: 0;
      cursor: pointer;
    }
    & .i {
      height: 100vh;
      width: 100%;
      position: absolute;
      //  background-color: red;
      color: #fff;
      z-index: 43;
      font-size: 40px;
      cursor: pointer;
      right: 0;
      & i .close {
        position: relative;
        top: 48%;
        left: 90vw;
        z-index: 41;
        &:hover {
          -webkit-animation: rotate-90-cw 0.4s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      }

      @-webkit-keyframes rotate-90-cw {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
        }
      }
      @keyframes rotate-90-cw {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
        }
      }
    }
  }
  & .searchCon {
    display: none;
    position: fixed;
    height: 300px;
    margin-right: 1rem;
    z-index: 18;
    & .triangle {
      position: relative;
      bottom: -3.5rem;
      height: 17px;
      width: 25px;
      background-color: #ffffff;
      right: -15rem;
      transform: rotate(220deg);
      position: relative;
      z-index: 21;
    }
    & .wrap {
      z-index: 20;
      position: relative;
      bottom: 2rem;
      padding: 1rem;
      background-color: #fff;
      margin-right: 1rem;
      border-radius: 15px;
      box-shadow: 0px 0px 2px 1px rgba(114, 114, 114, 0.1);
    }
    & .searchs {
      display: inline-flex;
      margin: auto 1.2rem;
      height: 47px;
      width: 65%;
      position: relative;

      background-color: #eeeeee;
      // box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
      padding: 0 1rem 0 1rem;
      font-family: inherit;
      border-radius: 15px;
      //  margin-top: 1rem;
      border-radius: 5px;
      border: 1px solid #a1a1a1;
      z-index: 25;
    }
    @media (max-width: 768px) {
      &.active {
        display: block;
        bottom: -7rem;
        right: 2rem;
      }
    }
    & .icon {
      margin: auto;
      margin-left: 0.5rem;
      font-size: 2rem;
      color: #a5a5a5;
    }
    input {
      width: 100%;
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
  & .content {
    width: 100%;
    max-width: 1800px;
    overflow-x: hidden;
    &.inview {
      width: 100%;
      max-width: 1800px;

      position: relative;
      //margin-top: 80px;
    }
  }
  .navMain {
    display: block;
    &.inview {
      animation: slide-hide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      @keyframes slide-hide {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
    }
    @media (max-width: 1024px) {
      visibility: hidden;
      height: 0;
      width: 0;
      left: 0;
    }
  }
  & .nav {
    display: none;
    &.inview {
      position: fixed;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      padding-top: 1rem;
      z-index: 27;
      box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.15);
      height: 65px;
      // height 50px;
      -webkit-animation: slide-in-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: slide-in-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      max-width: 1800px;
      @media (min-width: 1800px) {
        margin: auto;
      }
      @-webkit-keyframes slide-in-top {
        0% {
          -webkit-transform: translateY(-1000px);
          transform: translateY(-1000px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes slide-in-top {
        0% {
          -webkit-transform: translateY(-1000px);
          transform: translateY(-1000px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
    @media (max-width: 1024px) {
      visibility: hidden;
      height: 0;
      width: 0;
      left: 0;
    }
  }
  & .sidebar {
    display: none;
    position: relative;

    // width: 30vw;
    & .shadow {
      background-color: #0202028d;
      position: fixed;
      z-index: 45;
      height: 100vh;
      width: 100%;
      right: 0;
      cursor: pointer;
    }
  }
  @media (max-width: 1024px) {
    // background-color: #464646;
    display: inline-flex;
    position: relative;
    & .sidebar {
      --webkit-animation: slide-in-left 0.5s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      z-index: 32;

      background-color: #464646;

      /* position: absolute; */
      & .bars {
        position: relative;
        width: 350px;
        //  background-color: red;
        z-index: 46;
        -webkit-animation: slide-in-left 0.5s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
      &.active {
        display: block;
        background-color: #464646;
        width: 0px;
      }
      @-webkit-keyframes slide-in-left {
        0% {
          -webkit-transform: translateX(-1000px);
          transform: translateX(-1000px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slide-in-left {
        0% {
          -webkit-transform: translateX(-1000px);
          transform: translateX(-1000px);
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
  & .bottomNav {
    display: none;
    background-color: #fff;
    padding: 1rem;
    position: fixed;
    z-index: 25;
    height: 60px;
    @media (max-width: 768px) {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100vw;
      &.inview {
        display: flex;
        -webkit-animation: slide-in-bottom 0.5s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          both;
        @-webkit-keyframes slide-in-bottom {
          0% {
            -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-bottom {
          0% {
            -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
      box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.15);
      & .wrap {
        width: 100%;
        & nav {
          width: 90%;
          display: inline-flex;
          justify-content: center;
          margin: auto;
          & span {
            margin: auto;
            justify-content: center;
            color: var(--obanana-secondary-color);
            cursor: pointer;
            &:hover {
              color: var(--obanana-dark-color-hover);
            }
            & .i {
              display: flex;
              margin: auto;
              font-size: 30px;
            }
            & p {
              margin: 5px auto;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`;

export default MainCon;
