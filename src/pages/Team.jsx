import React from "react";
import "./style.css";


import { FaTwitter, FaFacebookF, FaDribbble, FaInstagram, FaSkype, FaMedium, FaGithub, FaGlobe } from "react-icons/fa";

const iconMap = {
  twitter: <FaTwitter />,
  facebook: <FaFacebookF />,
  dribbble: <FaDribbble />,
  instagram: <FaInstagram />,
  skype: <FaSkype />,
  medium: <FaMedium />,
  github: <FaGithub />,
  globe: <FaGlobe /> // default fallback
};


//images
import Team1 from "../images/Team1.png"
import Team2 from "../images/Team2.png"
import Team3 from "../images/Team3.png"
import Team4 from "../images/Team4.png"
import Team5 from "../images/Team5.png"

const teamMembers = [
    {
      name: "Leah Salomon",
      role: "UI Designer",
      image: Team1, // ✅ obyekt emas
      socials: ["twitter", "facebook", "dribbble", "instagram"]
    },
    {
      name: "Colin Timmons",
      role: "UX Designer",
      image: Team2,
      socials: ["twitter", "dribbble"]
    },
    {
      name: "Miguel Osborne",
      role: "Front-end Developer",
      image: Team3,
      socials: ["skype", "medium", "github"]
    },
    {
      name: "Taylor Simon",
      role: "Product Manager",
      image: Team4,
      socials: ["twitter", "instagram"]
    },
    {
      name: "Steven MacAlister",
      role: "Copyrighter",
      image: Team5,
      socials: ["twitter"]
    }
  ];
  
export default function Team() {
  return (
    <div className="team-container">
       <div className="works-header">
                <h2>Last works</h2>
                <button className="view-all-btn">View all Works</button>
            </div>

      <p className="subtitle">
        The most important part of the Startup Framework is the samples. The
        samples form a set of 25 usable pages you can use as is or you can add
        new blocks from UI Kit.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <div className="socials">
  {member.socials.map((item, i) => (
    <span key={i}>{iconMap[item] || iconMap.globe}</span>
  ))}
</div>


          </div>
        ))}
      </div>
    </div>
  );
}
