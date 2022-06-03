import React, { useState } from "react";
import { ProfileConfig } from "../../Configs/ProfileConfig";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Welcoming = () => {
  const [hide, setHide] = useState(false);
  const removeComponents = () => {
    setTimeout(() => setHide(true), 1000);
  };

  const scrollDown = () => {
    const welcoming = document.getElementById("welcoming");
    const displaying = document.getElementById("displaying");
    displaying.style.display = "flex";
    welcoming.style.height = 0;
    welcoming.style.animation = "fadeout 0.5s forwards";
    removeComponents();
  };

  if (hide) {
    return <div></div>;
  }

  return (
    <div id="welcoming">
      <div className="welcome-background">
        <h3
          style={{ fontFamily: "Bellota, sans-serif" }}
          className="pre-heading"
        >
          Meet
        </h3>
        <h1
          style={{ fontFamily: "Dancing Script, sans-serif" }}
          className="heading"
        >
          Wendy Cheng
        </h1>
        <h4
          style={{ fontFamily: "Bellota, sans-serif" }}
          className="sub-heading"
        >
          A Curious Web Developer
        </h4>
      </div>
      <div className="welcome-info">
        <div className="summary">
          <h3 style={{ fontFamily: "Bellota, sans-serif" }}>
            {ProfileConfig.basicInfo.data.intro.summary
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  <span className="outside">
                    <span
                      className="inside"
                      style={{ animationDelay: `${4 + index * 0.08}s` }}
                    >
                      {" "}
                      {word}{" "}
                    </span>
                  </span>
                  <span> </span>
                </span>
              ))}
          </h3>
        </div>
        <div className="scroll-button"></div>
      </div>
    </div>
  );
};

export default Welcoming;
