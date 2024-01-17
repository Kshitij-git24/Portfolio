import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: ["start start", "end start"],
  });
  // console.log("scrollYprog", scrollYProgress);

  const yText = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"]);
  const yImg = useTransform(scrollYProgress, [0, 1], ["0px", "1500px"]);
  // const opacity = useTransform(scrollYProgress, [0, 1], ["1000%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [-0.9, 4]);

  const fadeInFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="parallax"
      ref={ref}
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
        style={{ opacity: opacity }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yImg }}></motion.div>
    </motion.div>
  );
};
