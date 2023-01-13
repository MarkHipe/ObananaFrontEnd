import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdOutlineLocalShipping } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const item = [
  {
    link: "https://obanana.com/wp-content/uploads/2022/07/Banner-2_1658888265-2048x1059.jpg",
    btn: "BUY NOW",
  },
  {
    link: "https://obanana.com/wp-content/uploads/2022/07/banner-1-3-2048x1059.jpg",
    btn: "SHOP NOW",
  },
  {
    link: "https://obanana.com/wp-content/uploads/2022/07/Banner-3_1658888265-2048x1059.jpg",
    btn: "DISCOVER NOW",
  },
];

const Slidebanner = () => {
  return (
    <Con>
      {" "}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
         spaceBetween={30}
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
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {item?.map((img, i) => {
          return (
            <SwiperSlide className="perSlide" style={{ width: "100%" }} key={i}>
              <div className="card">
              <img src={img.link} alt="" />
                <div className="label">
                  <p>{img.btn}</p>
                </div>
              </div>
            </SwiperSlide>
            //  <SwiperSlide>1</SwiperSlide>
          );
        })}
      </Swiper>
    </Con>
  );
};

const Con = styled.div`
width: 99vw;
margin: auto ;
display: flex;
justify-content: center;
align-items: center;
  & .swiper {
    position: relative;
    width: 95%;
    margin: auto;
    // padding: 20px;
    box-sizing: border-box;
    //border: 1px solid #b4b4b489;
    & .perSlide {
      & .card {
        margin: 1rem auto;
       // height: 250px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--obanana-dark-color);
        @media (max-width: 768px) {
          flex-direction: column;
        }
      //  border-right: 1px solid #b4b4b489;
        & img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius:10px ;
        }
        & .label {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
          & h4 {
            // margin: auto;
          }
          & p {
            position: absolute;
            bottom: 3rem;
            right: 2rem;
            background: #ffffffdf;
            border-radius: 5px;
            padding: 0.7rem 1.2rem;
            cursor: pointer;
            &:hover {
              background-color: #ba3f02bc;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

export default Slidebanner;
