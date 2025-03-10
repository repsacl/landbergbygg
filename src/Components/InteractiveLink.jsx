import { motion } from "motion/react"
import { Link } from "react-router-dom";


const DURATION = 0.2;
const STAGGER = 0.02;
const TextLink = ({ children, to }) => {
    return(
    <motion.span
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap cursor-pointer"

        whileTap={{ scale: 0.8, color: "#36b7ff" }} 
    >
        <Link to={to}>
            <span>
                {children.split("").map((letter, i) => (
                    <motion.span key={i}
                        className="inline-block"
                        variants={{
                            initial: { y: 0, opacity: .8 },
                            hovered: { y: "-100%", opacity: 1 }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </span>

            <span className="absolute inset-0">
                {children.split("").map((letter, i) => (
                    <motion.span key={i}
                        className="inline-block"
                        variants={{
                            initial: { y: "100%", opacity: 1 },
                            hovered: { y: 0, opacity: 1 }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i
                        }}

                        style={{
                            color: "#36b7ff"
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </span>
        </Link>
    </motion.span>

    )
}

export default TextLink