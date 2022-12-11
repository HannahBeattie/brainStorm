import { Box, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { BsFillLightbulbOffFill, BsLightbulbFill } from 'react-icons/bs'

function LightMode() {
	const { colorMode, toggleColorMode } = useColorMode()
	const mode = useColorModeValue(<BsFillLightbulbOffFill />, <BsLightbulbFill />)
	return (
		<Box position={'fixed'} bottom={0} left={4} cursor={'pointer'} zIndex={2}>
			<motion.div
				whileHover={{ scale: 1.4 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
			>
				<Text
					py={4}
					onClick={toggleColorMode}
					_light={{ color: 'gray.700', _hover: { color: 'gray.500' } }}
					_dark={{ color: 'gray.100' }}
				>
					{mode}
				</Text>
			</motion.div>
		</Box>
	)
}

export default LightMode
