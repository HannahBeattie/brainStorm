import { motion } from 'framer-motion'
// code adapted from Shaan Alam's:  https://dev.to/shaan_alam/create-awesome-page-transitions-in-nextjs-using-framer-motion-2pln

export function WipeIn({ children }) {
	return (
		<>
			<motion.div
				className='slide-in'
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 0 }}
				exit={{ scaleX: 1 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
			>
				{children}
			</motion.div>
		</>
	)
}

export function WipeOut({ children }) {
	return (
		<>
			<motion.div
				className='slide-out'
				initial={{ scaleX: 1 }}
				animate={{ scaleX: 0 }}
				exit={{ scaleX: 0 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
			/>
			{children}
		</>
	)
}
