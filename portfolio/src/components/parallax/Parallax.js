import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type }) => {
  // const ref = useRef();
  // const { scrollYprog } = useScroll({
  //   // target: ref,
  //   offset: ["start start", "end start"],
  // });

  // const yText = useTransform(scrollYprog, [0, 1], ["0%", "100%"]);

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
      <motion.h1>
        {type === "projects"
          ? "Projects that I worked on"
          : "Technologies I am familiar with"}
      </motion.h1>
      <motion.div className="main-image"></motion.div>
      <motion.div className="zoom-image"></motion.div>
    </div>
  );
};
