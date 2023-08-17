import React, { useState } from "react";
import styled from "styled-components";
import { product } from "./productsAssets/products";
import { FaBalanceScale, FaRegHeart, FaAngleRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

const navs = [
  "Groceries & Merchandise",
  "Food & Beverages",
  "Construction Services",
  "Apparels",
  "Home & Living",
];

const TopCategories = () => {
  const [prodHover, setprodHover] = useState();
  const navigate = useNavigate();
  return (
    <Con>
      {" "}
      <div className="header">
        <h1>Top Categories</h1>
      </div>
      <div className="prodWrap">
        <div className="categoryLists">
          <div className="navLatest">
            {" "}
            {navs.map((nav, i) => {
              return (
                <span key={i}>
                  <FaRegHeart className="heart" />
                  <div className="left">
                    <h6>{nav}</h6>
                    <FaAngleRight className="angle" />
                  </div>
                </span>
              );
            })}
          </div>
        </div>
        <div className="productsCon">
          <div className="contentsCon">
            <Swiper
              modules={[Grid, Pagination]}
              slidesPerView={5}
              grid={{
                rows: 2,
              }}
              spaceBetween={30}
              //  pagination={{
              //   clickable: true,
              // }}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 576px
                1: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                576: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                992: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                  },
                },
                1299: {
                  slidesPerView: 4,
                  grid: {
                    rows: 2,
                  },
                  spaceBetween: 10,
                },
                1596: {
                  slidesPerView: 5,
                  grid: {
                    rows: 2,
                  },
                },
                1816: {
                  slidesPerView: 6,
                  grid: {
                    rows: 2,
                  },
                },
              }}
            >
              {product.map((prod, i) => {
                return (
                  <SwiperSlide className="perSlide">
                    <div
                      className="prodCard"
                      onMouseOver={() => {
                        setprodHover(i);
                      }}
                      onMouseLeave={() => {
                        setprodHover();
                      }}
                      onClick={()=>{navigate(`/product/${prod.productName}`)}}
                    >
                      <FiSearch
                        className={prodHover === i ? "search active" : "search"}
                      />
                      {prodHover === i && prod.img.length > 1 ? (
                        <img src={prod.img[1]} alt="" />
                      ) : (
                        <img src={prod.img[0]} alt="" />
                      )}
                      <div
                        className={
                          prodHover === i ? "details active" : "details"
                        }
                      >
                        <p>{prod.productName}</p>
                        <h4>₱{prod.price}.00</h4>

                        <div className="icon">
                          <AiOutlineHeart
                            className={prodHover === i ? "icon active" : "icon"}
                          />
                          <FaBalanceScale
                            className={prodHover === i ? "icon active" : "icon"}
                          />
                        </div>
                      </div>
                    </div>{" "}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  // padding: 1rem 1rem;
  height: auto;
  width: 95%;
  // position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    margin-left: 2rem;
  }
  & .header {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
  & .prodWrap {
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    //  padding: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
      width: 95vw;
    }
    // width: 100%;
    & .categoryLists {
      width: 500px !important;
      //max-width: 320px;
      padding: 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 95vw !important;
        margin: auto 0;
        max-width: none;
      }
      & .navLatest {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        border: 1px solid #c9c9c933;
        margin-top: 2rem;
        padding: 2rem 0.5rem;
        border-radius: 3px;
        max-width: 320px;
        @media (max-width: 1092px) {
          width: 20vw;
          margin: auto;
          max-width: none;
        }
        @media (max-width: 768px) {
          width: 100vw !important;
          padding: 2rem 1rem;
          margin: 1rem 5px;
        }
        & span {
          display: flex;
          //  align-items: center;
          justify-content: space-between;
          width: 90%;
          // margin: auto 1rem;
          padding: 1.5rem;
          & .heart {
            margin-left: -1rem;
            width: 1rem;
            height: 1rem;
          }
          & .left {
            display: flex;
            justify-content: space-between;

            width: 80%;
            & .angle {
            }
            & h6 {
              margin: auto 0;
              font-size: 0.8rem;
              font-weight: 400;
              text-align: left;
              &:hover {
                cursor: pointer;
                color: var(--obanana-primary-color-hover);
              }
            }
          }
        }
      }
    }
    & .productsCon {
      width: 75vw;
      height: auto;
      margin: 0 0rem;
      //margin-left: 3rem;
      @media (min-width: 1800px) {
        width: 1400px;
        margin: 0;
      }
      @media (max-width: 768px) {
        width: 95vw;
        margin: 0;
      }
      & .contentsCon {
        width: 75vw;
        height: 600px;
        margin: 0;
        @media (max-width: 768px) {
          height: 650px;
          width: 95vw;
        }
        @media (max-width: 470px) {
          height: 500px;
        }
        @media (max-width: 350px) {
          height: 400px;
        }
        & .mySwiper {
          height: 100%;
          width: 70vw;
          margin-top: 2rem;
          position: relative;
          display: flex;
          z-index: 19;
          justify-content: center;
          align-items: center;
          @media (min-width: 1800px) {
            width: 1400px;
            margin: 0;
          }
          @media (max-width: 768px) {
            width: 95vw;
            margin: 0;
          }
          & .swiper-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75vw !important;
            @media (max-width: 768px) {
              width: 95vw !important;
              margin: 0;
            }
          }
          & .perSlide {
            height: calc((100% - 40px) / 2) !important;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }
        }
        & .prodCard {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: auto;

          @media (max-width: 992px) {
            width: 95vw;
          }
          @media (max-width: 768px) {
            width: 40vw;
            height: auto;
            object-fit: cover;
          }
          & img {
            cursor: pointer;
            height: 200px;
            width: 200px;
            margin: auto;
            position: relative;
            z-index: 20;
            object-fit: cover;
            @media (max-width: 768px) {
              width: 40vw;
             // height: auto;
              object-fit: cover;
            }
          }
          & .search {
            position: absolute;
            align-self: flex-end;
            top: 1rem;
            border-radius: 100%;
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
            padding: 0.5rem;
            background-color: #fff;
            visibility: hidden;
            z-index: 25;
            &.active {
              visibility: visible;
            }
          }
          & .details {
            padding: 10px;
            background-color: #fff;
            //animation: slide-down 4s ease-in-out;

            position: relative;
            z-index: 23;
            @media (max-width: 768px) {
              width: 40vw;
              height: auto;
              object-fit: cover;
            }
            &.active {
              position: relative;
              animation: slide-up 0.5s ease-in-out both;
              top: -3rem;
              @keyframes slide-up {
                0% {
                  top: 0rem;
                }

                100% {
                  top: -2rem;
                }
              }
            }
            & p {
              font-size: 0.8rem;
              margin: 0 10px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
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
              height: 0;
              &.active {
                height: auto;
                visibility: visible;
                -webkit-animation: slide-in-left 0.3s
                  cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                animation: slide-in-left 0.5s
                  cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

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
    }
  }
`;
export default TopCategories;
