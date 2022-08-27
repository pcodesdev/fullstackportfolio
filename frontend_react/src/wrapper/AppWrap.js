import React from "react";

import { NavigationDots, SocialMedia } from "../components";
// 👇️ Get current Year
const currentYear = new Date().getFullYear();
// Use of higher order component
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@ {currentYear} PETER</p>
            <p className="p-text">All Rights Reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
