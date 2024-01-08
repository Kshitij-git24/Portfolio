import "./Sidebar.scss";
import { motion } from "framer-motion";

export default function Links(props) {
  const links = ["Homepage", "Projects", "Tech", "Contact"];
  let func1 = props.props;

  const handleLinkClick = () => {
    func1((prev) => !prev);
  };

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: -100,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {links.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          onClick={handleLinkClick}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 5 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
