import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa'
import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'
import Products from '../components/compare/Products'

const products = [
    {
      image:  ( <img
        src="https://obanana.com/wp-content/uploads/2022/10/WD101PURP-10TB-7200RPM-256MB-300x300.jpg" 
        className="productImg" alt=""
      />
    ),
    name:"Western Digital (WD101PURP 10TB 7200RPM 256MB)",
    price:"₱17,600.00",
    availability:" In stock",
    description: "-",   
        
    }, 
    {
        image:  ( <img
          src="https://obanana.com/wp-content/uploads/2022/03/HDD-300x300.png"
          className="productImg" alt=""
        />
      ),
      name:"SEAGATE 2TB One Touch External HD)",
      price:"₱5,150.00",
      availability:" In stock",
      description: "-",   
          
      },
      {
        image:  ( <img
          src="https://obanana.com/wp-content/uploads/2022/08/4TB-External-One-Touch-3.5″-Hard-Disk-Drive-USB-3.0-300x300.jpg"
          className="productImg" alt=""
        />
      ),
      name:"4TB External One Touch 3.5″ Hard Disk Drive (USB 3.0)",
      price:"₱7,750.00",
      availability:" In stock",
      description: "-",   
          
      }
]
        
const Compare = () => {

    const [newProducts, setNewProducts] = useState(products);

    const SwapArray = (i)=>{
      let prod = newProducts
      let temp = prod[i-1];

      // Step 2
      prod[i-1] = prod[i];
    
      // Step 3
      prod[i] = temp;
      setNewProducts(prod)
    }
  return (
    <Con>
      <div className="con">
      <div className="header">
        <h1>Compare</h1>
        </div>
        <div className="navHistory">
        <div className="navLink">
          <ul>
            <a href="home">Home</a>
            <FaAngleRight className="angleicon" />
            <a href="compare">Compare</a>
          </ul>
        </div>
        </div>
        <div className = "Main">    
         <div className="Container">

            <div className="heading">
               
               <div className="first"><h3>Product</h3></div>
               <div className="row"><h3>Price</h3></div>
               <div className="row"><h3>Availability</h3></div>
               <div className="row"><h3>Description</h3></div>
               <div className="row"><h3>Ratings & Reviews</h3></div>
            </div>
            
            <div className="contents">
       
              <Products newProducts={products}/>

          </div>
        </div>  
        </div>   
         </div>  
        </Con>
  )
}

const Con = styled.div`
  position: relative;
  z-index: 10;
 width: 100%;
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
  & .Main{
    width: 100%;
    
    & .Container{
        display: inline-flex;
      
    & .heading{
     width: 25vw;
     margin: auto;
     & button{
      height: 25px;
      
     }
    }
    & .heading{
      height:100%;
    }
       
    & .first{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 445px;
    padding: 25px 50px 25px 0;
         & h3{
        
     }
    }
    & .row{
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 25px 50px 25px 0;
   
   // border: 1px solid ;
    font-size: 14px;
    }
   
    }
    }
    & .contents{
     
    }
`
export default Compare