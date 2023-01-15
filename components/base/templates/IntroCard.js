import { Container, VStack, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function IntroCard({ heading, children, props }) {
	const containerProps = {
		fontSize: 'lg',
		...props,
	}
	const bgProps = {
		py: 10,

		flex: 1,
	}
	return (
		<VStack flex={'1'} {...bgProps}>
			<Heading
				fontSize={'3xl'}
				pb={8}
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
