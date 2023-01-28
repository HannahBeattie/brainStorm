import { motion } from 'framer-motion'

export default function FadeIn({ children, transition }) {
	return (
		<motion.div
			initial={{ opacity: '0' }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3, ease: 'easeOut', ...transition }}
			style={{ flex: '1' }}
		>
			{children}
		</motion.div>
	)
}
