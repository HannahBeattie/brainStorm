import { AnimatePresence, motion } from 'framer-motion'
import { Heading, HStack } from '@chakra-ui/react'
import Track from '../framerMotion/Track'

export default function MapLetters() {
	const letterProps = {
		fontSize: { base: '7xl', sm: '8xl', md: '8xl', lg: '8xl', xl: '9xl' },
		fontFamily: 'Alice',
		fontWeight: '900',
		textAlign: 'center',
		py: 0,
	}
	return (
		<AnimatePresence>
			<Heading {...letterProps} key='h-hello'>
				<HStack spacing={0} mb={{ base: 0, md: 0 }}>
					{[...'HELLO'].map((letter, idx) => (
						<Track key={`l-${idx}`} index={idx}>
							{letter}
						</Track>
					))}
				</HStack>
			</Heading>
			<Heading {...letterProps} key='h-world'>
				<HStack spacing={0} mt={{ base: -4, md: 0 }}>
					{[...'WORLD'].map((letter, idx) => (
						<Track key={`l2-${idx}`} index={idx + 6}>
							{letter}
						</Track>
					))}
				</HStack>
			</Heading>
		</AnimatePresence>
	)
}
