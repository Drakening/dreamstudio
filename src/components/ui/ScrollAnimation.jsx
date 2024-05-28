import { motion } from "framer-motion";
import './scrollanimation.css';

const ScrollAnimation = ({ children }) => {
	const slideInAnimationVariants = () => ({
		initial: {
			opacity: 0,
			y: 50,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
                duration: 1,
                delay: 0.2
                
			},
		},
	});

	return (
		<motion.div
			variants={slideInAnimationVariants()}
			initial='initial'
			whileInView='animate'
            viewport={{ once: true }}
            className="animation"
		>
			{children}
		</motion.div>
	);
};

export default ScrollAnimation;
