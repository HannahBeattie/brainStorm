import {
	AnimatePresence,
	motion,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion'

export default function Track2({ children, index }) {
	const x = useSpring(50, { stiffness: 300 })
	const y = useSpring(50, { stiffness: 300 })
	const scrollYProgress = useScroll
	const rotateX = useTransform(y, [0, 100], [10, -10])
	const rotateY = useTransform(x, [0, 100], [-10, 10])

	function handleMouse(event) {
		const rect = event.currentTarget.getBoundingClientRect()
		x.set(event.clientX - rect.left)
		y.set(event.clientY - rect.top)
	}

	return (
		<motion.div
			style={{
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
		>
			<motion.div style={{ rotateX, rotateY }}>{children}</motion.div>
		</motion.div>
	)
}
