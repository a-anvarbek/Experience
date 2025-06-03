import React from "react";

// style
import "./style.css";

// images
import Macbook from "../images/macbook.png";

export default function Features() {
    return (
        <div className="features-container">
            <div className="features-left">
                <img src={Macbook} alt="Macbook" className="macbook-image" />
            </div>
            <div className="features-right">
                <h2 className="features-title">We Create Something New</h2>
                <p className="features-description">
                    We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                </p>
                <div className="features-items">
                    <div className="feature-box">
                        <i className="icon icon-file" />
                        <h4>30 NEW FEATURE PAGES</h4>
                        <p>Startup Framework contains components and complex blocks which can easily.</p>
                    </div>
                    <div className="feature-box">
                        <i className="icon icon-diamond" />
                        <h4>USEFUL SYMBOL COMPONENTS</h4>
                        <p>Samples will show you the feeling on how to play around using the components.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
