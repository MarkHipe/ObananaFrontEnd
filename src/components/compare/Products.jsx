import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Products = ({ newProducts }) => {
  const [newProduct, setNewProduct] = useState(newProducts);
  const navigate = useNavigate();

  function SwapArrayLeft(i) {
    let prod = newProducts;
    let temp = prod[i - 1];

    // Step 2
    prod[i - 1] = prod[i];

    // Step 3
    prod[i] = temp;
    setNewProduct(prod);
    navigate("/compare/");
  }

  function SwapArrayRight(i) {
    let prod = newProducts;
    let temp = prod[i + 1];

    // Step 2
    prod[i + 1] = prod[i];

    // Step 3
    prod[i] = temp;
    setNewProduct(prod);
    navigate("/compare/");
  }

  function Remove(i) {
    let prod = newProduct;
    prod.splice(i, 1);
    setNewProduct(prod);
    navigate("/compare/");
  }
  return (
    <Con>
      {newProduct?.map((item, i) => {
        return (
          <div className="headingCon">
            <div className="firstCon">
              <div className="switch">
                <button
                  disabled={i === 0 ? true : false}
                  onClick={() => {
                    SwapArrayLeft(i);
                  }}
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={() => {
                    Remove(i);
                  }}
                >
                  <AiOutlineClose />
                </button>
                <button
                  disabled={i === newProduct.length - 1 ? true : false}
                  onClick={() => {
                    SwapArrayRight(i);
                  }}
                >
                  <FaAngleRight />
                </button>
              </div>
              {item.image}
              <h3>{item.name}</h3>
            </div>
            <div className="row">
              <h3>{item.price}</h3>
            </div>
            <div className="row">
              <h3>{item.availability}</h3>
            </div>
            <div className="row">
              <h3>{item.description}</h3>
            </div>
            <div className="row">
              <FaStar className={item.rating >= 1 ? "star active" : "star"} />
              <FaStar className={item.rating >= 2 ? "star active" : "star"} />
              <FaStar className={item.rating >= 3 ? "star active" : "star"} />
              <FaStar className={item.rating >= 4 ? "star active" : "star"} />
              <FaStar className={item.rating >= 5 ? "star active" : "star"} />
            </div>
          </div>
        );
      })}
    </Con>
  );
};

const Con = styled.div`
  width: 70vw;
  display: inline-flex;
  overflow-x: scroll;
  & .headingCon {
    // width: 300px;
    margin: auto 1rem;
    & button {
      height: 25px;
    }
  }

  & .firstCon {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 445px;
    padding: 25px 50px 25px 0;

    & h3 {
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  & .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 25px 50px 25px 0;
    // border: 1px solid ;
    font-size: 14px;
  }
  & .contents {
    display: inline-flex;
  }
  & .productImg {
    height: 300px;
    width: auto;
  }
`;

export default Products;
