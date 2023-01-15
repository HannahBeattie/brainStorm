import { Box, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { BsFillLightbulbOffFill, BsLightbulbFill } from 'react-icons/bs'
import Breathe from '../framerMotion/ButtonFocus'

export default function ToggleMode() {
	const { colorMode, toggleColorMode } = useColorMode()
	const mode = useColorModeValue(<BsFillLightbulbOffFill />, <BsLightbulbFill />)
	return (
		<Box
			position={'fixed'}
			bottom={{ base: 4, md: 4 }}
			left={{ base: 2, md: 4 }}
			cursor={'pointer'}
			zIndex={2}
		>
			<Breathe>
				<Text
					fontSize={{ base: 'xl', md: 'lg' }}
					onClick={toggleColorMode}
					_light={{ color: 'gray.700', _hover: { color: 'gray.500' } }}
					_dark={{ color: 'grayAlpha.900' }}
				>
					{mode}
				</Text>
			</Breathe>
		</Box>
	)
}
