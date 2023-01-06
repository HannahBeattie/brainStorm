import { Heading, VStack } from '@chakra-ui/react'
import FadeIn from '~/components/animate/FadeIn'
import { useImageModal } from '~/components/hooks/UseImageModal'
import LightMode from '~/components/nav/LightMode'
import First from '~/components/static/First'
import Seccond from '~/components/static/Seccond'
import Third from '~/components/static/Third'

export default function Static() {
	return (
		<FadeIn>
			<LightMode />
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
