import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const CartFloat = () => {
  return (
    <Con>
      <div className="shadowOverlay"></div>
      <div className="cartCon">
        <div className="header">
          <h1> SHOPPING CART</h1>{" "}
          <span>
            Close <BsArrowRight className="icon" />
          </span>
        </div>
        <div className="cartWrap">No products on this cart</div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 54;
  & .shadowOverlay {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.35);
    cursor: pointer;
  }
  & .cartCon {
    position: fixed;
    background-color: #fff;
    right: 0;
    height: 100vh;
    width: 350px;
    & .header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding: 10px 1rem;
      width: 350px;

      h1 {
        font-size: 1rem;
        margin-right: 2rem;
      }
      & span {
        margin: auto;
        font-size: 13px;
        display: flex;
        right: 10px;
        cursor: pointer;
        & .icon {
          margin: auto 5px;
          margin-right: 0px;
        }
      }
    }
    & .cartWrap {
      padding: 1rem;
    }
  }
`;
export default CartFloat;
