import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import Appear from '../motion/framerMotion/Appear'
import FadeIn from '../motion/framerMotion/FadeIn'

export default function NarrowStack({ children, ...props }) {
	return (
		<Appear>
			<Container size={'8xl'}>
				<VStack
					px={{ base: 4 }}
					alignSelf='stretch'
					alignItems='stretch'
					fontFamily={'poppins'}
					fontSize={{ sm: 'lg', md: 'xl' }}
					spacing={3}
					{...props}
				>
					{children}
				</VStack>
			</Container>
		</Appear>
	)
}
