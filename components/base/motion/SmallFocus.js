import { motion } from 'framer-motion'

export default function SmallFocus({ children, transition, yIs, rotate, yIsNow }) {
	return (
		<motion.div
			animate={{ scale: 0.9, x: 5, rotate: rotate ? rotate : -10, y: yIs ? yIs : -100 }}
			// animate={{ rotate: initial ? initial : 0, x: moveX ? moveX : 0 }}
			whileHover={{
				// rotate: rotateBy ? rotateBy : 2,
				y: yIsNow ? yIsNow : -20,
				x: 10,
				rotate: 0,
				ease: 'easeInOut',
				cursor: 'pointer',
			}}
			transition={{ ease: 'easeInOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
