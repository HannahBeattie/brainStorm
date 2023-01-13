import { motion } from 'framer-motion'

export default function HeartBeat({ children, ...rest }) {
	return (
		<motion.div
			animate={{ scale: [1, 0.99, 1, 0.99, 1], cursor: 'pointer' }}
			transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
		>
			{children}
		</motion.div>
	)
}
