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
			<IntroCard heading={'3d Character Design'}>
				<Text>
					I have always been fascinated with insects, bugs and tiny creatures since I was
					a small child.{' '}
				</Text>{' '}
				<Text>
					Someday, I intend to make these characters part of a playable world. In the
					meantime, I enjoy doodling them on my iPad.
				</Text>
			</IntroCard>
			<CharacterModel />
			<ScrollToTop />
		</PageWrapper>
	)
}
