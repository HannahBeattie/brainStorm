import { Text } from '@chakra-ui/react'
import IntroCard from '~/components/base/templates/IntroCard'
import CharacterModel from '~/components/pages/CharacterModel'
import ScrollToTop from '~/components/pages/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
export default function Characters() {
	return (
		<PageWrapper>
			<IntroCard heading={'3d Character Design'}>
				<Text>
					Someday, I intend to make these characters part of a playable world. In the
					meantime, here are the rough character models.
				</Text>
			</IntroCard>
			<CharacterModel />
			<ScrollToTop />
		</PageWrapper>
	)
}
