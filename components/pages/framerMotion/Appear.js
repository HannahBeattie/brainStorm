import { AnimatePresence, motion } from 'framer-motion'

export default function Appear({ children, width, dur, delay, ...rest }) {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					delay: delay,
					duration: dur ? dur : 1,
					ease: 'easeOut',
				}}
				style={{ alignItems: 'stretch', width }}
				exit={{ opacity: 0 }}
				{...rest}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}
