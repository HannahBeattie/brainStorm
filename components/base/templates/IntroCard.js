import { Container, Heading, VStack } from '@chakra-ui/react'

export default function IntroCard({ heading, children, props, pt }) {
	const containerProps = {
		fontSize: 'lg',
		px: { base: 8 },
		pb: { base: 4, md: 0 },
		...props,
	}
	const bgProps = {
		pt: pt ? pt : 0,
		py: { md: 10 },
	}
	return (
		<VStack {...bgProps}>
			<Heading
				fontSize={{ md: '3xl', base: 'xl' }}
				pb={{ md: 8, base: 4 }}
				px={{ base: 10, md: 0 }}
				textAlign={{ base: 'center' }}
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
