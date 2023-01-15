import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import Appear from '../../framerMotion/Appear'
import FadeIn from '../../HOC/FadeIn'

export default function TextContainer({ children, ...props }) {
	return (
		<Appear>
			<Container size={'8xl'}>
				<VStack
					px={{ base: 6, md: 4 }}
					alignSelf='stretch'
					alignItems='stretch'
					fontSize={{ base: 'lg', md: 'xl' }}
					spacing={3}
					{...props}
				>
					{children}
				</VStack>
			</Container>
		</Appear>
	)
}
