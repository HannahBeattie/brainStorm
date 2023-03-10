import { Container, VStack, Text, Heading, useColorModeValue, Divider } from '@chakra-ui/react'
import React from 'react'

export default function IntroSlide({ heading, children, props, num }) {
	const containerProps = {
		fontSize: 'lg',
		pb: { sm: 4 },
	}
	const bgProps = {
		borderRadius: 'md',
		color: { md: useColorModeValue('Black', 'gray.100') },
		bg: { md: useColorModeValue('warmWhite', 'extraDark') },
		flex: 1,
		p: { md: 4, base: num ? num : 0 },
		minH: { sm: 500 },
		justify: 'center',
		spacing: { md: 8, base: 2 },
		...props,
	}
	return (
		<VStack flex={'1'} {...bgProps}>
			<Heading
				fontSize={{ md: '3xl', base: ' 2xl ' }}
				fontFamily={'SF Pro'}
				color={'gray.900'}
				fontWeight={'400'}
				textTransform={'uppercase'}
				_dark={{ fontWeight: '400', color: 'gray.200' }}
				letterSpacing={'0.1em'}
				pb={{ sm: 4 }}
			>
				{heading}
			</Heading>

			<Container {...containerProps}>
				<VStack spacing={4} alignItems={'stretch'} px={{ md: 20, base: 4 }}>
					{children}
				</VStack>
			</Container>
		</VStack>
	)
}
