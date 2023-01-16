import { motion } from 'framer-motion'

export default function Appear({ children, width, ...rest }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 2,
				ease: 'easeInOut',
			}}
			style={width}
			exit={{ opacity: 0 }}
			{...rest}
		>
			{children}
		</motion.div>
	)
}