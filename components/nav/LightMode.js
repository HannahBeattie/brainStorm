import { Box, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { BsFillLightbulbOffFill, BsLightbulbFill } from 'react-icons/bs'

function LightMode() {
	const { colorMode, toggleColorMode } = useColorMode()
	const mode = useColorModeValue(<BsFillLightbulbOffFill />, <BsLightbulbFill />)
	return (
		<Box position={'fixed'} bottom={0} left={4} cursor={'pointer'}>
			<motion.div
				whileHover={{ scale: 1.4 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
			>
				<Text
					py={4}
					onClick={toggleColorMode}
					_light={{ color: 'gray.900', _hover: { color: 'pink.500' } }}
					_dark={{ color: 'pink.500' }}
				>
					{mode}
				</Text>
			</motion.div>
		</Box>
	)
}

export default LightMode
