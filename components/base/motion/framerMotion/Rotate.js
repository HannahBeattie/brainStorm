import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
	rotateMe: { rotate: 540 },
	dontRotateMe: { rotate: 0 },
}

export default function Rotate({ children, transition }) {
	const [rotate, setRotate] = useState(false)
	console.log('rotate is:', rotate)
	return (
		<motion.div
			whileHover={{
				scale: 1.2,
				transition: { duration: 1 },
			}}
			animate={rotate ? 'rotateMe' : 'dontRotateMe'}
			variants={variants}
			transition={{ duration: 0.5, ease: 'easeOut', ...transition }}
		>
			<Box onClick={() => setRotate((rotate) => !rotate)}>{children}</Box>
		</motion.div>
	)
}
