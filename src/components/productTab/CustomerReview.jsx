import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import RelatedProducts from "./RelatedProducts";

const CustomerReview = () => {
  return (
    <Con>
      <div className="upper">
        <div className="ratingCon">
          <div className="rateSummary">
            <div className="number">0.0</div>
            <div className="average">
              <p>Average rating</p>
              <div className="iconCon">
                <FaStar className="star" />
                <FaStar className="star " />
                <FaStar className="star " />
                <FaStar className="star " />
                <FaStar className="star" />
              </div>
            </div>
          </div>
          <div className="ratingCon">
            <div className="rating">
              <div className="iconCon">
                <FaStar className="star active" />
                <FaStar className="star active" />
                <FaStar className="star active" />
                <FaStar className="star active" />
                <FaStar className="star active" />
              </div>
              <div className="progressBarArea">
                <div className="progress" style={{ width: "60%" }}></div>
              </div>
              <p>60%</p>
            </div>
            <div className="rating">
              <div className="iconCon">
                <FaStar className="star active" />
                <FaStar className="star active" />
                <FaStar className="star active" />
                <FaStar className="star active" />
                <FaStar className="star" />
              </div>
              <div className="progressBarArea">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
              <p>0%</p>
            </div>
            <div className="rating">
              <div className="iconCon">
                <FaStar className="star active" />
                <FaStar className="star active" />
                <FaStar className="star active" />
                <FaStar className="star " />
                <FaStar className="star" />
              </div>
              <div className="progressBarArea">
                <div className="progress" style={{ width: "10%" }}></div>
              </div>
              <p>10%</p>
            </div>
            <div className="rating">
              <div className="iconCon">
                <FaStar className="star active" />
                <FaStar className="star active" />
                <FaStar className="star " />
                <FaStar className="star " />
                <FaStar className="star" />
              </div>
              <div className="progressBarArea">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
              <p>0%</p>
            </div>
            <div className="rating">
              <div className="iconCon">
                <FaStar className="star active" />
                <FaStar className="star " />
                <FaStar className="star " />
                <FaStar className="star " />
                <FaStar className="star" />
              </div>
              <div className="progressBarArea">
                <div className="progress" style={{ width: "30%" }}></div>
              </div>
              <p>30%</p>
            </div>
          </div>
        </div>

        <div className="reviewFormCon">
          <h1>Be the first to review “Log Book”</h1>
          <h6>
            Your email address will not be published. Required fields are marked{" "}
            <span>*</span>
          </h6>

          <form action="">
            <textarea
              name="review"
              id=""
              cols="30"
              rows="10"
              placeholder="Write Your Review Here..."
            ></textarea>
            <div className="info">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="checkbox">
              <input type="checkbox" />{" "}
              <p>
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <p>You have to login to add images.</p>
            <button>SUBMIT REVIEW</button>
          </form>
        </div>
      </div>
      <RelatedProducts />
    </Con>
  );
};
const Con = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //padding: 1rem 2rem;
& .upper{
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem ;
  & .ratingCon {
    margin: 1rem;
    padding-left: 1rem;
    width: 40%;
    display: flex;
   // justify-content: center;
    align-items: center;
    flex-direction: column;
    & .rateSummary {
      display: inline-flex;

      margin-left: 1.3rem;
      & .number {
        font-size: 60px;
        font-weight: 900;
        color: var(--obanana-primary-color);
      }
      & .average {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        height: 80px;
        & p {
          position: relative;
          top: 0.5rem;
        }
        & .iconCon {
          position: relative;
          top: -0.6rem;
          color: #b3b3b3;
          & .star.active {
            color: #ffd900;
          }
        }
      }
    }
    & .ratingCon {
      display: flex;
      flex-direction: column;
      .rating {
        display: flex;
        justify-content: space-between;
        width: 300px;
        & .iconCon {
          color: #b3b3b3;
          margin: auto;
          & .star.active {
            color: #ffd900;
          }
        }
        & p {
          color: #333;
          font-size: 10px;
          width: 30px;
        }

        & .progressBarArea {
          background-color: #cecece33;
          height: 5px;
          width: 150px;
          margin: auto;
          margin-left: 1rem;
          & .progress {
            position: relative;

            background-color: #ffd900;
            height: 5px;
          }
        }
      }
    }
  }
  & .reviewFormCon {
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 1rem;
    & h1{
      font-size: 18px;
      font-weight: 600;
    }
    & h6{
      font-size: 15px;
      font-weight: 400;
    }
    & form {
      display: flex;
      flex-direction: column;
      width: 70%;
      & textarea {
        padding: 1rem;
        border-radius: 3px;
        border: 1px solid #eee;
        &:focus{
            outline: none;
            
          }
      }
      & .info {
        margin: 1rem auto;
        width: 100%;
        display: flex;
        & input {
          padding: 10px 1rem;
          width: 42%;
          margin: auto;
          border: 1px solid #eee;
          border-radius: 3px;
          &:focus{
            outline: none;
            
          }
        }
      }
    }
    & .checkbox {
      display: inline-flex;
    
      & p{
        font-size: 13px;
      }
    }
    & button{
      width: 170px;
      height: 50px;
      border: none;
      background-color: #333;
      color: #fff;
    }
  }
}
`;
export default CustomerReview;
