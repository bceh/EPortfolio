import "./Welcoming.css";
import React, { useState, useEffect } from "react";
const Welcoming = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
  }, []);
  const getClass = () => {
    let classes = "welcomingContainer";
    if (loading) return classes;
    classes = classes + " fade";
    return classes;
  };
  return (
    <div className={getClass()}>
      <content className="Welcoming-message">
        <h2 className="intro-h2">
          <span className="intro-welcome">Welcome</span>
          <span className="intro-to"> To</span>
        </h2>
        <h1 className="intro-h1">
          <span className="intro-name">Francis Cheng</span>
          <span className="intro-prof">'s E-Profolio</span>
        </h1>
        <h3 className="intro-description intro-h3">
          A Front-end Web Developer{" "}
        </h3>
      </content>
    </div>
  );
};

export default Welcoming;
