import { Box, Container, Divider, Heading, VStack } from '@chakra-ui/react'

export default function Intro({ title, children }) {
	return (
		<>
			<VStack
				id={'services'}
				flex={'1'}
				alignSelf={'stretch'}
				justifyContent={'center'}
				justifyItems={'center'}
				py={{ md: '50', base: '8' }}
				px={{ md: 0, base: '4' }}
				bg='gray.900'
				_dark={{ bg: { base: 'gray.900' } }}
			>
				<Heading
					fontSize={{ md: '7xl', base: '5xl' }}
					fontFamily={'Rubik Glitch'}
					color={'white'}
				>
					{title}
				</Heading>
				<Box flex={'1'} alignSelf={'stretch'} py={8}>
					<Container
						color='gray.800'
						_dark={{
							color: 'gray.300',
						}}
					>
						<VStack
							spacing={4}
							alignItems='flex-start'
							fontSize={{ md: 'lg' }}
							bg={'gray.100'}
							color='gray.900'
							p={'10'}
							borderRadius={'2xl'}
							boxShadow={'lg'}
						>
							{children}
						</VStack>
					</Container>
				</Box>
			</VStack>
		</>
	)
}
