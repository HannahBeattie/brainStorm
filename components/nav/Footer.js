import {
	color,
	HStack,
	Icon,
	IconButton,
	Link,
	Spacer,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import Breathe from '../framerMotion/ButtonFocus'
import StyledNextLink from '../base/StyledNextLink'

export default function Footer() {
	const col = useColorModeValue('blackAlpha.200', 'whiteAlpha.600')
	const accent = useColorModeValue('teal', 'grayAlpha.700')
	const hoverCol = useColorModeValue('blackAlpha.400', 'whiteAlpha.800')
	return (
		<HStack
			alignItems={'stretch'}
			justify={'stretch'}
			w={'100vw'}
			px={{ base: 2, md: 4 }}
			py={{ md: 2, base: 2 }}
			bg={{ base: 'gray.300', md: 'none' }}
			_dark={{ bg: { base: 'blackAlpha.300', md: 'none' } }}
		>
			<Spacer />
			<Breathe>
				<StyledNextLink href={'https://github.com/HannahBeattie'}>
					<Icon
						fontSize={'3xl'}
						color={{ base: accent, md: col }}
						active={{ bg: 'null' }}
						_hover={{ bg: 'null', color: hoverCol }}
						bg={'null'}
						as={VscGithub}
					/>
				</StyledNextLink>
			</Breathe>
		</HStack>
	)
}
