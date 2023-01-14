import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Snail({ children }) {
	return (
		<motion.div
			whileHover={{
				cursor: 'pointer',
				rotateX: [0, -10, 0, -10, 5, 0, -10],
				rotate: [3, -3, 3],
				x: 100,
			}}
			transition={{ duration: 3, ease: 'easeInOut' }}
		>
			{children}
		</motion.div>
	)
}
