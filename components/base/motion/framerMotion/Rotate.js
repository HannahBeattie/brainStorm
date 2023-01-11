import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
	rotateMe: { rotate: 360 },
	dontRotateMe: { rotate: 0 },
}

export default function Rotate({ children, transition, props }) {
	const [rotate, setRotate] = useState(false)

	return (
		<motion.div
			whileHover={{
				scale: 1.2,
				transition: { duration: 1 },
			}}
			animate={rotate ? 'rotateMe' : 'dontRotateMe'}
			variants={variants}
			transition={{ duration: 0.5, ease: 'easeOut', ...transition }}
			{...props}
		>
			<Box onClick={() => setRotate((rotate) => !rotate)}>{children}</Box>
		</motion.div>
	)
}
