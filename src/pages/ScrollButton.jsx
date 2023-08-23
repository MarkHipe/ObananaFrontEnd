import React, {useEffect, useState} from 'react';
import {FaAngleUp} from 'react-icons/fa';
import styled from 'styled-components';

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { green } from "@mui/material/colors";

const ScrollButton = () =>{
 
  
  
  const [visible, setVisible] = useState(false)
  const [scrolled, setscrolled] = useState(0)
  var scrollProgressC = Math.trunc(scrolled);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  // scroll progress counter

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}%`;

    setscrolled(scrolled)
    
  };
  window.addEventListener("scroll", toggleVisible); 
   window.addEventListener("scroll",  scrollProgress);
  return (
    <ScrollIndicator style={{ display: visible ? "inline" : "none" }}>
      <Box sx={{ m: 1, position: "fixed" }}>
        <Fab aria-label="save" color="primary">
          <FaAngleUp className="icons" onClick={scrollToTop} />
        </Fab>

        <CircularProgress
        size={70}
          sx={{
            color: green[500],
            position: "absolute",
            top:4,
            left: -7,
            zIndex: 1,
          }}
          variant="determinate"
          value={parseInt(scrolled)}
        />
      </Box>{" "}
    </ScrollIndicator>
  );
}


 const ScrollIndicator = styled.div`
   position: fixed;
   width: 100%;
   max-width: 1800px;
   left: 75%;
   bottom: 140px;
   height: 20px;
   font-size: 3rem;
   z-index: 40;
   cursor: pointer;
   /* color: black; */
   @media (min-width: 768px) {
     left: 90%;
   }
   & .icons {
     color: white;
     background-color: #333;
     border-radius: 100%;
     font-size: 40px;
   }
 `;
export default ScrollButton;