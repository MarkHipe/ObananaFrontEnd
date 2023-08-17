import React, { useState } from 'react'
import styled from 'styled-components'

function Account() {
    const [active, setactive]=useState("login")
  return (
    <Con>
    <div className="wrapper">
    <div className="form-container">
    <div className="title-text">
        <div className="title Login">SIGN IN</div>
        <div className="title Signup" >SIGN UP</div>
    </div>
   
    <div className="slide-controls">
        <input type="radio"name="slider" id="login" checked/>
        <input type="radio" name="slider" id="signup" />
    <label for="login" className="slide login"  onClick={()=>setactive("login")}>SIGN IN</label>
    <label for="signup" className="slide signup" onClick={()=>setactive("signup")}>SIGN UP</label>
    <div className="slide-tab"></div>
        </div>
        <div className="form-inner">
        <form action="#" className={active==="login"? "login active":"login inactive"}>
           <div className="field">
            <input type="text" placeholder="Email Address" required/>
            </div> 
            <div className="field">
            <input type="password" placeholder="Password" required/>
            </div> 
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field">
            <input type="submit" value="SIGN IN" />
            </div>
        </form>
        <form action="#"  className={active==="signup"? "signup active":"signup inactive"}>
           <div className="field">
            <input type="text" placeholder="Email Address" required/>
            </div> 
            <div className="field">
            <input type="password" placeholder="Password" required/>
            </div> 
            <div className="field">
            <input type="password" placeholder="Confirm Password" required/>
            </div> 
            <div className="field">
            <input type="submit" value="SIGN UP" />
            </div>
        </form>
        </div>
    </div>
    </div>

    
    </Con>
  )
}

const Con = styled.div`
    display: grid;
    height: 600px;
    place-items: center;
    background: #f2f2f2;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    

    & .wrapper{
        max-width: 390px;
        background: #fff;
        padding: 40px;
        border-radius: 5px;
        box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    & .title-text{
        display: flex;
        width: 200%;
    }
    & .title{
        width:50%;
        font-size: 35px;
        font-weight: 600;
        text-align: center;
    }
    & .form-container{
        width: 100%;
        overflow: hidden;
    }
     & .form-inner{
        display: flex;
        width: 200%;
    }
    & .login.inactive{
        margin-left:-50%;
        transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
       visibility: hidden;
    }
    & .login.active{
        transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
        position: relative;
    
    } 
    /* & .signup.active{
        position: relative;
        margin-left: -50%;
    } */
    & .slide-controls{
        position: relative;
        display: flex;
        height: 50px;
        width: 99%;
        overflow: hidden;
        border-radius: 5px;
        margin: 30px 0 10px 0;
        justify-content: space-between;
        border: 1px solid lightgray;
        & .signup{
            color: #000;
        }
    }
    & .slide{
        height: 100%;
        width: 100%;
        font-size:18px;
        font-weight: 500;
        text-align: center;
        line-height: 48px;
        z-index: 1;
        color: #fff;
        cursor:pointer;
        transition:all 0.6s ease;
    }
    & .slide-tab{
        position: absolute;
        height: 100%;
        width: 50%;
        left: 0;
        z-index: 0;
        border-radius: 5px;
        transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
        background: red;
}
input[type="radio"]{
    display: none;
}
#signup:checked ~ .slide-tab{
    left:50%;
}
#signup:checked ~ .signup{
    color: #fff;}
 #signup:checked ~ .login{
    color: #000;}

    .form-container .form-inner form{
        transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
        width: 50%;
    }
    & .field{
        height: 50px;
        width: 100%;
        margin-top:20px;

        
    }
    & .field input{
        height: 100%;
        width: 95%;
        outline: none;
        padding-left: 10px;
        font-size: 17px;
        border-radius: 5px;
        border: 1px solid lightgray;
        border-bottom-width:2px;
        transition: all 0.4s ease;
    }
    & .field input:focus{
border-color: #fc83bb;
    }
    & form .pass-link{
        margin-top: 5px;
    }
    & .pass-link a{
        color: #fa4299;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
    & .field input[type="submit"]{
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        padding-left: 0px;
        border:none;
        cursor: pointer;
        background: -webkit-linear-gradient(left, #a445b2, #fa4299);
    }

`
export default Account