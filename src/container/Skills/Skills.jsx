import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, motionWrap } from "../../wrapper";
import { images } from "../../constants";
import { Tooltip } from "react-tooltip";
import "./Skills.scss";
import "react-tooltip/dist/react-tooltip.css";

const Skills = () => {
  const experience = [
    {
      name: "Full stack Developer",
      company: "Freelancer",
      desc: "I worked as full stack developer",
      year: 2022,
    },
  ];

  const skill = [
    { name: "Nodejs", bgColor: "#e6e9e8", icon: images.Node },
    { name: "Redux", bgColor: "#e6e9e8", icon: images.redex },
    { name: "React", bgColor: "#e6e9e8", icon: images.React },
    { name: "MongoDB", bgColor: "#e6e9e8", icon: images.MongoDB },
    { name: "Figma", bgColor: "#e6e9e8", icon: images.figma },
    { name: "Git", bgColor: "#e6e9e8", icon: images.git },
    { name: "Javascript", bgColor: "#e6e9e8", icon: images.js },
    { name: "HTML", bgColor: "#e6e9e8", icon: images.html },
    { name: "CSS", bgColor: "#e6e9e8", icon: images.css },
    { name: "Aws", bgColor: "#e6e9e8", icon: images.aws },
  ];

  return (
    <>
      <h2 className="head-text">Skill & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skill.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experience.map((work) => (
            <motion.div className="app__skills-exp-item" key={work?.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{work?.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={work.desc}
                    data-tooltip-place="top"
                  >
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </a>
                  <Tooltip id="my-tooltip" />
                </>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  motionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
