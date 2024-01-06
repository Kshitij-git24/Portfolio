import { useState } from "react";
import "../components/Navbar.scss";
import { motion } from "framer-motion";
import "../components/Sidebar.scss";
import closeMenuImage from "../images/closeMenu.png";
import menuImage from "../images/menu.png";
import Links from "./Links";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <motion.div className="links">
          <Links props={setOpen} />
        </motion.div>
        <button onClick={() => setOpen(!open)}>
          <img
            className="menuImg"
            src={open ? closeMenuImage : menuImage}
            alt={open ? "close" : "menu"}
          />
        </button>
      </motion.div>
    </motion.div>
  );
};
