import { Text, Tooltip } from '@chakra-ui/react'
import IntroCard from '../../base/templates/IntroCard'
import Appear from '../framerMotion/Appear'

export default function WCIntro() {
	return (
		<Appear width={{ width: '100vw' }}>
			<IntroCard heading={'WaterColors'}>
				<Text>Watercolor painting began as an attempt to cure my perfectionism.</Text>
				<Text>
					They are an extremely unpredictable medium that are effected by so many factors
					such as medium, brand, type of pigment, fluid type , fluid amount , paper grain,
					humidity, how dry or wet the bush is, the angle and firmness of the surface you
					are working on...
				</Text>
				<Text>Which is a long way of saying that you cannot control water.</Text>
			</IntroCard>
		</Appear>
	)
}
