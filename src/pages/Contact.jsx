import React from "react";



//style 
import "./style.css";

//images
import Svg1 from "../images/svg1Contact.png"
import Svg2 from "../images/svg2Contact.png"
import Svg3 from "../images/svg3Contact.png"



export default function Contact() {
    return (
        <div className="background2">
        <div className="container">
            {/* Chap tarafdagi matn */}
            <div className="text-section">
                <h1>
                Let’s Keep in Touch
                </h1>
                <p>
                We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                </p>

                <div className="phone-contact">
                    <div className="phone-contact-card">
                    <img src={Svg1} alt="" />
                    +1 555 505 5050
                    </div>

                    <div className="phone-contact-card">
                    <img src={Svg2} alt="" />
                    info@designmodo.com
                    </div>

                    <div className="phone-contact-card">
                    <img src={Svg3} alt="" />
                    San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909
                    </div>
                    
                    
                    

  

                    
                </div>
            </div>

            {/* O'ng tarafdagi forma */}
            <div className="form-box">
                <div className="tabs">
                    <span className="active-tab">SIGN UP</span>
                    <span className="inactive-tab">LOGIN</span>
                </div>
                <input type="email" placeholder="Your email" className="input" />
                <input type="password" placeholder="Your password" className="input" />
                <button className="create-btn">Create an Account</button>
                <div className="divider">or</div>
                <button className="twitter-btn">Login via Twitter</button>
            </div>
        </div>
    </div>
    )
}