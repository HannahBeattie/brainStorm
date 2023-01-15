import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'

const variants = {
	animateMe: { rotateX: [0, -10, 0, -10, 5, 0, -10], rotate: [3, -3, 3], x: 100 },
}
export default function Snail({ children }) {
	const [animate, setAnimate] = useState(false)
	return (
		<motion.div
			whileHover={{
				cursor: 'pointer',
				rotateX: [0, -10, 0, -10, 5, 0, -10],
				rotate: [3, -3, 3],
				x: 100,
			}}
			animate={animate ?? 'animateMe'}
			variants={variants}
			transition={{ duration: 3, ease: 'easeInOut' }}
			whileTap={{
				userSelect: 'none',
				cursor: 'pointer',
				rotateX: [0, -10, 0, -10, 5, 0, -10],
				rotate: [3, -3, 3],
				x: 100,
			}}
			// whileTap={() => setAnimate((animate) => !animate)}
		>
			{children}
		</motion.div>
	)
}
