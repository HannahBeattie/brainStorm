import { Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import IntroCard from '~/components/base/templates/IntroCard'
import CharacterModel from '~/components/CharacterModel'
import Appear from '~/components/framerMotion/Appear'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import getGridProps from '~/components/hooks/getGridProps'
import { ImageModal, useImageModal } from '~/components/hooks/UseImageModal'
export default function Characters() {
	return (
		<PageWrapper>
			<ScrollToTop />
			<IntroCard heading={'3d Character Design'}></IntroCard>
			<Text>Someday these characters will be part of a playable world.</Text>
			<CharacterModel />
		</PageWrapper>
	)
}
