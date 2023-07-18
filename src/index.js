import React from "react";
import ReactDOM from "react-dom";
import Info from "./info";
import About from "./about";
import Profilepix from "./profile";

function Page() {
  return (
    <div className="parent-container">
      <Profilepix />
      <div className="main">
        <Info />

        <About />
      </div>
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
