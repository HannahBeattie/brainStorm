import { motion } from 'framer-motion'

export default function ButtonFocus({ children, transition, ...props }) {
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
			}}
			transition={{ ease: 'easeInOut', ...transition }}
			style={{ ...props }}
		>
			{children}
		</motion.div>
	)
}
