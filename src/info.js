import React from "react";
import { FaEnvelope, FaTwitter } from "react-icons/fa";

import "./index.css";

export default function Info() {
  return (
    <div>
      {/* Name */}
      <div className="name">
        <h1>Okafor Joseph</h1>
        <p>Frontend Developer</p>
      </div>
      {/* buttons */}
      <div className="btns">
        <button className="env-btn">
          <FaEnvelope className="envelope" /> Email
        </button>

        <button className="tweet-btn">
          <FaTwitter className="twitter" /> Twitter
        </button>
      </div>
    </div>
  );
}
