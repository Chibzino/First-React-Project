import React from "react";
import ProfileImage from "./profile.jpeg";
import "./index.css";

export default function Profilepix() {
  return (
    <div>
      <img className="profile-img" src={ProfileImage} alt="ProfileImage" />
    </div>
  );
}
