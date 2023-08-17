import React from "react";
import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa";
import styled from "styled-components";
import "@fontsource/poppins";
import { useState } from "react";

const Qs = [
  {
    main: "Shipping & Pick-up Information",
    list1: [
      {
        question: "What shipping methods are available?",
        iconD: <FaAngleDown className="down" />,
        iconU: <FaAngleUp className="down" />,
        answer:
          "Currently, our logistic partners are Champ Courier and Borzo Delivery (former Mr. Speedy).",
      },
      {
        question: "When will I receive my order?",
        iconD: <FaAngleDown className="down" />,
        iconU: <FaAngleUp className="down" />,
        answer:
          "You will receive a notification from our Logistic providers that your package is on its way to your address. However, you must keep your line open for our logistic partners will contact you on your delivery day.",
      },
    ],
    list2: [
      {
        question: "Can I schedule the delivery date??",
        iconD: <FaAngleDown className="down" />,
        iconU: <FaAngleUp className="down" />,
        answer:
          "You will receive a notification from our Logistic providers that your package is on its way to your address. However, you must keep your line open for our logistic partners will contact you on your delivery day.",
      },
      {
        question: "Can I pick up my orders at Obanana or its Merchant's store?",
        iconD: <FaAngleDown className="down" />,
        iconU: <FaAngleUp className="down" />,
        answer:
          "Unfortunately, Obanana is not offering this option and you can only receive your orders on the addresses you set up on your Obanana account.",
      },
    ],
  },
  {
    main: "Payment",
    list1: [
      {
        question: "What payment methods are accepted?",
        icon: <FaAngleDown className="down" />,
        answer:
          "Currently, we accept Dragonpay, Paymaya, Bank transfers (BDO), Check Payment (BDO), . We also accept Cash on Delivery.",
      },
      {
        question: "How to Pay my order via PayMaya Debit/Credit Card?",
        icon: <FaAngleDown className="down" />,
        answer:
          "You can use your Paymaya account to pay your orders by inserting your Paymaya card details on the Paymaya checkout page once you choose Paymaya as your payment option on Obanana checkout page.",
      },
    ],
    list2: [
      {
        question: "How to pay with Dragonpay?",
        icon: <FaAngleDown className="down" />,
        answer:
          "For Dragonpay, please choose Dragonpay at checkout and select the payment method you prefer and follow the payment instructions to pay for your Obanana orders.",
      },
      {
        question: "Can I choose Cash on Delivery as my payment option?",
        icon: <FaAngleDown className="down" />,
        answer:
          "Yes you can. Choose Cash on Delivery on the checkout page and wait for our logistic provider to receive the payment and hand over your orders.",
      },
    ],
  },
  {
    main: "Orders & Returns",
    list1: [
      {
        question: "How do I place an order?",
        icon: <FaAngleDown className="down" />,
        answer: (
          <ol>
            <li style={{ listStyleType: "lower-alpha" }}>
              Search and look for the item you want to buy.
            </li>
            <li style={{ listStyleType: "lower-alpha" }}>
              Click on the product you want to buy and click “Add to cart”.
            </li>
            <li style={{ listStyleType: "lower-alpha" }}>
              Once you’re done shopping, click the cart icon and review the
              items in your cart that you wish to buy.
            </li>
            <li style={{ listStyleType: "lower-alpha" }}>
              Once finalized, click “Checkout” and proceed for payment.
            </li>
            <li style={{ listStyleType: "lower-alpha" }}>
              Input delivery information and choose payment method.
            </li>
            <li style={{ listStyleType: "lower-alpha" }}>
              Once done with the payment, a confirmation will appear that your
              order has been successfully placed.
            </li>
          </ol>
        ),
      },
      {
        question: "Do I need an account to place an order?",
        icon: <FaAngleDown className="down" />,
        answer:
          "You need an Obanana customer account in order to purchase the items you wish to order.",
      },
    ],
    list2: [
      {
        question: "How can I change my order?",
        icon: <FaAngleDown className="down" />,
        answer:
          "For Dragonpay, please choose Dragonpay at checkout and select the payment method you prefer and follow the payment instructions to pay for your Obanana orders.",
      },
    ],
  },
];

const FAQs = () => {
  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);

  // const [show2, setShow2] = useState();

  const toggle = (index) => {
    if (selected == index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const toggle2 = (i) => {
    if (selected2 == i) {
      return setSelected2(null);
    }
    setSelected2(i);
  };

  return (
    <Con>
      <div className="header">
        <h1>FAQs</h1>
      </div>
      <div className="navHistory">
        <div className="navLink">
          <ul>
            <a href="home">Home</a>
            <FaAngleRight className="angleicon" />
            <a href="faqs">FAQs</a>
          </ul>
        </div>
      </div>
      <div className="contentCon">
        <div className="secHeader">
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>

      <div className="qCon">
        {Qs.map((item, i) => {
          return (
            <div className="qWrapper">
              <div className="main">
                <h1>{item.main}</h1>
              </div>
              <div className="questions">
                <div className="list">
                  {item.list1.map((item, index) => {
                    return (
                      <div className="QaA">
                        <div
                          className="Q"
                          onClick={() => toggle(item.question)}
                          key={item.question}
                        >
                          <h2
                            className={
                              selected === item.question ? "active" : ""
                            }
                          >
                            {item.question}
                          </h2>

                          <span>
                            {" "}
                            {selected === item.question ? (
                              <FaAngleUp />
                            ) : (
                              <FaAngleDown />
                            )}
                          </span>
                        </div>

                        <div
                          className={
                            selected === item.question ? "answershow" : "A"
                          }
                        >
                          <h3>{item.answer}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="list">
                  {item.list2.map((item, i) => {
                    return (
                      <div className="QaA">
                        <div
                          className="Q"
                          onClick={() => toggle2(item.question)}
                          key={item.question}
                        >
                          <h2
                            className={
                              selected2 === item.question ? "active" : ""
                            }
                          >
                            {item.question}
                          </h2>

                          <span>
                            {" "}
                            {selected2 === item.question ? (
                              <FaAngleUp />
                            ) : (
                              <FaAngleDown />
                            )}
                          </span>
                        </div>

                        <div
                          className={
                            selected2 === item.question ? "answershow" : "A"
                          }
                        >
                          <h3>{item.answer}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Con>
  );
};
const Con = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1800px;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  & .header {
    margin: auto;
    background-color: var(--obanana-ptb-bg-color);
    height: 9rem;
    position: relative;

    & h1 {
      position: relative;
      align-items: center;
      text-align: center;
      justify-content: center;
      font-size: 34px;
      font-family: var(--wolmart-heading-font-family);
      font-weight: 700;
      padding-top: 3rem;
    }
  }
  & .navHistory {
    & .navLink {
      background-color: #fffbfb37;
      position: relative;
      display: flex;
      align-items: center;
      border-bottom: 1px solid gray;
      margin: 0 1rem;

      & ul {
        & a {
          color: black;
          font-size: 15px;
          text-decoration: none;
          position: relative;
          margin-right: 30px;
        }
        & .angleicon {
          margin-left: -25px;
          position: relative;
          top: 3px;
        }
      }
    }
  }
  & .contentCon {
    & .secHeader {
      height: 5rem;
      align-items: center;
      justify-content: center;
      margin: auto;
      text-align: center;

      & h2 {
        font-size: 34px;
      }
    }
  }
  & .qCon {
    width: 100%;
    max-width: 1800px;
    & .qWrapper {
      position: relative;

      & .main {
        align-items: center;
        justify-content: center;
        text-align: center;
        & h1 {
          font-size: 30px;
          font-family: "Poppins";
        }
      }
      & .questions {
        display: inline-flex;
        //flex-wrap: wrap;
        //flex-direction: row;

        width: 95vw;
        max-width: 1800px;

        margin: auto;
        @media (max-width: 768px) {
          flex-direction: column;
        }
        & .list {
          width: 50%;
        }

        & .QaA {
          background-color: transparent;
          position: relative;

          margin: 3%;
          display: flex;
          height: auto;
          flex-direction: column;

          @media (max-width: 768px) {
            width: 90vw;
          }
          & .Q {
            background-color: #f5f5f5;
            font-family: "Poppins";
            padding: 5px 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            & .down {
              position: relative;
              margin: auto;
              margin-left: 1rem;
            }

            & h2 {
              text-align: center;
              font-size: 16px;
              font-weight: 600;
              &:hover {
                color: #ba3402;
              }
              &.active {
                color: var(--obanana-primary-color-hover);
              }
            }
          }
          & .A {
            color: #2e2e2e;
            padding: 5px 2rem;
            width: 90%;
            overflow: hidden;
            max-height: 0;
          }
        }
        & h3 {
          font-size: 13px;
          font-weight: 400;
        }
        & .answershow {
          animation: growDown 300ms ease-in-out forwards;
          transform-origin: top center;

          @keyframes growDown {
            0% {
              transform: scaleY(0);
            }
            80% {
              transform: scaleY(1.1);
            }
            100% {
              transform: scaleY(1);
            }
          }
        }
      }
    }
  }
`;
export default FAQs;
