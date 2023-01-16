import { Text } from '@chakra-ui/react'
import IntroCard from './base/templates/IntroCard'
import Appear from './framerMotion/Appear'

export default function WCIntro() {
	return (
		<Appear width={{ width: '100vw' }}>
			<IntroCard heading={'WaterColors'}>
				<Text>One of my hobbies for the last few years has been water color painting.</Text>
				<Text>
					I was particularly drawn to watercolors because of the lack of control and
					experiance I had with them.
				</Text>
				<Text>
					As someone who tends towards perfectionism, watecolors are a great way to
					relinquish control.
				</Text>
				<Text>
					They are are, by nature, a fast-drying medium with a huge range of chaotic,
					uncontrolable factors. For instance; Water and pigment mix diffirently according
					to humidity, the grain of the paper and the motion of the pen.
				</Text>
				<Text>
					Diffirent brands of paints may dry diffirntly and the color of the pigment looks
					significantly diffirent dry to wet.
				</Text>
				<Text>
					Because of this, I see the process of painting as more to do with noticing what
					the watercolors are doing and responding to that, rather than trying to
					'control' them.
				</Text>
			</IntroCard>
		</Appear>
	)
}
