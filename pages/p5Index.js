import { Divider, Heading, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import LinkWrapper from '~/components/base/LinkWrapper'
import StyledNextLink from '~/components/base/StyledNextLink'
import HoverPulse from '~/components/framerMotion/HoverPulse'
import PageWrapper from '~/components/HOC/PageWrapper'
import { usePrevNext } from '~/components/hooks/usePrevNext'
import GalleryWrapper from '~/components/p5GalleryPages/GalleryWrapper'
import P5Intro from '~/components/p5GalleryPages/P5Intro'
import { P5NavItems } from '~/components/p5GalleryPages/psNavItems'

export default function P5Index() {
	const pages = P5NavItems
	const { prev, next } = usePrevNext(pages.map((page) => page.href))
	return (
		<PageWrapper>
			<GalleryWrapper no={true}>
				<VStack flex={1} alignItems={'center'} justifyContent={'center'} py='4'>
					<P5Intro />
					<StyledNextLink href={next}>
						<HStack pb={4}>
							<Text fontWeight={'500'}>Take a look</Text> <FaArrowRight />
						</HStack>
					</StyledNextLink>
				</VStack>
			</GalleryWrapper>
		</PageWrapper>
	)
}
