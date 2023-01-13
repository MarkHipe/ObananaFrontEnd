import React from "react";
import styled from "styled-components";

const SendUsMessage = () => {
  return (
    <Con>
      <div className="conForm">
        <h4>Send Us a Message</h4>
        <form className="formCard">
          <label for="user_name">Fullname:</label>
          <input type="text" placeholder="Fullname" name="user_name" required />
          <label for="user_email">Email:</label>
          <input type="email" placeholder="Email" name="user_email" required />
          <label for="concern">Concern:</label>
          <select name="concern" id="concern">
            <option value="-- Please Select --">-- Please Select --</option>
            <option value="Sales Department">Sales Department</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Marketing Department">Marketing Department</option>
            <option value="Web Administrator">Web Administrator</option>
          </select>
          <label for="--Your Message--">Your message: (optional)</label>
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </Con>
  );
};
const Con = styled.div`
  width: 100%;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & h4 {
    margin-left: 4rem;
  }
  & .conForm {
    padding: 2rem;
    width: 290px;
    border-radius: 10px;
    border: 1px solid #33333353;
  }
  & .formCard {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
    & input {
      line-height: 2.5rem;
      margin: 0.5rem 0;
    }

    & select {
      padding: 10px 30px;
      text-align: center;
      margin: 0.5rem 0;
    }
    & button {
      margin: 0.5rem 0;
      width: 5rem;
      padding: 0.5rem;
    }
    & textarea {
      max-width: 243px !important;
    }
  }
`;

export default SendUsMessage;
