import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CategoriesImg } from "../../components/home/banners/bannerAssets/categories";
import styled from "styled-components";

const Categories = () => {
  const [hover, sethover] = useState()
  return (
    <Con>
      {" "}
      <h1>Categories</h1>
      <div className="content">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={7}
          // navigation
          loop={true}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          //style={{"@media (min-width: 992px) and (max-width:1192px)":"width:90vw"}}
          breakpoints={{
            // when window width is >= 576px
            1: {
              spaceBetween: 0,
              slidesPerView: 2,
            },
            576: {
              spaceBetween: 0,
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            1199: {
              slidesPerView: 7,
            },
          }}
          className="con"
        >
          {CategoriesImg.map((img, i) => {
            return (
              <SwiperSlide>
                <div
                  className="wrapper"
                  onMouseOver={() => {
                    sethover(i);
                  }}
                  onMouseLeave={() => {
                    sethover();
                  }}
                >
                  <img
                    className={hover === i ? "img hover" : "img"}
                    style={{ height: "128px", width: "128px", margin: "auto" }}
                    src={img.images}
                    alt=""
                  />
                </div>
                <h4>{img.label}</h4>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Con>
  );
};
const Con = styled.div`
  //padding: 1rem;
  padding-top: 2rem;
  // width: 100%;
  & .con {
    //width:100%
    position: relative;
    z-index: 10;
    @media screen and (max-width: 1024px) {
      // width: 90vw;
      & .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
  & .content {
    display: flex;
    justify-content: center;
    // width: 95%;
    align-items: center;
    margin: auto;
    position: relative;
    z-index: 10;
    & h4 {
      text-align: center;
      margin: auto;
    }

    & .wrapper {
      height: 130px;
      width: 130px;
      border-radius: 100%;
      position: relative;
      margin: 1rem auto;
      cursor: pointer;
      &:hover {
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
      }
    }
    & .swiper-pagination-bullet {
      background-color: var(--obanana-primary-color);
      height: 15px;
      width: 15px;
      animation: width-shrink 0.3s ease-in-out both;

      &.swiper-pagination-bullet-active {
        width: 25px;
        border-radius: 25px;
        animation: width-expand 0.3s ease-in-out both;
      }
    }
    & .img {
      object-fit: cover;
      position: relative;
      z-index: 10;
      transition: all 0.3s cubic-bezier(0.95, 0.59, 0.07, 0.94);
      margin: auto;
      &.hover {
        transition: all 0.3s cubic-bezier(0.95, 0.59, 0.07, 0.94);
        transform: scale(0.8);
      }
    }
  }

  & h1 {
    font-size: 1.5rem;
    position: relative;
    font-weight: 900;
    margin: auto;
    text-align: center;
  }

  @keyframes width-expand {
    0% {
      -webkit-width: 15px;
      width: 15px;
    }
    50% {
      -webkit-width: 20px;
      width: 20px;
    }
    100% {
      -webkit-width: 25px;
      width: 25px;
    }
  }
  @keyframes width-shrink {
    0% {
      -webkit-width: 25px;
      width: 25px;
    }
    50% {
      -webkit-width: 20px;
      width: 20px;
    }
    100% {
      -webkit-width: 15px;
      width: 15px;
    }
  }
`;

export default Categories;
