import { Heading, VStack } from '@chakra-ui/react'
import FadeIn from '~/components/animate/FadeIn'
import LightMode from '~/components/nav/LightMode'
import FlowField from '~/components/p5Motion/FlowField'
import Grass from '~/components/p5Motion/grass'
import Smoak from '~/components/p5Motion/Smoak'
import Wiggle from '~/components/p5Motion/wiggle'
import Worms from '~/components/p5Motion/worms'
import First from '~/components/static/First'
import Seccond from '~/components/static/Seccond'
import Third from '~/components/static/Third'

export default function Static() {
	return (
		<FadeIn>
			<LightMode />

			{/* <FlowField /> */}
			{/* <Grass /> */}
			{/* <Smoak /> */}
			{/* <Wiggle /> */}
			{/* <Worms /> */}

			<VStack
				alignItems='center'
				px={{ base: 4, md: 10 }}
				pt={{ base: 4, md: 8 }}
				spacing={4}
			>
				<Heading>Generative art made with p5</Heading>

				<First />
				<Seccond />
				<Third />
			</VStack>
		</FadeIn>
	)
}
