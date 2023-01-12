import { motion } from 'framer-motion'

export default function Focus({ children, transition, rotateBy }) {
	return (
		<motion.div
			whileHover={{
				scale: 0.8,
				rotate: rotateBy ? rotateBy : -5,
				ease: 'easeInOut',
				cursor: 'pointer',
			}}
			transition={{ ease: 'easeInOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
