import { motion } from "motion/react";

const InteractiveText = ({ children, className }) => {
    return (
      <motion.div className={`relative block uppercase overflow-hidden whitespace-nowrap ${className}`}
        initial="initial"
        whileHover="hovered"
      >
        <motion.div
          variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
        >
          {children}
        </motion.div>
  
        <motion.div
          className="absolute inset-0"
          variants={{ initial: { y: "100%", opacity: 1 }, hovered: { y: 0, opacity: 1 } }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  };

export default InteractiveText