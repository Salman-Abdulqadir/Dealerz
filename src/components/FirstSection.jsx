import React from "react";

//IMPORTING IMAGES
import ellipse from "../images/Ellipse.png";

//framer motion
import { motion } from "framer-motion";
import {
  titleAnimation,
  pageAnimation,
  slider,
  sliderContainer,
} from "../animation";

//styled component
import styled from "styled-components";

const FirstSection = ({ title, btn_status }) => {
  const title_array = title.split(" ");

  return (
    <motion.section
      className="first-section"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <div className="vectors">
        <img src={ellipse} className="img1" alt="ellipse1" />
        <img src={ellipse} className="img2" alt="ellipse2" />
        <img src={ellipse} className="img3" alt="ellipse3" />
        <div className=" circle circle-1"></div>
        <div className=" circle circle-2"></div>
      </div>
      <div className="flex-column first-section-title">
        <div className="hide">
          <motion.h2 variants={titleAnimation}>
            {title_array[0] + " " + title_array[1]}
            <br />
            {title_array.map((element, index) => {
              if (index > 1) return element + " ";
              return "";
            })}
          </motion.h2>
        </div>
        <div className="hide">
          <motion.p variants={titleAnimation}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Deserunt natus, accusamus ipsum qui molestias et!
          </motion.p>
        </div>

        {/* RENDERING THE BUTTON ONLY IN THE HOME PAGE, AND THIS IS BY CHECKING THE "btn_status" */}
        <>
          {btn_status ? (
            <div className="hide">
              <motion.button variants={titleAnimation} className="orange-btn">
                Find out more
              </motion.button>
            </div>
          ) : (
            ""
          )}
        </>
      </div>
    </motion.section>
  );
};

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  height: 100vh;
  width: 100%;
  background-color: #38f8e8;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background-color: #f8c838;
`;
const Frame3 = styled(Frame1)`
  background-color: #98f838;
`;
const Frame4 = styled(Frame1)`
  background-color: #f86338;
`;
export default FirstSection;
