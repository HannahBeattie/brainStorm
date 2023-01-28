import { HStack, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { FaArrowRight } from 'react-icons/fa'
import StyledNextLink from '~/components/base/StyledNextLink'
import PageWrapper from '~/components/HOC/PageWrapper'
import { usePrevNext } from '~/components/hooks/usePrevNext'
import GalleryWrapper from '~/components/pages/p5GalleryPages/GalleryWrapper'
import P5Intro from '~/components/pages/p5GalleryPages/P5Intro'
import { P5NavItems } from '~/components/pages/p5GalleryPages/psNavItems'

export default function P5Index() {
	const pages = P5NavItems
	const { prev, next } = usePrevNext(pages.map((page) => page.href))
	return (
		<>
			<Head>
				<title>Generative Gallery</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
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
		</>
	)
}
