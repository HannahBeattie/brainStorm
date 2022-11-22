import { motion } from 'framer-motion'

const generateKey = (pre) => {
	return `${pre}_${new Date().getTime()}`
}
export default function FadeIn({ children, transition }) {
	return (
		<motion.div
			whileHover={{ opacity: [0.9, 1] }}
			initial={{ opacity: '0' }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
