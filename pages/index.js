import ScrollProgress from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import HelloWorld from '~/components/landingPage/HelloWorld'

import { Image, VStack } from '@chakra-ui/react'
import StyledNextLink from '~/components/base/StyledNextLink'
import { Unfold, UnfoldSm } from '~/components/framerMotion/EnterStage'
import MainIntro from '~/components/landingPage/MainIntro'
import VineWorld from '~/components/p5/hero/VineWorld'

export default function Home() {
	const src = { base: '/baseL.png', md: '/ground.png' }
	return (
		<PageWrapper>
			<ScrollToTop />
			<ScrollProgress />
			<HelloWorld />

			<VineWorld />

			<MainIntro />
			<StyledNextLink
				zIndex={0}
				position={'absolute'}
				bottom={{ base: 8, md: 4 }}
				maxW={{ base: '20em', md: '34em' }}
				textAlign={'center'}
				href={'https://gorillasun.de/blog/radial-perlin-noise-and-generative-tree-rings'}
				fontFamily={'SF Pro'}
				fontSize={{ base: 'sm', md: 'md' }}
				color={'white'}
				bg={'black'}
			>
				Generative circles enspired by AHMAD MOUSSA &apos;s Perlin noise rings
			</StyledNextLink>

			<VStack position={'relative'} zIndex={-5}>
				<UnfoldSm>
					<Image
						display={{ base: 'auto', md: 'none' }}
						alt={'A vector image of a grassy hill '}
						src={'/baseL.png'}
						width={'100vw'}
						position={'auto'}
					/>
				</UnfoldSm>
				<Unfold num={-1000}>
					<Image
						display={{ base: 'none', md: 'flex' }}
						alt={'A vector image of a grassy hill '}
						src={'/ground.png'}
						width={'100vw'}
						position={'auto'}
					/>
				</Unfold>
			</VStack>
		</PageWrapper>
	)
}

Home.noFooter = true
