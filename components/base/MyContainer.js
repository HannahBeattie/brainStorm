import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import Appear from '../animate/Appear'
import FadeIn from '../animate/FadeIn'

function MyContainer({ children, font, textSize, spacing }) {
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

export default MyContainer
