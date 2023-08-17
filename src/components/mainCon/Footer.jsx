import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const footerLinks = [
  {
    header: "Company Profile",
    links: [
      {
        link: "",
        name: "Daily Deals",
      },
      {
        link: "",
        name: "Contact Us",
      },
    ],
  },
  {
    header: "My Account",
    links: [
      {
        link: "",
        name: "Track My Order",
      },
      {
        link: "",
        name: "View Cart",
      },
    ],
  },
  {
    header: "Customer Support",
    links: [
      {
        link: "",
        name: "Payment Methods",
      },
      {
        link: "",
        name: "Products Returns",
      },
    ],
  },
];

const logistics = [
  {
    imgLink: "https://obanana.com/wp-content/uploads/2021/06/logistics-1.png",
  },
];

const shortcutLinks = [
  {
    header: "Apparels & Clothing",
    links: [
      {
        link: "",
        name: "Men's Clothing",
      },
      {
        link: "",
        name: "Kids Clothing",
      },
      {
        link: "",
        name: "Dresses",
      },
      {
        link: "",
        name: "Footwear",
      },
      {
        link: "",
        name: "Bags & Accessories",
      },
      {
        link: "",
        name: "View all",
      },
    ],
  },
  {
    header: "Gadgets & Electronics",
    links: [
      {
        link: "",
        name: "Air Condition",
      },
      {
        link: "",
        name: "Mini Fan",
      },
      {
        link: "",
        name: "Refrigerator",
      },
      {
        link: "",
        name: "Data Cables",
      },
      {
        link: "",
        name: "Security Camera",
      },
      {
        link: "",
        name: "View all",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Con>
      <div className="top">
        <div className="contacts">
          <img
            src="https://obanana.com/wp-content/uploads/2022/03/new-logo.png"
            alt=""
          />
          <p>Questions? Call Us 24/7</p>
          <h1>+63 917 722 6002</h1>
          <p>Register now to get updates on promos & vouchers.</p>
          <div className="sns">
            <ul>
              <li>
                <BsFacebook className="icon" style={{ color: "	#4267B2" }} />
              </li>
              <li>
                <BsInstagram className="icon" style={{ color: "	#fbad50  " }} />
              </li>
              <li>
                <BsLinkedin className="icon" style={{ color: "	#0072b1 " }} />
              </li>
              <li>
                <BsYoutube className="icon" style={{ color: "	#FF0000" }} />
              </li>
              <li>
                <FaTiktok className="icon" style={{ color: "	#000000 " }} />
              </li>
            </ul>
          </div>
        </div>
        <div className="links">
          {footerLinks.map((item, i) => {
            return (
              <div className="wrap">
                <h1>{item.header}</h1>
                {item?.links.map((link, i) => {
                  return <a href={link.link}>{link.name}</a>;
                })}
              </div>
            );
          })}
        </div>
        <div className="subs">
          <div className="subscribe">
            <h1>Subscribe for updates</h1>
            <p>Get updates on the latest discounts and promos</p>
            <span>
              <div className="search">
                <input
                  type="text"
                  placeholder="Search..."
                  //value={"name"}
                  // onChange={(e) => setName(e.target.value)}
                />{" "}
                <button>Sign Up</button>
              </div>
            </span>
          </div>
          <div className="partner">
            <h1>Partner Logistics</h1>
            {logistics?.map((log, i) => {
              return <img src={log.imgLink} alt="" />;
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="shortcuts">
          {shortcutLinks.map((item, i) => {
            return (
              <div className="wrap">
                <h4>{item.header}</h4>
                {item.links.map((items, i) => {
                  return <a href={items.link}>{items.name}</a>;
                })}
              </div>
            );
          })}
        </div>
        <div className="last">
          <hr />
          <div className="end">
            <h5>
              Copyright © 2021{" "}
              <a href="https://obanana.com/%22">Obanana Corporation</a> . All
              Rights Reserved.
            </h5>
            <div className="payment">
              <h4>We're using safe payment for</h4>
              <img
                src="https://obanana.com/wp-content/uploads/2021/06/payment-channels_final-300x105.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  background-color: #f8f8f8;
  color: var(--obanana-secondary-color);
  margin: 0px;
  padding: 0px;
  padding-bottom: 6rem;
  @media (max-width: 768px) {
  }
  & hr {
    // width: 90%;
    margin: auto 1rem;
  }
  & h1 {
    color: var(--obanana-dark-color);
    font-size: 1.3rem;
    letter-spacing: -0.16px;
    font-weight: bold;
  }
  & .top {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between;
    align-items: center; */

    & .contacts {
      display: block;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: left;
      margin: 1rem auto;
      width: 25%;
      max-width: 320px;
      min-width: 220px;
      @media (max-width: 1068px) {
        margin: 1rem 2rem;
      }
      & img {
        width: 144px;
        margin: auto;
        margin-top: 1rem;
        // display: block;
      }
      & .sns {
        & ul {
          display: flex;
          padding: 0;
          text-decoration: none;
          list-style: none;
          & li {
            cursor: pointer;
            margin: 0.3rem;
            border-radius: 50%;
            border: 2px solid var(--obanana-secondary-color);
            display: flex;
            padding: 0.5rem;
            & .icon {
              margin: auto;
            }
          }
        }
      }
    }
    & .links {
      display: flex;
      flex-wrap: wrap;
      margin: 1rem auto;
      width: 50%;
      max-width: 700px;
      justify-content: space-between;
      @media (max-width: 1168px) {
        width: 90%;
      }
      @media (max-width: 1068px) {
        margin: 1rem 1rem;
      }
      @media (max-width: 768px) {
        width: 70%;
      }
      @media (max-width: 668px) {
        width: 90%;
      }
      @media (max-width: 568px) {
        width: 100%;
      }
      & .wrap {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 0 1rem;
        & a {
          text-decoration: none;
          color: var(--obanana-dark-color);
          &:hover {
            color: var(--obanana-primary-color-hover);
          }
        }
      }
    }
    & .subs {
      width: 25%;
      min-width: 220px;
      margin: 1rem auto;
      @media (max-width: 1168px) {
        width: 50%;
      }
      @media (max-width: 1180px) {
        margin: 1rem 2rem;
      }
      @media (max-width: 768px) {
        width: 70%;
      }
      @media (max-width: 668px) {
        width: 80%;
      }
      @media (max-width: 568px) {
        width: 100%;
      }
      & .search {
        display: inline-flex;
        width: 100%;

        // flex-direction: column;
        & input {
          border: none;
          // line-height: 4;
          width: 70%;
          padding: 0.3rem 1rem;
          max-height: 60px;
        }
        & button {
          border: none;
          padding: 1rem;
          max-height: 60px;
          width: 30%;
          min-width: 100px;
          background-color: var(--obanana-primary-color);
          text-transform: uppercase;
          font-weight: 700;
          color: var(--obanana-site-bg-color);
          margin: 0 1rem;
          //  line-height: 4;
          font-size: 1rem;
        }
      }
      & .partner {
        & img {
          width: 100%;
        }
      }
    }
  }
  & .bottom {
    display: flex;
    padding: 0rem;
    flex-direction: column;
    // margin: auto;
    //padding: 1rem 2rem;
    width: 90%;

    margin: auto 0;
    & .shortcuts {
      & .wrap {
        display: flex;
        flex-wrap: wrap;
        //  justify-content: center;
        margin: auto 2rem;
        align-items: center;

        & a {
          color: var(--obanana-secondary-color);
          text-decoration: none;
          padding: 0 1rem;
          border-right: 1px solid;
          font-size: 13px;
        }
      }
    }
    & .last {
      width: 90vw;
      padding: 1rem;
      & hr {
        width: 100%;
        margin: auto 1rem;
      }
    }
    & .end {
      //border-top: 3px solid var(--obanana-dark-color);
      display: flex;
      margin: auto 2rem;
      margin-right: 0rem;
      justify-content: space-between;
      max-width: 1700px;
      & h5 {
        color: var(--obanana-secondary-color);
        font-weight: 300;
        font-size: 1rem;
        & a {
          color: var(--obanana-primary-color);
          text-decoration: none;
        }
      }
      & .payment {
        display: flex;
        color: var(--obanana-dark-color);
        @media (max-width: 950px) {
          flex-direction: column;
        }
      }
    }
  }
`;
export default Footer;
