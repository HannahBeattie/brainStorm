import { Heading } from '@chakra-ui/react'
import PageWrapper from '~/components/HOC/PageWrapper'
import GalleryWrapper from '~/components/p5GalleryPages/GalleryWrapper'
import P5Intro from '~/components/p5GalleryPages/P5Intro'

export default function P5Index() {
	return (
		<PageWrapper>
			<GalleryWrapper>
				<P5Intro />
			</GalleryWrapper>
		</PageWrapper>
	)
}
