import { Text } from '@chakra-ui/react'
import StyledNextLink from '../base/StyledNextLink'
import IntroSlide from '../base/templates/IntroSlide'

export default function P5Intro() {
	return (
		<IntroSlide heading={'Generative art'} num={2}>
			<Text>
				I have recently, gingerly, dipped my toes into the realm of digital and generative
				art thanks to the p5.js library.
			</Text>
			<Text>
				While it is early days, I have enjoyed creating works that mimic and play with
				organic shapes, patterns and colours.
			</Text>
			<Text>
				I am interested in gaining more understanding and control over my pattern-making
				abilities; Perhaps trying to mimic my analog, pen-and-ink styles in a generative
				context.
			</Text>
			<Text as={'div'}>
				For more:{' '}
				<StyledNextLink href={'/p5/staticWorks'}>see static text works</StyledNextLink>
			</Text>
		</IntroSlide>
	)
}
