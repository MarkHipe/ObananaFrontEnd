import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineUnorderedList,
  AiFillThunderbolt,
  AiOutlineTag,
} from "react-icons/ai";
import { TfiAngleDown } from "react-icons/tfi";

import { FaAngleRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const navs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Sell On Obanana",
    link: "/sell-on-obanana/",
  },
  {
    name: "Feedback",
    link: "/testimonials/",
  },
  {
    name: "FAQs",
    link: "/faq/",
  },
  {
    name: "My Account",
    link: "/my-account/",
  },
];
const categories = [
  {
    catName: "Apparels & Clothings",
    subCategory: [
      {
        subName: "Men",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
      {
        subName: "Women",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
    ],
  },
  {
    catName: "Gadgets & Electronics",
    subCategory: [
      {
        subName: "Men",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
      {
        subName: "Women",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
    ],
  },
  {
    catName: "Foods & Beverages",
    subCategory: [
      {
        subName: "Men",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
      {
        subName: "Women",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
    ],
  },
];

const Nav = () => {
  const [activeTab, setactiveTab] = useState("home")
  const [active, setActive] = useState("/");
  const [activeCategory, setActiveCategory] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState("");
  return (
    <Con>
      {" "}
      <motion.div
        className="navCon"
       
      >
        <div className="left">
          <div className="catCon">
            <div
              className={
                activeCategory === true ? "categories active" : "categories"
              }
              onMouseOver={() => {
                setActiveCategory(true);
              }}
              onMouseLeave={() => {
                setActiveCategory(false);
              }}
            >
              <AiOutlineUnorderedList className="list" />{" "}
              <p>
                Our Categories{" "}
                <span>
                  <TfiAngleDown className="down" />
                </span>
                <div
                  className={activeCategory === true ? "popUp active" : "popUp"}
                  onMouseLeave={() => {
                    setActiveCategory(false);
                  }}
                >
                  <div className="nestPop">
                    {categories.map((cat, i) => {
                      return (
                        <div
                          className="nestWrap"
                          onMouseOver={() => {
                            setActiveSubCategory(cat.catName);
                          }}
                          onMouseLeave={() => {
                            setActiveSubCategory("");
                          }}
                        >
                          <div className="nestLinks">
                            <span
                              className={
                                activeSubCategory === cat.catName
                                  ? "active"
                                  : ""
                              }
                            >
                              {cat.catName}
                              <FaAngleRight
                                className={
                                  activeSubCategory === cat.catName
                                    ? "icon active"
                                    : "icon"
                                }
                              />
                            </span>
                          </div>
                          <div
                            className={
                              activeSubCategory === cat.catName
                                ? "linksWrap active"
                                : "linksWrap"
                            }
                            onMouseOver={() => {
                              setActiveSubCategory(activeSubCategory);
                            }}
                            onMouseLeave={() => {
                              setActiveSubCategory("");
                              setActiveCategory(false);
                            }}
                          >
                            {cat?.subCategory?.map((sub, i) => {
                              return (
                                <div className="links">
                                  <h1>{sub.subName}</h1>
                                  <ul>
                                    {sub?.subLinks?.map((subL, i) => {
                                      return <li>{subL.name}</li>;
                                    })}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className="navLinks">
            {navs.map((link, index) => (
              <Link to={link.link}
                key={index}
                className={active === link.link ? "navLink active" : "navLink"}
                onClick={() => {
                  setActive(link.link);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="right">
          <span>
            <AiFillThunderbolt className="icon" />
            <h1>Flash Sales</h1>
          </span>
          <span>
            <AiOutlineTag className="icon" />
            <h1>Special Offers</h1>
          </span>
        </div>
      </motion.div>
    </Con>
  );
};
const Con = styled.div`
  & .navCon {
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    text-transform: uppercase;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    width: 98%;
    color: var(--obanana-dark-color);

    & .left {
      margin-left: 1rem;
      display: flex;
      align-items: center;
      & .categories {
        display: flex;
        cursor: pointer;
        position: relative;
        z-index: 27;
        &.active {
          color: var(--obanana-primary-color-hover);
        }
        & .list {
          margin: auto 0.5rem;
          font-size: 20px;
        }
        & .down {
          font-size: 10px;
        }
        & .popUp {
          position: absolute;
          padding: 1rem;
          visibility: hidden;
          &.active {
            visibility: visible;
          }
          & .nestPop {
            //padding: 1rem;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            background-color: var(--obanana-site-bg-color);
            color: var(--obanana-dark-color);
            & .nestWrap {
              display: inline-flex;
              & .nestLinks {
                border-radius: 4px;
                & span {
                  display: inline-flex;
                  margin: 0.6rem 1rem;
                  width: 200px;
                  cursor: pointer;
                  justify-content: space-between;
                  line-height: 30px;
                  border-bottom: solid 1px;
                  &.active {
                    color: var(--obanana-primary-color-hover);
                  }
                  & .icon {
                    position: relative;
                    display: flex;
                    align-self: flex-end;
                    // float: right;
                    top: -10px;
                    // transition: 3s ease-in-out;
                    &.active {
                      transition: left 2s ease-in-out;
                      left: 5px;
                    }
                  }
                }
              }
              & .linksWrap {
                border-radius: 5px;
                position: absolute;
                //  width: 300px;
                left: 240px;
                box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);

                background-color: var(--obanana-site-bg-color);
                display: inline-flex;
                visibility: hidden;
                opacity: 0.8;
                transition: opacity 0.3s ease-in-out;
                &.active {
                  visibility: visible;
                  opacity: 1;
                }
                & .links {
                  // position: relative;
                  text-align: left;
                  margin: 0 1rem;
                  width: 130px;
                  & h1 {
                    color: var(--obanana-dark-color);
                    font-size: 1rem;
                  }
                  & ul {
                    text-align: left;
                    position: relative;
                    left: 0;
                    padding: 0;
                    margin: 1rem auto;
                    & li {
                      text-align: left;
                      list-style: none;
                      line-height: 30px;
                      cursor: pointer;

                      &:hover {
                        color: var(--obanana-primary-color-hover);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      & .navLinks {
        display: inline-flex;
        margin: auto 1rem;
        margin-left: 5rem;
        & a{
          color: var(--obanana-dark-color);
          text-decoration: none;
        }
        & .navLink {
          margin: auto 1rem;
          text-transform: capitalize;
          cursor: pointer;
          &.active {
            color: #ec7a5c;
            border-bottom: 3px solid;
          }
          &:hover {
            position: relative;
            top: -2px;
            color: #ec7a5c;
            border-bottom: 3px solid;
          }
        }
      }
    }
    & .right {
      display: flex;
      justify-content: flex-end;
      position: relative;
      left: 0;
      margin-right: 1rem;
      & span {
        display: flex;
        & .icon {
          margin: auto 1rem;
          font-size: 1.6rem;
          @media (max-width: 1168px) {
            font-size: 2rem;
          }
        }
        & h1 {
          font-size: 1rem;
          @media (max-width: 1168px) {
            visibility: hidden;
            width: 0;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    background-color: #464646;
    color: #fff;
    height: 100vh;
    position: relative;
    padding: 2rem 0;
    top: 0px;
    & .search {
      position: relative;
      display: inline-flex;
      margin: auto 1.2rem;
      height: 47px;
      width: 85%;
      position: relative;
      background-color: transparent;
      // box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
      padding: 0 1rem 0 1rem;
      font-family: inherit;
      border-radius: 15px;
      //  margin-top: 1rem;
      border-radius: 5px;
      border: 1px solid #7a7a7a;

      & .icon {
        margin: auto;
        margin-left: 0.5rem;
        font-size: 2rem;
        color: #fff;
      }
      input {
        width: 100%;
        padding: 10px;
    
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
    & .tabWrap {
      display: inline-flex;
      color: #fff;
      margin: auto;
      margin-top: 2rem;
      justify-content: center;
      align-items: center;
      & .tab {
        border-bottom: 2px solid #464646;
        padding: 0.5rem 1rem;
        margin: auto;
        margin-bottom: 1rem;
        font-size: 1.05rem;
        color: #fff;
        &.active {
          border-bottom: 2px solid var(--obanana-primary-color);
        }
      }
    }
    & .left {
      max-width: 350px;
      display: flex;
      flex-direction: column;
      & .categories {
        visibility: hidden;
        height: 0;
        width: 0;
        color: #fff;
        &.active {
          visibility: visible;
        }
      }
      & .navLinks {
        flex-direction: column;
        min-width: 500px;
        visibility: hidden;
        &.active {
          visibility: visible;
        }
        & .navLink {
          padding: 13px 1rem;
          border-bottom: 1px solid #7575757b;
          display: flex;
          color: var(--obanana-light-color);
          &.active {
            border-bottom: none;
          }
        }
      }
    }
    & .right {
      visibility: hidden;
    }
  }
`;
export default Nav;
