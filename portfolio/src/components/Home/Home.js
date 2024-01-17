import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textCon"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="h2-1">Hey,</h2>
          <h2 className="h2-2">I'm Kshitij</h2>
          <h1>
            - A masters student with a passion for coding and a vision for a
            better tomorrow. Looking for positions where I can make a meaningful
            impact.
          </h1>
        </motion.div>
        {/* <div className="resume">
          
        </div> */}
      </div>
    </div>
  );
};

export default Home;
