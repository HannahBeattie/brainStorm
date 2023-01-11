import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import Appear from '../motion/framerMotion/Appear'
import FadeIn from '../motion/framerMotion/FadeIn'

export default function NarrowStack({ children, font, textSize, spacing }) {
	return (
		<Appear>
			<Container size={'8xl'} py={16}>
				<VStack
					px={{ base: 4 }}
					alignSelf='stretch'
					alignItems='stretch'
					fontFamily={font ?? 'poppins'}
					fontSize={textSize ?? { sm: 'lg', md: 'xl' }}
					spacing={spacing ?? 3}
				>
					{children}
				</VStack>
			</Container>
		</Appear>
	)
}
