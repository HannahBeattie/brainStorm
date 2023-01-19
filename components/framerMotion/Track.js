import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Track({ children, index }) {
	const x = useSpring(50, { stiffness: 300 })
	const y = useSpring(50, { stiffness: 300 })

	const rotateX = useTransform(y, [0, 100], [30, -30])
	const rotateY = useTransform(x, [0, 100], [-30, 30])

	function handleMouse(event) {
		const rect = event.currentTarget.getBoundingClientRect()
		x.set(event.clientX - rect.left)
		y.set(event.clientY - rect.top)
	}

	const isOdd = index % 2
	return (
		<motion.div
			style={{
				cursor: 'pointer',
				display: 'flex',
				placeItems: 'center',
				placeContent: 'center',
				perspective: 400,
				scale: 0.9,
			}}
			key={`letter-${children}`}
			onMouseMove={handleMouse}
			onMouseLeave={() => {
				x.set(50)
				y.set(50)
			}}
			onTapStart={handleMouse}
			whileTap={{ scale: 0.99, rotate: [0, 10, -1, 0] }}
			whileHover={{ scale: [0.9, 1.1] }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			<motion.div
				drag
				dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
				dragElastic={0.01}
				dragTransition={{ bounceStiffness: 300, bounceDamping: 40 }}
				whileTap={{ rotate: [0, 1, -1, 0] }}
				style={{ rotateX, rotateY }}
				initial={{ opacity: 0, scale: 0 }}
				animate={{
					opacity: 1,

					scale: isOdd ? [0.5, 1] : [0.9, 1],
					rotateX: [index * 0.5, 0],
					rotateZ: isOdd ? [5, 0] : [-5, 0],
					rotateY: isOdd ? [5, 0] : [-5, 0],
				}}
				transition={{ duration: 0.6, delay: index * 0.15 + 4, ease: 'easeInOut' }}
			>
				{children}
			</motion.div>
		</motion.div>
	)
}
