import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa";
import styled from "styled-components";
import React, { useState } from "react";

const questions = [
  {
    question: "How can I cancel my order?",
    iconD: <FaAngleDown className="down" />,
    iconU: <FaAngleUp className="down" />,
    answer: (
      <p>
        For Order Cancellations, contact support@obanana.com and request for a
        cancellation of your order.
      </p>
    ),
  },
  {
    question: "What payment methods are accepted?",
    iconD: <FaAngleDown className="down" />,
    iconU: <FaAngleUp className="down" />,
    answer: (
      <p>
        Currently, we accept Dragonpay, Paymaya, Bank Transfers (BDO) and Check
        Payment (BDO). We also accept Cash on Delivery.
      </p>
    ),
  },
  {
    question:
      "What shiWhat shipping methods are available?pping methods are ruytrutavailable?",
    iconD: <FaAngleDown className="down" />,
    iconU: <FaAngleUp className="down" />,
    answer: (
      <p>
        Currently, our logistics partners are J&T Express and Borzo Delivery
        (former Mr. Speedy)
      </p>
    ),
  },
  {
    question: "Do I need an account to place an order?",
    iconD: <FaAngleDown className="down" />,
    iconU: <FaAngleUp className="down" />,
    answer: (
      <p>
        You need an Obanana customer account in order to purchase the items you
        wish to order
      </p>
    ),
  },
  {
    question: "How can I change my order?",
    iconD: <FaAngleDown className="down" />,
    iconU: <FaAngleUp className="down" />,
    answer: (
      <p>
        Once you place an order, you cannot edit or change your order. You must
        request for a cancellations at support@obanana.com and order the item
        you want to obtain.
      </p>
    ),
  },
  {
    question: "Prices",
    iconD: <FaAngleDown className="down" />,
    iconU: <FaAngleUp className="down" />,
    answer: (
      <p>
        The Product price shall correspond to the list price appearing on the
        Site. Prices exclude shipping. Shipping costs (at the stated price) will
        be added automatically to the total amount due once your items appear in
        the cart and you have selected your desiredshipping method. Delivery
        prices and costs are subject to change at any time; however, such
        changes shall not affect the orders for which we have already sent a
        Shipping Confirmation
      </p>
    ),
  },
];

const PeopleAsk = () => {
  const [selected, setSelected] = useState();
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <Con>
      <h4>People usually ask these</h4>
      {questions.map((img, i) => {
        return (
          <div className="QaA">
            <div
              className="Q"
              onClick={() => toggle(img.question)}
              key={img.question}
            >
              <h2 className={selected === img.question ? "active" : ""}>
                {img.question}
              </h2>

              <span>
                {" "}
                {selected === img.question ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </div>

            <div className={selected === img.question ? "answershow" : "A"}>
              <h3>{img.answer}</h3>
            </div>
          </div>
        );
      })}
    </Con>
  );
};
const Con = styled.div`
margin: 1rem 2rem;
  & h4 {
    margin-left: 4rem;
  }

  & .QaA {
    background-color: transparent;
    position: relative;
    width: 45vw;
    margin: auto 3%;
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
        font-size: 13px;
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
`;

export default PeopleAsk;
