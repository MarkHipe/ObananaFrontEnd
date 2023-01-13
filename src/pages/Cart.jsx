import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";

const Cart = () => {
  const [selected, setSelected] = useState(null);
  return (
    <Con>
      <div className="navCon">
        <div className="navCart">
          <span>
            <a className={selected === "shopingCart" ? "active" : ""}>
              Shopping Cart
            </a>
          </span>
          <FaAngleRight className="angleicon" />
          <span>
            <a className={selected === "chechout" ? "active" : ""}>Checkout</a>
          </span>
          <FaAngleRight className="angleicon" />
          <span>
            <a className={selected === "OrderComplete" ? "active" : ""}>
              Order Complete
            </a>
          </span>
        </div>
      </div>
      <div className="conProduct"></div>
    </Con>
  );
};

const Con = styled.div`
  width: 100%;
  & .navCon {
    width: 99%;
    & .navCart {
      background-color: #fffbfb37;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      & span {
        & a {
          color: gray;
          font-size: 1.2rem;
          font-weight: 900;
          letter-spacing: -0.025em;
          text-decoration: none;
          position: relative;
          margin-right: 5px;
          width: 100%;
          height: 4.5em;
          align-items: center;
          display: flex;
          &.active {
            color: black;
          }
          &:hover {
            color: #ba3402;
          }
        }
      }
    }
  }
`;
export default Cart;
