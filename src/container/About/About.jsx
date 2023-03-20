import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap,motionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const about = [
    {
      title: "Full Stack Developer",
      description: "I am a passionate web developer.",
      imgUrl: images.about1,
    },
    {
      title: "Web Design",
      description: "I am a good web designer.",
      imgUrl: images.about2,
    },
    {
      title: "Backend Developer",
      description: "I am a good web developer.",
      imgUrl: images.about3,
    },
    {
      title: "Frontend Developer",
      description: "I am a good web developer.",
      imgUrl: images.about4,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profile">
        {about.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + i}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="bold-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  motionWrap(About, 'app__about'),
  'about',
  "app__whitebg") ;
