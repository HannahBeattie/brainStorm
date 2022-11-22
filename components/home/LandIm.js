import React from 'react'
import { motion } from 'framer-motion'
import { Box, Image } from '@chakra-ui/react'
import Flicker from '../animate/Flicker'

function LandIm() {
	return (
		<Flicker>
			<motion.div
				initial={{ rotate: [0, 90, 0], opacity: [0, 0.3, 0.5, 0.9, 1] }}
				animate={{ opacity: 1 }}
				whileTap={{ scale: 1.05, rotate: [0, 5, -5, 5, 0] }}
				whileHover={{ opacity: [0.9, 1] }}
				transition={{ duration: 1 }}
			>
				<motion.div
					whileInView={{
						opacity: [1, 0.99, 1],
						scale: [1, 1.05, 1],
						left: [0, 0.1, 1, 0.2, 1, 0],
						right: [0, 0.2, 1, 0.3, 1, 0],
					}}
					transition={{ ease: 'easeInOut', repeat: 'Infinity', duration: 10 }}
				>
					<Box>
						<Image
							alt={
								'Two people with computers for heads, siting on large computer parts.'
							}
							h={{ sm: 600, base: '350' }}
							src={'/brainStorm/tvBrain.png'}
						/>
					</Box>
				</motion.div>
			</motion.div>
		</Flicker>
	)
}

export default LandIm
