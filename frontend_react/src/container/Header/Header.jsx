import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import profile from "../../assets/peter1.png";
import bootstrap from "../../assets/bootstrap.png";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Peter</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">FullStack Web Developer</p>
            <p className="p-text">IT Support</p>
            <p className="p-text">IT Tutor</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={profile} alt="image-profile" />
        <motion.img
          className="overlay_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        className="app__header-circles"
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        {[images.javascript, images.react, bootstrap].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
