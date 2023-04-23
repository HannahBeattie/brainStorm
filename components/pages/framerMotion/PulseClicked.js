import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PulseClicked({ children, transition, props }) {
	const [rotate, setRotate] = useState(false)

	return (
		<motion.div
			whileHover={{
				scale: [1, 0.9, 1, 0.9, 1],
				transition: { duration: 4 },
			}}
			whileTap={{ rotate: 25 }}
			transition={{ duration: 0.5, ease: 'easeOut', ...transition }}
			{...props}
		>
			<Box onClick={() => setRotate((rotate) => !rotate)}>{children}</Box>
		</motion.div>
	)
}
