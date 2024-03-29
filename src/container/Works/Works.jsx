import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import "./Worker.scss";
import { AppWrap, motionWrap } from "../../wrapper";
import { images } from "../../constants";

const Works = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const data = [
    {
      title: "Turf Play",
      description: "This is a turf booking platform.",
      projectLink: "",
      codeLink: "https://github.com/yaser367/frontend-turfPlay-react",
      tag: ["Mern", "All"],
      imgUrl: images.turfplay,
    },
    {
      title: "Ezyshop",
      description: "It's an e-commerce web application based on electronic gadgets.",
      projectLink: "",
      codeLink: "",
      tag: ["Mern", "All"],
      imgUrl: images.ezyshop,
    },
    {
      title: "Olx clone",
      description: "It's a clone of olx application.",
      projectLink: "",
      codeLink: "https://github.com/yaser367/olx-react",
      tag: ["React Js", "All"],
      imgUrl: images.olx,
    },
   
  ];

  const [works, setWorks] = useState(data);
  const [filter, setFilter] = useState(data);

  const handleWorkFilter = (item) => {
    setAnimateCard({ y: 100, opacity: 0 });
    setactiveFilter(item);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilter(works);
      } else {
        setFilter(works.filter((work) => work.tag.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {["Mern", "Web App", "Mobile App", "React Js", "All"].map(
          (item, i) => (
            <div
              key={i}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filter.map((work, i) => (
          <div className="app__work-item app__flex " key={i}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tag[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  motionWrap(Works, "app__works"),
  "work",
  "app__primarybg"
);
