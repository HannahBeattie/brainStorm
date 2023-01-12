import { motion } from 'framer-motion'

export default function IAmHov({ children, transition, yIs, rotate, yIsNow }) {
	return (
		<motion.div
			animate={{ x: 0, rotate: rotate ? rotate : 0, y: yIs ? yIs : 0 }}
			whileHover={{
				// rotate: rotateBy ? rotateBy : 2,
				y: yIsNow ? yIsNow : -20,
				x: 0,
				rotate: 0,
				ease: 'easeInOut',
				cursor: 'pointer',
			}}
			style={{ width: '100%' }}
			transition={{ ease: 'easeInOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
