import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaBalanceScale, FaRegHeart, FaAngleRight } from "react-icons/fa";

import { product } from ".././home/productsAssets/products";

const RelatedProducts = () => {
  const [prodHover, setprodHover] = useState();
  return (
    <Con>
     <div className="heading">
         <h1>Featured Products</h1>
     </div>
      <div className="productsCon">
        <div className="contentsCon">
          <Swiper
            modules={[Pagination]}
            slidesPerView={5}
            // spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 576px
              1: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },

              1196: {
                slidesPerView: 5,
              },
              1816: {
                slidesPerView: 6,
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
                      className={prodHover === i ? "details active" : "details"}
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
    </Con>
  );
};
const Con = styled.div`
  width: 98vw;
  margin: auto;
 & .heading{
    width: 98%;
    margin: auto;
    border-bottom: 1px solid #eeee;
        padding-bottom: .5rem;
    & h1 {
    margin: 1rem;
    font-size: 20px;
    font-weight: 900;
    
    //color: var(--obanana-ptb-subtitle-color);
  }
 }
  & .productsCon {
    //margin-left: 3rem;
    @media (max-width: 768px) {
      width: 95vw;
      margin: 0;
    }
    & .contentsCon {
      @media (max-width: 768px) {
        height: 650px;
        width: 95vw;
      }
      & .mySwiper {
        width: 90vw;
        margin-top: 2rem;
        @media (max-width: 768px) {
          width: 95vw;
          margin: 0;
        }
        & .swiper-wrapper {
          width: 75vw !important;
          @media (max-width: 768px) {
            width: 95vw !important;
            margin: 0;
          }
        }
        & .perSlide {
          // height: calc((100% - 40px) / 2) !important;
          // width: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          /* -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center; */
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
        & img {
          cursor: pointer;
          height: 200px;
          width: 200px;
          margin: auto;
          position: relative;
          object-fit: cover;

          z-index: 20;
          @media (max-width: 768px) {
            width: 200px;
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
  }
`;
export default RelatedProducts;
