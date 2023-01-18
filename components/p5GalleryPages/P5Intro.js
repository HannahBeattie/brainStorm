import { Spacer, Text, VStack } from '@chakra-ui/react'
import StyledNextLink from '../base/StyledNextLink'
import IntroCard from '../base/templates/IntroCard'
import HoverPulse from '../framerMotion/HoverPulse'

export default function P5Intro() {
	return (
		<IntroCard heading={'Generative art'}>
			<Text>
				For the last couple of months, I have been gingerly dipping my toes into generative
				art, with the p5.js library.
			</Text>
			<Text>This gallery contains my animated works.</Text>
			<Text>
				If you have already seen them and/or are hungry for more, you can find notes about
				my process and stills of other works by clicking the link below.
			</Text>
			<Spacer />
		</IntroCard>
	)
}
