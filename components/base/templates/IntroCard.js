import { Container, VStack, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function IntroCard({ heading, children, props }) {
	const containerProps = {
		fontSize: 'lg',
		px: { base: 8 },
		...props,
	}
	const bgProps = {
		py: { md: 10, base: 4 },
	}
	return (
		<VStack {...bgProps}>
			<Heading
				fontSize={{ md: '3xl', base: 'xl' }}
				pb={{ md: 8, base: 4 }}
				fontFamily={'SF Pro'}
				color={'gray.500'}
				fontWeight={'300'}
				textTransform={'uppercase'}
				_dark={{ fontWeight: '400', color: 'gray.200' }}
				letterSpacing={'0.1em'}
			>
				{heading}
			</Heading>
			<Container {...containerProps}>
				<VStack spacing={4} alignItems={'stretch'}>
					{children}
				</VStack>
			</Container>
		</VStack>
	)
}