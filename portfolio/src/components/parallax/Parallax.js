import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  console.log("scrollYprog", scrollYProgress);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);
  // const opacity = useTransform(scrollYProgress, [1, 0], ["0%", "0%"]);

  return (
    <div
      className="parallax"
      style={{
        background:
          type === "projects"
            ? "linear-gradient(#111132,#0c0c1d)"
            : "linear-gradient(#111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "projects"
          ? "Projects that I worked on"
          : "Technologies I am familiar with"}
      </motion.h1>
      <motion.div
        className="main-image"
        style={{ opacity: opacity, zIndex: 1 }}
      ></motion.div>
      <motion.div
        className="zoom-image"
        // style={{ opacity: opacity }}
      ></motion.div>
    </div>
  );
};
