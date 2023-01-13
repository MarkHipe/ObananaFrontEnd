import React from "react";

import styled from "styled-components";
import { FaTags,FaChalkboardTeacher,FaShoppingBag,FaAngleRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faFileSignature, faUpload, faBriefcase, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import "@fontsource/poppins";
import ScrollButton from './ScrollButton';

const feature = [
  {
    icon: <FaShoppingBag  className="shoppingBag"/>, 
    description: "Attract new potential customers nationwide"
  
  },
  {
    icon: <FaTags  className="shoppingBag"/>, 
    description: "Enjoy Merchant perks like free shipping, obanana voucher, discounts, etc."
  },
  {
    icon: <FaChalkboardTeacher className="shoppingBag"/>, 
    description: "Customize your own promotions to help you grow your sales"
  },
  {
    icon: <FontAwesomeIcon icon={faPhone} className="shoppingBag" />,
    description: "Talk with our consultant for your business inquiries"
  },
  {
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} className="shoppingBag"/>, 
    description: "Pay commission fees only when you sell"
  },
  {
    icon: <FontAwesomeIcon icon={faBriefcase}  className="shoppingBag"/>, 
    description: "No product listing limit"
  },
  {
    icon: <FontAwesomeIcon icon={faUpload}  className="shoppingBag"/>, 
    description: "Upload your products and we will market them for you"
  },
  {
    icon: <FontAwesomeIcon icon={faFileSignature } className="shoppingBag"/>, 
    description: "Advantage of signing up as a business partner"
  },
  
]



const SellOnObanana = () => {
  return (
    <Con>
      <div className="header">
        <h1>Sell On Banana</h1>
      </div>
      <div className="navHistory">
        <div className="navLink">
          <ul>
            <a href="home">Home</a>
            <FaAngleRight className="angleicon" />
            <a href="sell-on-obanana">Sell On Obanana</a>
          </ul>
        </div>
        </div>       
         <div className="contentCon">
          <div className="banner">
            <img
              src="https://obanana.com/wp-content/uploads/2022/03/register-na-01-1024x756.jpg"
              alt="bannerImg"
            />
            <div className="headline">
             <div className="text">
               <h2>BE A MERCHANT PARTNER NOW</h2>
              <p>
                We make your selling very convenient, simple, and user-friendly
                by helping you bring all your online products and services under
                one roof.
                </p>
                <p> We are an aspiring B2B marketplace business solutions
                provider in the Philippines. Obanana aims to revolutionize and
                boost the e-commerce business community not only locally but
                also globally that benefits both the customer and the business
                people.
              </p>
              <button className="regbtn">REGISTER AS A MERCHANT</button>
              </div>
            </div>
          </div>
      </div>
      <div className="features ">
      <h1>KEY FEATURES</h1>
      </div>
      <div className="cardCon">
     
    {feature.map((item,i )=>{
      return( 
      <div className="cardWrapper">
        <div className="imgShadow">
          {item.icon}
          </div>
          <div className="descWrap">
          <h3>{item.description}</h3>
          </div>
          </div>
        

     )
    })}
     </div>
    
    </Con>
  );
};

const Con = styled.div`
  position: relative;
  z-index: 10;
  
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
  

  & .contentCon{
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  
    & .banner{
      position: relative;
      display:flex;
      //margin: 50px;
    }
    & img{
      height: 100%;
      width:100%;
      border-radius: 23px;
      margin: auto;
      display: flex;
      padding: 10px;
      
       
      }
    }
    & .headline{ 
      display: flex;
     
    & .text{
      width: 100%;
      position: relative; 
       margin: auto 2rem;   
       justify-content: center;
      
    }
      h2{
        font-size: 34px;
        font-family: "Poppins";
        position: relative;
       
      }
      
      p {
        font-size: 18px;
        font-family: "Poppins";
        color: #666666;
      }
    }
    & button.regbtn{
  background-color: #fba919 ;
  font-size: 20px;
  color: white;
  border-radius:3px;
  border: 4px solid #ba3f02;
  font-size: 18px;
  font-family: "Poppins";
  font-weight: 700;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center; max-width:310px;
  min-width:310px;
  &:hover{
      background-color:#ba3f02 ;
    }
    @media(max-width:1373px){
      align-items: center;
  justify-content: left;
  margin: auto 0;
  text-align: left;
    }   
    @media(max-width:767px){
      align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
    }   
 }  
& .features{
  & h1{
    font-size: 39px;
    font-family: "Poppins";
    color: #333333;
    position: relative;
      align-items: center;
      text-align: center;
      justify-content: center;
  }
}
 & .cardCon{
    width: 100%;
    height: 100%;
  //  margin: 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    & .cardWrapper{
    background-color: white;
    width: 20%;
   
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1) ;
    margin: .5rem 10px;
    padding: 1rem;
    padding-top: 30px;
    &:hover{
      box-shadow:0 0px 15px 8px rgba(0,0,0,0.05) ;
    }
    @media(max-width:1059px){
      width: 42%;
    }   
     @media(max-width:768px){
      width: 90%;
    }
    & .imgShadow{
      background-color: #ba3f02;
      height: 100px;
      width: 100px;
      border-radius: 100%;
      margin: auto;
      display: flex;
      justify-content: center;
     
      & .shoppingBag{
        margin: auto;
      color: white;
      height: 60px;
      width: 60px;
     
}  
}
    }
    & .descWrap{
        margin: auto;
      display: flex;
      justify-content: center;
      font-size: 14px;
      }
      & h3{
          color: black;
          box-sizing: border-box;
          text-align: center;
        }
       
      }

  
   @media (max-width:1372.50px){
    & .banner{
      flex-direction: column;
      & img{
      }
      & .text{
        display: flex;
       flex-direction: column;
      }
    }
  }
`;

export default SellOnObanana;
