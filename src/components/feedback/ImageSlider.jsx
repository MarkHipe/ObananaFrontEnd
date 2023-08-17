import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styled from "styled-components";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
const featureCard = [
  {
    image: (
      <img
        src="https://obanana.com/wp-content/uploads/2022/03/CLIENTS-06.jpg"
        className="iconImg" alt=""
      />
    ),
    information: "Christian Nicole Nakazawa",
    position: "PREMIUM LANDS CORP.",
    messageInfo:
      "Obanana is a digital platform that support the business in discovering their full potentials. It also magnifies the possibility of attaining the company's goal of  providing premium developments to our stakeholders and clienteles, that will develop a positive impact to their well-being. We believe that Obanana will support us to reach and communicate to our potential market, digitally, in the new age.",
  },
  {
    image: (
      <img
        src="https://obanana.com/wp-content/uploads/2022/03/CLIENTS-07.jpg"
        className="iconImg" alt=""
      />
    ),
    information: "Berna Grace Dianne Nadal",
    position: "PREMIUM MEGASTRUCTURES INC.",
    messageInfo:
      "obanana's online platform services assure that the Client Leads, payment Solutions, Monitoring of projects, and Construction Material needs of Premium Megastructures Inc. are being centralized, making it a prime one-stop-shop for every client and business partners. ",
  },
  {
    image: (
      <img
        src="https://obanana.com/wp-content/uploads/2022/03/CLIENTS-08.jpg"
        className="iconImg" alt=""
      />
    ),
    information: "Trisha Ellamarie Mateo",
    position: "MEGASHIP BUILDERS INC.",
    messageInfo:
      "As B2B platform, Obanana can help to optimize the resources and opportunities the exhibit the services of Megaship Builders Inc. and gives guaranteed customer satisfaction as one of the main goals of MBI. ",
  },
  {
    image: (
      <img
        src="https://obanana.com/wp-content/uploads/2022/03/CLIENTS-09.jpg"
        className="iconImg"
      />
    ),
    information: "Czarina de Chavez",
    position: "INDUSTRY MOVERS CORP.",
    messageInfo:
      "Obanana allows industry Movers Corp. to scale up easier for advertisinga and marketing. These convenience can provide flexibility for customers. ",
  },
];
export default function App() {
  return (
    <Con>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        // centeredSlides={true}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          512: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
      >
        {featureCard.map((item, i) => {
          return (
            <SwiperSlide>
              <div className="Concard">
                <div className="right">
                  <div className="picture">{item.image}</div>
                  <div className="infoCard">
                    <div className="name">{item.information}</div>
                    <div className="positionInfo">{item.position}</div>
                  </div>
                </div>
                <div className="message">{item.messageInfo}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Con>
  );
}
const Con = styled.div`
& .swiper{
  padding: 1rem 0;
  margin-right: 1rem;
}
  & .Concard {
    width: 80%;
    position: relative;
    border: 1px solid #8b7f7f34;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 1rem;
    padding-top: 30px;
    margin: auto;
    display: flex;

    @media (max-width: 992px) {
      flex-direction: column;
    }
    & .right {
      /* width: 100%; */
      /* min-width: 250px; */
      width: 200px;
      display: flex;
      flex-direction: column;
      margin: 1rem auto;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 150px;
      }
      & .infoCard {
        display: flex;
        margin: auto 1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 180px;
        overflow: hidden;
        & .name {
          width: 180px;
          font-size: 0.8rem;
          font-weight: 700;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
        }
        & .positionInfo {
          white-space: nowrap;
          font-size: 0.8rem;
          width: 180px;
          text-align: center;
          text-overflow: ellipsis;
        }
      }
    }
    & img {
      margin: auto;
    }
    & .message {
      color: var(--obanana-dark-color);
      justify-content: center;
      align-items: center;
      line-height: 1.86;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: 1rem 1rem;

      text-align: center;
      font-size: 0.8rem;
      line-height: 1.4;
      white-space: wrap;
      text-overflow: ellipsis;
    }
  }

 

  & .iconImg {
    height: 7rem;
    margin-left: 45px;
  }
`;
