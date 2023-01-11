import { motion } from 'framer-motion'

export default function Flicker({ children, ...rest }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: [0.8, 0.9, 0.5, 0.9, 0.5, 0.9, 1],
				left: [0.1, 1, 0.2, 1, 0],
				right: [0.2, 1, 0.3, 1, 0],
			}}
			duration=' 0.4'
			{...rest}
		>
			{children}
		</motion.div>
	)
}
