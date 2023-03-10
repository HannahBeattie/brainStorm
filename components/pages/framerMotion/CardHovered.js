import { motion } from 'framer-motion'

export default function CardHovered({ children, transition, yIs, rotate, yIsNow }) {
	return (
		<motion.div
			animate={{ scale: 1, x: 0, rotate: rotate ? rotate : 0, y: yIs ? yIs : 0 }}
			whileHover={{
				y: yIsNow ? yIsNow : -5,
				x: 0,
				rotate: -5,
				ease: 'easeInOut',
				cursor: 'pointer',
			}}
			transition={{ ease: 'easeInOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
