import { motion } from 'framer-motion'

export default function HoverPulse({ children, ...rest }) {
	return (
		<motion.div
			whileHover={{
				scale: [1, 1.05, 1, 1.05, 1],
				cursor: 'pointer',
			}}
			transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
		>
			{children}
		</motion.div>
	)
}
