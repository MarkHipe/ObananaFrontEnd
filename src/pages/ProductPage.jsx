import React, { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import {
  BsFacebook,
  BsFillBagFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import styled from "styled-components";
import { product } from "../components/home/productsAssets/products";
import Zoom from "../components/Zoom";

const ProductPage = () => {
  return (
    <Con>
      <div className="imageViewer">
        <div className="preview">
          {product[2].img.map((item, i) => {
            return <img src={item} alt="" />;
          })}
        </div>
        <Zoom src={product[0].img[0]} />
      </div>
      <div className="detailsCon">
        <div className="details">
          <h3>{product[2].productName}</h3>
          <div className="cat">
            <span>Categories:</span>
            {product[2].categories.map((cat, i) => {
              return <p>{cat}</p>;
            })}
          </div>{" "}
          <div className="tag">
            <span>Tag:</span>
            {product[2].tag.map((tag, i) => {
              return <p>{tag}</p>;
            })}
          </div>
        </div>
        <div className="select">
          <h1>₱{product[0].price}.00</h1>
          <div className="buttons">
            <div className="quantity">
              <p>Quantity:</p>
              <div class="input-group">
                {" "}
                <input
                  type="number"
                  step="1"
                  max=""
                  initialValue="1"
                  name="quantity"
                  class="quantity-field"
                />
                <input
                  type="button"
                  value="-"
                  class="b button-minus"
                  data-field="quantity"
                />
                <input
                  type="button"
                  value="+"
                  class=" b button-plus"
                  data-field="quantity"
                />
              </div>
            </div>
            <div className="button add2Cart">
              <span>
                <BsFillBagFill className="icon" />
                <h2>ADD TO CART</h2>
              </span>
            </div>

            <div className="button buyNow">
              <h2>BUY NOW</h2>
            </div>
          </div>
        </div>
        <div className="contacts">
          <span>
            <AiFillQuestionCircle className="icon" />
            <p>Ask a Question</p>
          </span>
          <div className="icons">
            <div className="sns">
              <span style={{ backgroundColor: "	#4267B2" }}>
                <BsFacebook className="icon" />
              </span>

              <span style={{ backgroundColor: "	 #1DA1F2" }}>
                <BsTwitter className="icon" />
              </span>
              <span style={{ backgroundColor: "	#CC0001" }}>
                <BsInstagram className="icon" />
              </span>
              <span style={{ backgroundColor: "	#DD4B39" }}>
                <GoMail className="icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  display: flex;
  width: 100%;
  & .imageViewer {
    display: inline-flex;
    width: 50vw;
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
    }
    & .preview {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      @media (max-width: 992px) {
        display: inline-flex;
        flex-direction: unset;
      }
      & img {
        height: 89px;
        width: 89px;
        margin: 1rem 10px;
      }
    }
  }
  & .detailsCon {
    & .details {
      font-size: 13px;
      text-transform: capitalize;
      border-bottom: 1px solid;
      width: 45vw;
      margin: auto;
      padding-bottom: 10px;
      & h3 {
        font-size: 24px;
      }
      & span {
        font-weight: 600;
      }
      & .cat {
        display: flex;
        & p {
          margin: auto 10px;
        }
      }
      & .tag {
        display: flex;
        & p {
          margin: auto 10px;
        }
      }
    }
    & .select {
      & h1 {
        color: red;
        font-weight: 700;
      }
      & .buttons {
        display: flex;
        width: 50vw;
        flex-wrap: wrap;
        @media (max-width: 1057px) {
          flex-direction: column;
        }
        /* & .up {
          display: inline-flex;
          width:65%;
          @media (max-width: 1057px) {
            width: 60%;
          }
        } */
        & .quantity {
          display: inline-flex;
          max-width: 240px;
          & .input-group {
            width: 155px;

            border: 1px solid #eee;
            border-radius: 5px;
            padding: 8px;
            margin: auto 10px;
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }
            border: 1px solid #eeeeee;
            box-sizing: border-box;
            & .quantity-field {
              width: 60px;
              border: none;
              &:focus {
                border: none;
                outline: none;
              }
            }
            & .b {
              border: none;
              height: 25px;
              width: 25px;
              margin-left: 5px;
              border-radius: 100%;
            }
          }
        }
        & .button {
          width: 30%;
          height: 40px;
          cursor: pointer;
          margin: auto;
          display: flex;
          justify-content: center;
          margin: 10px;
          & h2 {
            font-weight: 600;
            font-size: 14px;
            margin: auto;
          }
          &.add2Cart {
            background-color: var(--obanana-primary-color);
            color: #eee;

            /* @media (max-width: 1057px) {
              min-width: 230px;
            } */
            & span {
              display: inline-flex;
              & .icon {
                margin: auto 5px;
              }
            }
          }
          &.buyNow {
            color: var(--obanana-primary-color);
            width: 30%;
            border: 1px solid var(--obanana-primary-color);
            @media (max-width: 1057px) {
              width: 45vw;
            }
            &:hover {
              background-color: var(--obanana-primary-color);
              color: #eee;
              transition: 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ease-in-out;
            }
          }
        }
      }
    }
    & .contacts {
      & span {
        display: inline-flex;
        & p {
          font-size: 13px;
        }
        & .icon {
          margin: auto 5px;
        }
      }
      & .icons {
        & .sns {
          border-right: 1px solid #dddddd;
          width: 170px;
          & span {
            height: 30px;
            width: 30px;
            font-size: 15px;
            //   display: flex;
            justify-content: center;
            margin: 5px;
            border-radius: 100%;
            & .icon {
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
export default ProductPage;
