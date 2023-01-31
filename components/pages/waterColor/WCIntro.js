import { Text, Tooltip } from '@chakra-ui/react'
import IntroCard from '../../base/templates/IntroCard'
import Appear from '../framerMotion/Appear'

export default function WCIntro() {
	return (
		<Appear width={{ flex: '1' }}>
			<IntroCard heading={'WaterColors'}>
				<Text>Watercolor painting began as an attempt to cure my perfectionism.</Text>
				<Text>
					They are an extremely unpredictable medium that are affected by countless
					factors — medium, brand, type of pigment, fluid type, fluid amount, paper grain,
					ect.
				</Text>
				<Text>Which is a long way of saying that you cannot control water.</Text>
			</IntroCard>
		</Appear>
	)
}
