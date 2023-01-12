import { motion, useScroll } from 'framer-motion'

export default function SlideIn({ children, y, x }) {
	let yval = y ?? 300

	return (
		<motion.div
			initial={{ y: yval, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 300, opacity: 0 }}
			transition={{
				duration: 1,
				ease: 'easeInOut',
			}}
			style={{
				width: '100vw',
				height: '100vh',
			}}
		>
			{children}
		</motion.div>
	)
}
