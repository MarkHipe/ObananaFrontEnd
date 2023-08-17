import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineUnorderedList,
  AiFillThunderbolt,
  AiOutlineTag,
} from "react-icons/ai";
import { TfiAngleDown } from "react-icons/tfi";

import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const navs = [
  {
    name: "Home",
  },
  {
    name: "Sell On Obanana",
  },
  {
    name: "Feedback",
  },
  {
    name: "FAQs",
  },
  {
    name: "My Account",
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

const SideNav = () => {
  const [activeTab, setactiveTab] = useState("home");
  const [active, setActive] = useState("Home");
  const [activeCategory, setActiveCategory] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState("");

  const [activeSubLinks, setActiveSubLinks] = useState("");
  return (
    <Con>
      <div className="navCon">
        <div className="left">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              //value={"name"}
              // onChange={(e) => setName(e.target.value)}
            />
            <FiSearch className="icon" />
          </div>
          <div className="tabWrap">
            <div
              className={activeTab === "home" ? "tab active" : "tab"}
              onClick={() => {
                setactiveTab("home");
              }}
            >
              Main Menu
            </div>
            <div
              className={activeTab === "categories" ? "tab active" : "tab"}
              onClick={() => {
                setactiveTab("categories");
              }}
            >
              Categories
            </div>
          </div>
          <div className="catCon">
            <div
              className={
                activeTab === "categories" ? "categories active" : "categories"
              }
            >
              <div
                className={activeCategory === true ? "popUp active" : "popUp"}
                onMouseLeave={() => {
                  setActiveCategory(false);
                }}
              >
                <div className="nestPop">
                  {categories.map((cat, i) => {
                    return (
                      <div className="nestWrap">
                        <div className="nestLinks">
                          <span
                            className={
                              activeSubCategory === cat.catName ? "active" : ""
                            }
                          >
                            <p>{cat.catName}</p>
                            {activeSubCategory === cat.catName ? (
                              <FaAngleDown
                                className="icon"
                                onClick={() => {
                                  setActiveSubCategory("");
                                }}
                              />
                            ) : (
                              <FaAngleRight
                                className={
                                  activeSubCategory === cat.catName
                                    ? "icon active"
                                    : "icon"
                                }
                                onClick={() => {
                                  if (activeSubCategory !== cat.catName) {
                                    setActiveSubCategory(cat.catName);
                                  } else {
                                    setActiveSubCategory("");
                                  }
                                }}
                              />
                            )}
                          </span>
                        </div>
                        <div
                          className={
                            activeSubCategory === cat.catName &&
                            activeTab === "categories"
                              ? "linksWrap active"
                              : "linksWrap"
                          }
                        >
                          {cat?.subCategory?.map((sub, i) => {
                            return (
                              <div className="links">
                                <span>
                                  <h1>{sub.subName} </h1>
                                  {activeSubLinks === sub.subName ? (
                                    <FaAngleDown
                                      onClick={() => {
                                        setActiveSubLinks("");
                                      }}
                                    />
                                  ) : (
                                    <FaAngleRight
                                      className={
                                        activeSubCategory === sub.subName
                                          ? "icon active"
                                          : "icon"
                                      }
                                      onClick={() => {
                                        if (activeSubLinks !== sub.subName) {
                                          setActiveSubLinks(sub.subName);
                                        } else {
                                          setActiveSubLinks("");
                                        }
                                      }}
                                    />
                                  )}
                                </span>

                                <ul
                                  className={
                                    activeSubLinks === sub.subName
                                      ? "active"
                                      : ""
                                  }
                                >
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
            </div>
          </div>
          <div
            className={activeTab === "home" ? "navLinks active" : "navLinks"}
          >
            {navs.map((link, index) => (
              <div
                key={index}
                className={active === link.name ? "navLink active" : "navLink"}
                onClick={() => {
                  setActive(link.name);
                }}
              >
                {link.name}
              </div>
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
      </div>
    </Con>
  );
};
const Con = styled.div`
  width: 350px;
  position: relative;
  z-index: 34;
  background-color: #464646;
  padding-top:3rem;
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  //  width: 100vw;
  color: var(--obanana-dark-color);
  & .navCon {
    width: 350px;
    margin: auto;
    //  background-color: #ff9d2d;
    color: #fff;
    height: 100vh;
    position: relative;
    //  z-index:30;
    padding: 2rem 1rem;
    top: 0px;
    left: 0;

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
    & .tabWrap {
      display: inline-flex;
      color: #fff;
      margin: auto;
      margin-top: 2rem;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      & .tab {
        border-bottom: 2px solid #949494;
        padding: 0.5rem 1rem;
        margin: auto;
        margin-bottom: 1rem;
        font-size: 1.05rem;
        color: #fff;
        cursor: pointer;
        &:hover {
          color: #ff9d2d;
        }
        &.active {
          border-bottom: 2px solid #ff9d2d;
        }
      }
    }
    & .left {
      -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      max-width: 300px;
      display: flex;
      flex-direction: column;
      & .categories {
        visibility: hidden;
        height: 0;
        // width: 0;
        color: #fff;
        &.active {
          visibility: visible;
          height: auto;
          width: auto;
        }
        & .nestWrap {
          & .nestLinks {
            & span {
              display: inline-flex;
              justify-content: space-between;
              width: 280px;
              padding: 10px 20px;
              cursor: pointer;
              & p {
                margin: auto 0rem;
                text-align: left;
              }
            }
            border-bottom: 1px solid #c9c9c99b;
            &:hover {
              border-bottom: 1px solid #ff9d2d;
            }
          }
        }
        & .linksWrap {
          visibility: hidden;
          display: none;
          cursor: pointer;
          &.active {
            visibility: visible;
            width: auto;
            transition: all 0.3s cubic-bezier(0.95, 0.59, 0.07, 0.94);
            display: block;
          }
          & .links {
            margin: 0;
            padding: 10px 20px;
            margin-left: 1rem;
            height: auto;
            justify-content: center;
            align-items: center;
            display: block;
            justify-content: space-between;
            width: 100%;
            & span {
              display: inline-flex;
              width: 250px;
              justify-content: space-between;
              & h1 {
                color: #fff;
                font-size: 1rem;
                font-weight: 100;
                margin: 0;
              }
            }
            & ul {
              visibility: hidden;
              display: none;
              &.active {
                visibility: visible;
                height: auto;
                width: auto;
                display: block;
              }
              & li {
                list-style: none;
                padding: 5px 20px;
                cursor: pointer;
                &:hover {
                  color: #ff9d2d;
                }
                & h1 {
                  color: #fff;
                  font-size: 1rem;
                }
              }
            }
          }
        }
      }
      & .navLinks {
        flex-direction: column;
        width: 100%;
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
            color: #ff9d2d;
            border-bottom: 2px solid;
          }
        }
      }
    }
    & .right {
      visibility: hidden;
    }
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
`;
export default SideNav;
