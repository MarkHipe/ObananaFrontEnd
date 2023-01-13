import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdOutlineLocalShipping } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styled from 'styled-components';

const item = [
  {
    icon: <MdOutlineLocalShipping className="icon" />,
    head: "Free Shipping & Returns",
    sub: "For all orders over ₱199",
  },
  {
    icon: <MdOutlineLocalShipping className="icon" />,
    head: "Free Shipping & Returns",
    sub: "For all orders over ₱199",
  },
  {
    icon: <MdOutlineLocalShipping className="icon" />,
    head: "Free Shipping & Returns",
    sub: "For all orders over ₱199",
  },
];

const BenefitsSlider = () => {
  return (
    <Con>
      {" "}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
         //  spaceBetween={50}
       // slidesPerView={3}
       // loop={true}
       // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
       // style={{ height: "auto", width: "100%" }}
        className="swiper"
      //  centeredSlides={true}
        breakpoints={{
          1: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3},
        }}
      >
        {item?.map((img, i) => {
          return (
            <SwiperSlide className="perSlide" style={{width:"100%"}} key={i}>
              <div className="card">
                {img.icon}
                <div className="label">
                  <h4>{img.head}</h4>
                  <p>{img.sub}</p>
                </div>
              </div>
            </SwiperSlide>
            //  <SwiperSlide>1</SwiperSlide>
          );
        })}
      </Swiper>
    </Con>
  );
}

const Con = styled.div`
  & .swiper {
    position: relative;
    width: 85%;
    margin: 2rem auto;
    // padding: 20px;
    box-sizing: border-box;
    border: 1px solid #b4b4b489;
    & .perSlide {
    }
    & .card {
      margin: 1rem auto;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      color: var(--obanana-dark-color);
      @media (max-width: 768px) {
        flex-direction: column;
      }
      border-right: 1px solid #b4b4b489;
      & .icon {
        font-size: 3rem;
        margin: auto 1rem;
      }
      & .label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: .9rem;
        & h4{
         // margin: auto;
        }
        & p {
          position: relative;
          top: -1.5rem;
        }
      }
    }
  }
`;

export default BenefitsSlider