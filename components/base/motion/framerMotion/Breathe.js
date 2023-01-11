import { motion } from 'framer-motion'

export default function Breathe({ children, transition }) {
	return (
		<motion.div
			whileHover={{
				scale: [1, 1.2, 1, 1.2, 1],
				ease: 'easeInOut',
			}}
			transition={{ duration: 4, ease: 'easeInOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
