import "./App.css";

import styled from "styled-components";
import MainCon from "./MainCon";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <Con>
      <Router>
        <div className="overlayShadow">
          <MainCon />
        </div>
      </Router>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Nunito&family=Poppins:wght@400;600&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Nunito&family=Poppins:wght@400;600;700&display=swap");
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        nav,
        span,
        div {
          font-family: "Poppins", sans-serif !important;
        }
        html,
        #root {
          margin: 0;
          padding: 0;
          display: flex;
          top: 0;
          /* left: 0; */
          padding-top: 0;
          box-sizing: border-box;
          overflow-x: hidden;
          justify-content: center;
          align-items: center;
          align-self: center;
        }
        html {
        }
        body {
          top: 0;
          /* left: 0; */
          padding-top: 0;
          margin: auto;
          padding: 0;
          font-family: "Poppins", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          --obanana-container-width: 1820px;
          --obanana-container-fluid-width: 1820px;
          --obanana-site-bg-color: #fff;
          --obanana-site-width: false;
          --obanana-site-margin: 0;
          --obanana-site-gap: 0;
          --obanana-page-wrapper-bg-color: #fff;
          --obanana-primary-color: #ba3f02;
          --obanana-secondary-color: #666666;
          --obanana-dark-color: #333;
          --obanana-light-color: #ccc;
          --obanana-primary-color-hover: #dc4b03;
          --obanana-primary-color-alpha: rgba(186, 63, 2, 0.8);
          --obanana-secondary-color-hover: #787878;
          --obanana-dark-color-hover: #454545;
          --obanana-light-color-hover: #dedede;
          --obanana-body-font-family: "Poppins";
          --obanana-body-font-weight: 400;
          --obanana-body-font-size: 14px;
          --obanana-body-line-height: 1.6;
          --obanana-body-color: #666;
          --obanana-typo-ratio: 1;
          --obanana-heading-font-weight: 600;
          --obanana-heading-line-height: 1.2;
          --obanana-heading-letter-spacing: -0.025em;
          --obanana-heading-text-transform: none;
          --obanana-heading-color: #333;
          --obanana-ptb-bg-color: #eee;
          --obanana-ptb-height: 180px;
          --obanana-ptb-title-font-size: 34px;
          --obanana-ptb-title-line-height: 1.125;
          --obanana-ptb-title-letter-spacing: -0.025em;
          --obanana-ptb-title-text-transform: capitalize;
          --obanana-ptb-title-color: #333;
          --obanana-ptb-subtitle-font-size: 18px;
          --obanana-ptb-subtitle-line-height: 1.8;
          --obanana-ptb-subtitle-color: #666;
          --obanana-ptb-breadcrumb-font-size: 13px;
          --obanana-ptb-breadcrumb-color: #333;
          --obanana-lazy-load-bg: #f4f4f4;
        }
      `}</style>
    </Con>
  );
}
const Con = styled.div`
  width: 100%;
  margin: auto;
`;

export default App;
