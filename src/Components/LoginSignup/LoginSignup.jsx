import React from 'react'
import './LoginSignup.css'

import logo from '../Assets/logo.jpeg'
import pic_icon from '../Assets/pic.jpeg'

const LoginSignup = () => {
  return (
    <div className="container">
        <div className="left-section">
            <img src={logo} alt=""/>
            <a href="" style={{marginLeft: '-190px',color:'black',fontSize:'13px'}}>Personal Account</a>
            <p style={{color:'grey',marginLeft:'108px',marginTop:'-12px',fontSize:'10px'}}>Organization</p><br />
            
            <h2>Create Your Zinio Account</h2>
            <p>you're one step away from your role</p><br/>
            <div className="sign-up">
                <form action="" method="post">
                    <div className="first-name">
                        <span>First Name</span><br/>
                        <input className="name" type="text" placeholder="first name" />
                    </div>
                    <div className="last-name">
                        <span>Last Name</span><br/>
                        <input className="name" type="text" placeholder="last name"/>
                    </div><br/><br/>
                    <div>
                        <span>Email Address</span><br/>
                        <input class="text-box" type="email" placeholder="example@domain.com"/>
                    </div><br/>
                    <div>
                        <span>Password</span><br/>
                        <input class="text-box" type="password" placeholder="*******"/>
                    </div><br/>
                    <div>
                       <button style={{background:'cadetblue',color:'white'}} className="text-box">Create Account</button>
                    </div><br/>
                    <p>Already have a Zinio Account? <a href="">Sign In</a></p>
                </form><br/>
                <p style={{fontSize: '12px'}}>By Creating an account,you are authorizing <a href="">Zinio Talent Hub</a> authorized<br/>
                personnel and its service providers access to your personal inforation for the<br/>
                 purpose of securing employment on your behalf. you acknowledge that you<br/>
                  have read and fully understand the
                  <a href="">Privacy policy</a> and <a href="">Terms and Conditions</a></p>
            </div>
        </div>
        <div className="right-section">
            <img className="pic" src={pic_icon} alt=""/>
        </div>
    </div>
  );
};

export default LoginSignup