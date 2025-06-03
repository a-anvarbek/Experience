import React from "react";
import "./style.css"; 

export default function Form() {
    return (
        <div className="background">
            <div className="container">
                {/* Chap tarafdagi matn */}
                <div className="text-section">
                    <h1>
                        We solve digital problems with an outstanding <br />
                        creative <span className="highlight">flare</span>
                    </h1>
                    <p>
                        We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                    </p>
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
    );
}
