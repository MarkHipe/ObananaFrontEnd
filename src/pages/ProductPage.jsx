import React, { useEffect, useState } from "react";
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
import Specification from "../components/productTab/Specification";
import CustomerReview from "../components/productTab/CustomerReview";
import StorePolicies from "../components/productTab/StorePolicies";
import { useParams } from "react-router-dom";

const ProductPage = ({ pop, imagePop }) => {
  const [tabActive, setTabActive] = useState("spec");
  const [activeImage, setactiveImage] = useState();
  const { prodName } = useParams();
  const [popUp, setpopUp] = useState();
  const productID = product.find((p) => p.productName === prodName);
  console.log(productID);
  useEffect(() => {
    imagePop(product[1].img[0]);
  }, [activeImage]);

  return (
    <Con className={popUp ? "active" : ""}>
      {" "}
      <div className="overlay"></div>
      <div className="upper">
        <div className="imageViewer">
          <div className="preview">
            {product[2].img.map((item, i) => {
              return (
                <img
                  onClick={() => {
                    setactiveImage(i);
                  }}
                  className={activeImage === i ? "active" : ""}
                  src={item}
                  alt=""
                />
              );
            })}
          </div>
          <Zoom src={product[1].img[0]} float={pop} />
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
      </div>
      <div className="tabsCon">
        <div className="wrap">
          <div className="tabs">
            <span
              onClick={() => {
                setTabActive("spec");
              }}
            >
              Specification
            </span>
            <span
              onClick={() => {
                setTabActive("cusRe");
              }}
            >
              Customer Reviews (0)
            </span>
            <span
              onClick={() => {
                setTabActive("Store");
              }}
            >
              Store Policies
            </span>
          </div>
          <div className="tabView">
            {tabActive === "spec" && (
              <div className="specificationCon">
                <Specification />
              </div>
            )}
            {tabActive === "cusRe" && (
              <div className="cusrRevCon">
                <CustomerReview />
              </div>
            )}
            {tabActive === "Store" && (
              <div className="storePocliciesCon">
                <StorePolicies />
              </div>
            )}
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  &.active {
    overflow-y: hidden;
  }
  .upper {
    display: flex;
    @media (max-width: 568px) {
      display: flex;
      flex-direction: column;
    }
    & .imageViewer {
      display: inline-flex;
      width: 50vw;

      @media (max-width: 992px) {
        display: flex;
        flex-direction: column-reverse;
      }
      @media (max-width: 568px) {
        width: 100vw;
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
          border: 3px solid transparent;
          cursor: pointer;
          &.active {
            border: 3px solid #7a0000d3;
          }
          &:hover {
            border: 3px solid #7a0000a6;
          }
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
        @media (max-width: 568px) {
          width: 90vw;
          margin: auto;
        }
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
        @media (max-width: 568px) {
          width: 90vw;
          margin: auto;
        }
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
          @media (max-width: 568px) {
            width: 90vw;
            margin: auto;
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
              white-space: nowrap;
              @media (max-width: 992px) {
                width: auto;
                margin-right: 1rem;
              }
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
        @media (max-width: 568px) {
          width: 90vw;
          margin: auto;
        }
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
  }

  .tabsCon {
    width: 98%;
    margin: 2rem auto;
    & .wrap {
      & .tabs {
        margin-left: 1rem;
        border-bottom: 1px solid #eeee;
        padding-bottom: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        span {
          margin: 1rem;
          font-size: 20px;
          font-weight: 900;
          color: var(--obanana-ptb-subtitle-color);
          cursor: pointer;
          white-space: nowrap;
        }
      }
    }
  }

  & .imageFull {
    position: absolute;
    width: 100vw;
    height: 100vh;
    //n top: -3rem;
    left: 0;
    overflow: hidden;

    overflow-y: hidden;
    & .shadowOverlay {
      position: absolute;
      background-color: #0000007f;
      width: 100vw;
      height: 100vh;
      //top: -3rem;
      left: 0;
      z-index: 30;
      // overflow: hidden;
      & img {
        position: relative;
        z-index: 35;
      }
    }
  }
`;
export default ProductPage;
