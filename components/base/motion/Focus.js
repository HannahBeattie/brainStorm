import { motion } from 'framer-motion'

export default function Focus({ children, transition, rotateBy, rotateX, initial, moveX }) {
	return (
		<motion.div
			animate={{ rotate: initial ? initial : 0, x: moveX ? moveX : 0, scale: 0.7 }}
			whileHover={{
				// scale: 0.9,
				rotate: rotateBy ? rotateBy : -5,
				x: rotateX ? rotateX : 20,
				ease: 'easeInOut',
				cursor: 'pointer',
			}}
			transition={{ ease: 'easeInOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
