import React from "react";
import "./profile-banner.css";

import profileImg from "../../assets/profile-img.jpg";

const ProfileBanner = () => {
  return (
    <div className="container">
      <div className="image-socials">
        <div className="user-image">
          <img src={profileImg} alt="default-profile" />
        </div>
        <div className="social-icons">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-square-youtube"></i>
        </div>
      </div>
      <div className="user-content">
        <div className="user-header">
          <div className="user-name">
            <h3>John Doe</h3>
            <span className="user-pronouns">(he/him)</span>
          </div>
          <div className="user-titles">
            Software Graduate - Maths Graduate - Python Programmer - Full Stack
            Dev - Speaks Spanish
          </div>
        </div>
        <div className="user-overview">
          <h5>Overview</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            voluptatem, ea expedita non omnis incidunt excepturi inventore cum
            eaque magni tempore! Dicta, dignissimos. Debitis modi officia
            voluptas repudiandae labore aliquam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Suscipit hic aut, sed officia, dolorum
            sint odit ea aliquam repellendus id dolor! Est mollitia sint amet
            quod provident, error id minus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
