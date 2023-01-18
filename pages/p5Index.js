import { Heading } from '@chakra-ui/react'
import LinkWrapper from '~/components/base/LinkWrapper'
import PageWrapper from '~/components/HOC/PageWrapper'
import GalleryWrapper from '~/components/p5GalleryPages/GalleryWrapper'
import P5Intro from '~/components/p5GalleryPages/P5Intro'

export default function P5Index() {
	return (
		<PageWrapper>
			<GalleryWrapper no={true}>
				<P5Intro />
			</GalleryWrapper>
		</PageWrapper>
	)
}
