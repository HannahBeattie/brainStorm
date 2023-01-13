import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Focus({ children }) {
	return (
		<motion.div
			whileHover={{ rotateX: [0, -10, 0, -10, 5, 0, -10], rotate: [3, -3, 3], x: 100 }}
			transition={{ duration: 3, ease: 'easeInOut', cursor: 'pointer' }}
		>
			{children}
		</motion.div>
	)
}
