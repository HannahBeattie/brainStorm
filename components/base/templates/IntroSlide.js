import { Container, VStack, Text, Heading, useColorModeValue, Divider } from '@chakra-ui/react'
import React from 'react'

export default function IntroSlide({ heading, children, props }) {
	const containerProps = {
		fontSize: 'lg',
		...props,
	}
	const bgProps = {
		borderRadius: 'md',
		boxShaddow: 'dark-xl',
		color: { md: useColorModeValue('Black', 'gray.100') },
		bg: { md: useColorModeValue('warmWhite', 'extraDark') },
		flex: 1,
		pb: { md: 20, base: 4 },
		pt: { md: 16, base: 4 },
		spacing: { md: 8, base: 4 },
	}
	return (
		<VStack flex={'1'} {...bgProps}>
			<Heading
				fontSize={'3xl'}
				fontFamily={'SF Pro'}
				color={'gray.900'}
				fontWeight={'400'}
				textTransform={'uppercase'}
				_dark={{ fontWeight: '400', color: 'gray.200' }}
				letterSpacing={'0.1em'}
			>
				{heading}
			</Heading>

			<Container {...containerProps}>
				<VStack spacing={4} alignItems={'stretch'} px={{ md: 20, base: 8 }}>
					{children}
				</VStack>
			</Container>
		</VStack>
	)
}
