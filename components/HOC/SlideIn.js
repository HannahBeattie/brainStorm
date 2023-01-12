import { motion, useScroll } from 'framer-motion'

export default function SlideIn({ children, xVal }) {
	let x = xVal ? xVal : 0
	return (
		<motion.div
			initial={{ x: xVal, y: 0, opacity: 0 }}
			whileInView={{ x: 0, y: 0, opacity: 1 }}
			exit={{ x: xVal, opacity: 0, y: 0 }}
			transition={{
				delayChildren: 1,
				duration: 1,
				ease: 'easeInOut',
			}}
		>
			{children}
		</motion.div>
	)
}
