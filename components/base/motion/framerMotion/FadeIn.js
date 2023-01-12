import { motion } from 'framer-motion'

export default function FadeIn({ children, transition }) {
	return (
		<motion.div
			whileHover={{ opacity: [0.9, 1] }}
			initial={{ opacity: '0' }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3, ease: 'easeOut', ...transition }}
			style={{ width: '100vw', height: '100vh' }}
		>
			{children}
		</motion.div>
	)
}
