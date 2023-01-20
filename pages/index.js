import ScrollProgress from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import HelloWorld from '~/components/landingPage/HelloWorld'

import { Image, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import StyledNextLink from '~/components/base/StyledNextLink'
import LandingPage from '~/components/landingPage/LandingPage'
import VineWorld from '~/components/p5/hero/VineWorld'

export default function Home() {
	return (
		<PageWrapper>
			<ScrollToTop />
			<ScrollProgress />
			<HelloWorld />
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{
					opacity: 1,
				}}
				transition={{ duration: 1.5, ease: 'easeIn' }}
			>
				<VineWorld />
			</motion.div>
			<LandingPage />

			<Image
				alt={'A vector image of a grassy hill '}
				src={'/hill.png'}
				width={'100vw'}
				position={'absolute'}
				bottom={50}
				zIndex={-5}
			/>

			<VStack bg={'black'} width={'100vw'} h={50}>
				<StyledNextLink
					zIndex={3}
					maxW={{ base: '20em', md: '34em' }}
					textAlign={'center'}
					href={
						'https://gorillasun.de/blog/radial-perlin-noise-and-generative-tree-rings'
					}
					fontFamily={'SF Pro'}
					fontSize={{ base: 'sm', md: 'sm' }}
					color={'grayAlpha.900'}
					bg={'blackAlpha.900'}
				>
					Generative circles enspired by AHMAD MOUSSA &apos;s Perlin noise rings
				</StyledNextLink>
			</VStack>
		</PageWrapper>
	)
}

Home.noFooter = true
