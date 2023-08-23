import { Box, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { MdLightMode, MdDarkMode } from 'react-icons/md'
import ButtonFocus from '../pages/framerMotion/ButtonFocus'

export default function ToggleMode() {
	const { toggleColorMode } = useColorMode()
	const mode = useColorModeValue(<MdDarkMode />, <MdLightMode />)
	return (
		<Box
			position={'fixed'}
			left={{ base: 2, md: 'unset' }}
			bottom={{ base: 2, md: 'unset' }}
			top={{ sm: 2, lg: 5 }}
			right={{ md: 6, lg: 2 }}
			cursor={'pointer'}
			zIndex={2}
			p={2}
			borderRadius={20}
			_dark={{ bg: 'blackAlpha.700' }}
		>
			<ButtonFocus>
				<Text
					fontSize={{ base: 'xl', md: 'lg' }}
					onClick={toggleColorMode}
					_light={{ color: 'grayAlpha.900', _hover: { color: 'warmWhite' } }}
					_dark={{ color: 'whiteAlpha.900', _hover: { color: 'warmWhite' } }}
				>
					{mode}
				</Text>
			</ButtonFocus>
		</Box>
	)
}
