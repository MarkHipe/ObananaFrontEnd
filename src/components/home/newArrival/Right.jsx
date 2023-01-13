import React, { useState } from "react";
import styled from "styled-components";
import { product } from "../productsAssets/products";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
const Right = () => {
  const [prodHover, setprodHover] = useState();

  return (
    <Con>
      <div className="header">
        <h2>NEW ARRIVALS</h2>
        <div className="navIcons">
          <TfiAngleLeft />
          <TfiAngleRight />
        </div>
      </div>
      <div className="contents">
        <Swiper
          modules={[Grid, Pagination]}
          slidesPerView={1}
          grid={{
            rows: 3,
          }}
          spaceBetween={30}
          className="mySwiper"
        >
          {product.map((prod, i) => {
            return (
              <SwiperSlide className="perSlide">
                <div className="prodCard">
                  {prodHover === i && prod.img.length > 1 ? (
                    <img src={prod.img[1]} alt="" />
                  ) : (
                    <img src={prod.img[0]} alt="" />
                  )}
                  <div
                    className={prodHover === i ? "details active" : "details"}
                  >
                    <div className="map">
                      <p>{prod.productName}</p>
                      <h4>₱{prod.price}.00</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Con>
  );
};

const Con = styled.div`
  width: 28vw;
  height: 680px;
  padding: auto 16px;
  @media (max-width: 1480px) {
    width: 28vw;
  }
  @media (max-width: 1320px) {
    width: 30vw;
  }
  @media (max-width: 992px) {
    width: 48vw;
  }
  @media (max-width: 768px) {
    width: 95vw;
  }
  & .header {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 1rem 1rem;
    height: 30px;
    & h2 {
      font-size: 18px;
      font-weight: 900;
    }
    & .navIcons {
      margin-right: 1rem;
    }
  }
  & .contents {
    & .mySwiper {
      height: 550px;
      width: 90%;
      margin-top: 0rem;
      position: relative;
      z-index: 19;
      @media (max-width: 768px) {
        height: 910px;
        margin-top: -1rem;
      }

      & .perSlide {
        height: calc((100% - 160px) / 3) !important;
        //  width: 90%;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin: 10px 0;
        & .prodCard {
          display: inline-flex;
          height: 120px;
          & img {
            height: 159.13px;
            width: 159.13px;
            @media (max-width: 768px) {
              height: 271.13px;
              width: 271.13px;
            }
          }
          & p {
            margin-top: 2rem;
            font-size: 13px;
          }
          & h4 {
            font-size: 15px;
            position: relative;
            top: -1rem;
            color: red;
          }
          & .details {
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 1rem;
            // align-items: center;
            @media (max-width: 768px) {
              & .map {
                margin: auto;
                margin-top: 45%;
              }
            }
          }
        }
      }
    }
  }
`;

export default Right;
