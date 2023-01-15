import { Container, VStack, Text, Heading } from '@chakra-ui/react'
import React from 'react'

export default function IntroCard({ heading, children, props }) {
	const containerProps = {
		bg: '#efeeee',
		_dark: { bg: 'extraDark' },
		fontSize: 'lg',
		fontFamily: 'Lora',
		p: 8,
		borderRadius: 'md',
		boxShadow: 'md',
		...props,
	}
	return (
		<VStack>
			<Heading py={{ base: 2, md: 0 }}>{heading}</Heading>
			<Container {...containerProps}>
				<VStack spacing={4}>{children}</VStack>
			</Container>
		</VStack>
	)
}
