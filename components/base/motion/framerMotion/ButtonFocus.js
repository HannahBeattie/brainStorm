import { motion } from 'framer-motion'

export default function ButtonFocus({ children, transition }) {
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
				// ease: 'easeInOut',
			}}
			transition={{ ease: 'easeInOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
