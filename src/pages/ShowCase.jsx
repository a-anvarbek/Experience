import React from "react";
import "./style.css";


//images
import Image1 from "../images/LastWork1.png";
import Image2 from "../images/LastWork2.png";
import Image3 from "../images/LastWork3.png";
import Image4 from "../images/LastWork4.png";

export default function ShowCase() {
    return (
        <div className="works-section">
            <div className="works-header">
                <h2>Last works</h2>
                <button className="view-all-btn">View all Works</button>
            </div>

            <div className="works-grid">
                <div className="work-card">
                    <img src={Image1} alt="Mozart Project" />
                    <p className="category">UI KIT</p>
                    <h3>Mozart Project</h3>
                </div>

                <div className="work-card">
                    <img src={Image2} alt="Startup Framework" />
                    <p className="category">FRAMEWORK</p>
                    <h3>Startup Framework 2.0</h3>
                </div>

                <div className="work-card">
                    <img src={Image3} alt="From the Sky" />
                    <p className="category">PHOTOS</p>
                    <h3>From the Sky</h3>
                </div>

                <div className="work-card">
                    <img src={Image4} alt="Air Forces" />
                    <p className="category">PICTURES</p>
                    <h3>Air Forces</h3>
                </div>
            </div>
        </div>
    );
}
