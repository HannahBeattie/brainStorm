import { Box, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { BsFillLightbulbOffFill, BsLightbulbFill } from 'react-icons/bs'
import ButtonFocus from '../framerMotion/ButtonFocus'

export default function ToggleMode() {
	const { toggleColorMode } = useColorMode()
	const mode = useColorModeValue(<BsFillLightbulbOffFill />, <BsLightbulbFill />)
	return (
		<Box
			position={'fixed'}
			bottom={{ base: 4, md: 4 }}
			left={{ base: 2, md: 4 }}
			cursor={'pointer'}
			zIndex={2}
		>
			<ButtonFocus>
				<Text
					fontSize={{ base: 'xl', md: 'lg' }}
					onClick={toggleColorMode}
					_light={{ color: 'grayAlpha.600', _hover: { color: 'warmWhite' } }}
					_dark={{ color: 'grayAlpha.900', _hover: { color: 'warmWhite' } }}
					pb={{ base: 0.5, md: 0 }}
				>
					{mode}
				</Text>
			</ButtonFocus>
		</Box>
	)
}
