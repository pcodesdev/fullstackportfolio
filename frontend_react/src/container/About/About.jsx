import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { images } from "../../constants";
// import about4 from "../../assets/about4.png";
// import about5 from "../../assets/about5.png";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

// const abouts = [
//   {
//     title: "Fullstack Web Development",
//     description:
//       "I develop both the frontend and the backend of any web appication",
//     imgUrl: images.about1,
//   },
//   {
//     title: "Web Design",
//     description:
//       "I am develop top notch web interfaces that attracts and excites customers",
//     imgUrl: images.about04,
//   },

//   {
//     title: "IT Support",
//     description:
//       "Have more than 3 years providing fast line IT Support to various clients",
//     imgUrl: about4,
//   },
//   {
//     title: "IT Trainaing",
//     description:
//       "I have successfully trained more than 250 students on digital competences program and Creative Industries by FCA and Mondo NGO",
//     imgUrl: about5,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type =="abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h4 className="head-text">
        I Know that <span>"A successful website does three things: </span>
        It attracts the right kinds of visitors.
        <br />
        Guides them to the main services or product you offer.
        <br />
        Collect Contact details for future ongoing relation.
        <span>" ― Mohamed Saad</span>
      </h4>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
