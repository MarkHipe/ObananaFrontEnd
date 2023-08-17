import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CategoriesImg } from "../../components/home/banners/bannerAssets/categories";
import styled from "styled-components";

const shops = [
  {
    logo: "https://obanana.com/wp-content/uploads/2021/12/0-02-06-a9806b31b49bf54137b64f30ba62d54dcba04d93c59c7ee7ff03a8dc6269c7ea_1c6da9243f13dc.jpg",
    shopName: "Sweetella",
    rating: 5,
    images: [
      "https://obanana.com/wp-content/uploads/2021/12/Crazy-Cap-Gen-II_2-300x300.png",
      "https://obanana.com/wp-content/uploads/2021/12/Color-White-e1647848675455-300x300.jpg",
      "https://obanana.com/wp-content/uploads/2021/12/Color-Black-e1647849154419-300x300.jpg",
    ],
  },
  {
    logo: "https://obanana.com/wp-content/uploads/2021/12/0-02-06-a9806b31b49bf54137b64f30ba62d54dcba04d93c59c7ee7ff03a8dc6269c7ea_1c6da9243f13dc.jpg",
    shopName: "Sweetella",
    rating: 2,
    images: [
      "https://obanana.com/wp-content/uploads/2021/12/Crazy-Cap-Gen-II_2-300x300.png",
      "https://obanana.com/wp-content/uploads/2021/12/Color-White-e1647848675455-300x300.jpg",
      "https://obanana.com/wp-content/uploads/2021/12/Color-Black-e1647849154419-300x300.jpg",
    ],
  },
  {
    logo: "https://obanana.com/wp-content/uploads/2021/12/0-02-06-a9806b31b49bf54137b64f30ba62d54dcba04d93c59c7ee7ff03a8dc6269c7ea_1c6da9243f13dc.jpg",
    shopName: "Sweetella",
    rating: 1,
    images: [
      "https://obanana.com/wp-content/uploads/2021/12/Crazy-Cap-Gen-II_2-300x300.png",
      "https://obanana.com/wp-content/uploads/2021/12/Color-White-e1647848675455-300x300.jpg",
      "https://obanana.com/wp-content/uploads/2021/12/Color-Black-e1647849154419-300x300.jpg",
    ],
  },
  {
    logo: "https://obanana.com/wp-content/uploads/2021/12/0-02-06-a9806b31b49bf54137b64f30ba62d54dcba04d93c59c7ee7ff03a8dc6269c7ea_1c6da9243f13dc.jpg",
    shopName: "Sweetella",
    rating: 5,
    images: [
      "https://obanana.com/wp-content/uploads/2021/12/Crazy-Cap-Gen-II_2-300x300.png",
      "https://obanana.com/wp-content/uploads/2021/12/Color-White-e1647848675455-300x300.jpg",
      "https://obanana.com/wp-content/uploads/2021/12/Color-Black-e1647849154419-300x300.jpg",
    ],
  },
  {
    logo: "https://obanana.com/wp-content/uploads/2021/12/0-02-06-a9806b31b49bf54137b64f30ba62d54dcba04d93c59c7ee7ff03a8dc6269c7ea_1c6da9243f13dc.jpg",
    shopName: "Sweetella",
    rating: 4,
    images: [
      "https://obanana.com/wp-content/uploads/2021/12/Crazy-Cap-Gen-II_2-300x300.png",
      "https://obanana.com/wp-content/uploads/2021/12/Color-White-e1647848675455-300x300.jpg",
      "https://obanana.com/wp-content/uploads/2021/12/Color-Black-e1647849154419-300x300.jpg",
    ],
  },
  {
    logo: "https://obanana.com/wp-content/uploads/2021/12/0-02-06-a9806b31b49bf54137b64f30ba62d54dcba04d93c59c7ee7ff03a8dc6269c7ea_1c6da9243f13dc.jpg",
    shopName: "Sweetella",
    rating: 1,
    images: [
      "https://obanana.com/wp-content/uploads/2021/12/Crazy-Cap-Gen-II_2-300x300.png",
      "https://obanana.com/wp-content/uploads/2021/12/Color-White-e1647848675455-300x300.jpg",
      "https://obanana.com/wp-content/uploads/2021/12/Color-Black-e1647849154419-300x300.jpg",
    ],
  },
  {
    logo: "https://obanana.com/wp-content/uploads/2021/12/0-02-06-a9806b31b49bf54137b64f30ba62d54dcba04d93c59c7ee7ff03a8dc6269c7ea_1c6da9243f13dc.jpg",
    shopName: "Sweetella",
    rating: 0,
    images: [
      "https://obanana.com/wp-content/uploads/2021/12/Crazy-Cap-Gen-II_2-300x300.png",
      "https://obanana.com/wp-content/uploads/2021/12/Color-White-e1647848675455-300x300.jpg",
      "https://obanana.com/wp-content/uploads/2021/12/Color-Black-e1647849154419-300x300.jpg",
    ],
  },
  {
    logo: "https://obanana.com/wp-content/uploads/2021/12/0-02-06-a9806b31b49bf54137b64f30ba62d54dcba04d93c59c7ee7ff03a8dc6269c7ea_1c6da9243f13dc.jpg",
    shopName: "Sweetella",
    rating: 5,
    images: [
      "https://obanana.com/wp-content/uploads/2021/12/Crazy-Cap-Gen-II_2-300x300.png",
      "https://obanana.com/wp-content/uploads/2021/12/Color-White-e1647848675455-300x300.jpg",
      "https://obanana.com/wp-content/uploads/2021/12/Color-Black-e1647849154419-300x300.jpg",
    ],
  },
];

const ShopSlides = () => {
  const [hover, sethover] = useState();
  return (
    <Con>
     
    
      <div className="content">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={7}
          navigation
          loop={true}
          pagination={{ clickable: true }}
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
              slidesPerView: 3,
            },
            768: {
              spaceBetween: 0,
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1124: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            1399: {
              slidesPerView: 7,
              spaceBetween: 0,
            },
            1609: {
              slidesPerView: 8,
              spaceBetween: 0,
            },
          }}
          className="con"
        >
          {shops.map((img, i) => {
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
                  <div className="top">
                    <img src={img.logo} alt="" />
                    <div className="shopName">
                      <h4>{img.shopName}</h4>
                      <div className="iconCon">
                        <FaStar
                          className={img.rating >= 1 ? "star active" : "star"}
                        />
                        <FaStar
                          className={img.rating >= 2 ? "star active" : "star"}
                        />
                        <FaStar
                          className={img.rating >= 3 ? "star active" : "star"}
                        />
                        <FaStar
                          className={img.rating >= 4 ? "star active" : "star"}
                        />
                        <FaStar
                          className={img.rating >= 5 ? "star active" : "star"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <img src={img.images[0]} alt="" />
                    <img src={img.images[1]} alt="" />
                    <img src={img.images[2]} alt="" />
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
  //padding: 1rem;
  padding-top: 2rem;
  width: 100%;
  // width: 100%;
  height: 200px;
  & .swiper-button-prev {
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #33333397;
    background-color: rgba(238, 238, 238, 0.562);
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.836);
    object-fit: cover;
    height: 25px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    width: 25px;
    padding: 10px;
    font-weight: 600;
    // display: none;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    @media (min-width: 550px) and (max-width: 750px) {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 550px) {
      width: 15px;
      height: 15px;
      // object-fit: contain;
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 22px;
    // display: none;
  }
  & .swiper-pagination-bullet {
    background-color: var(--obanana-primary-color);
    height: 10px;
    width: 10px;
    animation: width-shrink 0.3s ease-in-out both;

    &.swiper-pagination-bullet-active {
      width: 25px;
      border-radius: 25px;
      animation: width-expand 0.3s ease-in-out both;
    }
  }

  @keyframes width-expand {
    0% {
      -webkit-width: 10px;
      width: 10px;
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
      -webkit-width: 10px;
      width: 10px;
    }
  }
  & .con {
    width: 97vw;
    margin: auto;
    position: relative;
    z-index: 10;
    height: 230px;
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
      height: 150px;
      width: 180px;
      border-radius: 5px;
      position: relative;
      margin: 1rem auto;
      cursor: pointer;
      border: 1px solid #aaaaaa;
      display: flex;
      flex-direction: column;
      &:hover {
        border: 1px solid var(--obanana-primary-color);
      }
      & .top {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        & img {
          height: 50px;
          width: 50px;
          border-radius: 5px;

          background-color: red;
        }
        & .shopName {
          margin: 0 10px;
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          & h4 {
            font-size: 0.8rem;
            text-align: center;
          }
          & .iconCon {
            color: #b3b3b3;
            & .star.active {
              color: #ffd900;
            }
          }
        }
      }
      & .bottom {
        display: flex;
        height: 50%;
        justify-content: center;
        align-items: center;
        & img {
          height: 40px;
          width: 40px;
          background-color: red;
          border-radius: 5px;
          margin: 0 3px;
        }
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

export default ShopSlides;
