import { motion } from 'framer-motion'

export default function Pulse({ children, ...rest }) {
	return (
		<motion.div
			whileInView={{ scale: [1, 0.99, 1, 0.99, 1], cursor: 'pointer' }}
			transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
		>
			{children}
		</motion.div>
	)
}
