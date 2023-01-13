import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { GoMail } from "react-icons/go";
import { SlEarphones } from "react-icons/sl";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoHelpBuoyOutline } from "react-icons/io5";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const item = [
  {
    icon: <GoMail className="icon" />,
    head: "E-mail Address",
    sub: (
      <p>
        marketing@obanana.com
        <br />
        sales@obanana.com
      </p>
    ),
  },
  {
    icon: <SlEarphones className="icon" />,
    head: "Phone Number",
    sub: <p>(+63) 917 722 6002</p>,
  },
  {
    icon: <HiOutlineLocationMarker className="icon" />,
    head: "Address",
    sub: (
      <p>
        PMI Tower Cabanillas Corner,
        <br />
        273 Pablo Ocampo Sr. Ext, Makati,
        <br />
        1203 Metro Manila, Philippines
      </p>
    ),
  },
  {
    icon: <IoHelpBuoyOutline className="icon" />,
    head: "Technical/ Ticket Support",
    sub: (
      <p>
        technical.support@obanana.com,
        <br />
        web.master@obanana.com,
      </p>
    ),
  },
];

const Slider = () => {
  return (
    <Con>
      {" "}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        className="swiper"
        slidesPerView={4}
        //  centeredSlides={true}
        breakpoints={{
          1: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {item?.map((img, i) => {
          return (
            <SwiperSlide className="perSlide" style={{ width: "100%" }} key={i}>
              <div className="card">
                {img.icon}
                <div className="label">
                  <h4>{img.head}</h4>
                  <p>{img.sub}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Con>
  );
};

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
      flex-direction: column;
      border-right: 1px solid #b4b4b489;
      & .icon {
        font-size: 3.5rem;
        margin: auto 1rem;
        color: #336699;
        margin-top: 1rem;
        
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
          position: relative;
          top: -1.5rem;
          text-align: center;
        }
      }
    }
  }
`;

export default Slider;
