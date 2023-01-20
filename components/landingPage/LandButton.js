import { Button, HStack, useColorModeValue, VStack } from '@chakra-ui/react'
import StyledNextLink from '../base/StyledNextLink'
import Track from '../framerMotion/Track'

export default function LandButton() {
	return (
		<Button
			bg={{ base: 'gray.400', md: useColorModeValue('blackAlpha.900', 'whiteAlpha.100') }}
			maxW={{ base: 300, md: 300 }}
			alignSelf={'center'}
			color={'white'}
			_dark={{ color: { base: 'black', md: 'white' } }}
			_hover={{
				bg: useColorModeValue('teal', 'red'),
				color: useColorModeValue('white', 'black'),
			}}
			_active={{
				bg: useColorModeValue('teal', 'red'),
				color: useColorModeValue('white', 'black'),
			}}
			boxShadow={'dark-xl'}
			px={8}
			py={6}
		>
			<StyledNextLink
				borderRadius={'md'}
				fontSize={{ base: '3xl', md: '3xl' }}
				px={{ base: 4, md: 8 }}
				href={'/apps'}
				textAlign={'center'}
				fontFamily={'ALICE'}
				color={'inherit'}
			>
				<HStack mb={{ base: 0, md: 0 }}>
					{[...'see '].map((letter, idx) => (
						<Track key={`l-${idx}`} index={idx}>
							{letter}
						</Track>
					))}
					{[...' my'].map((letter, idx) => (
						<Track key={`l-${idx}`} index={idx}>
							{letter}
						</Track>
					))}
					{[...' work'].map((letter, idx) => (
						<Track key={`l-${idx}`} index={idx}>
							{letter}
						</Track>
					))}
				</HStack>
			</StyledNextLink>
		</Button>
	)
}
