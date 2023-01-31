import { Spacer, Text, VStack } from '@chakra-ui/react'
import LinkWrapper from '../../base/LinkWrapper'
import IntroCard from '../../base/templates/IntroCard'

export default function P5Intro() {
	const tipProps = {
		fontSize: 'sm',
		fontWeight: 'bold',
	}
	return (
		<IntroCard heading={'Generative art'}>
			<Text>
				For the last couple of months, I have been gingerly dipping my toes into generative
				art, with the p5.js library.
			</Text>
			<Text>This gallery contains my animated works.</Text>
			<Text>
				You can find notes about my process and stills of other works{' '}
				<LinkWrapper href={'p5/staticWorks'}>here</LinkWrapper>.
			</Text>
			<VStack flex={1} alignItems={'stretch'}>
				<Text pt={2} {...tipProps}>
					Hint: If you are using a Desktop computer you can navagate these animations
					quickly using your LEFT and RIGHT keys.{' '}
				</Text>{' '}
				<Text {...tipProps}>
					If you are on your phone, you can SWIPE right and left with your fingers.
				</Text>
			</VStack>
			<Spacer />
		</IntroCard>
	)
}
