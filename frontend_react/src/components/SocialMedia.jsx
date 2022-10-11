import React from "react";

import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/PcodesDev">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/peter-njuguna-b3531614a/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/njugunapm233">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
