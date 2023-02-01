import ScrollProgress from '~/components/pages/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/pages/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import HelloWorld from '~/components/pages/landingPage/HelloWorld'
import { Image, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import StyledNextLink from '~/components/base/StyledNextLink'
import { Unfold, UnfoldSm } from '~/components/pages/framerMotion/EnterStage'
import MainIntro from '~/components/pages/landingPage/MainIntro'
import VineWorld from '~/components/pages/p5/hero/VineWorld'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Hello world</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
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
					href={
						'https://gorillasun.de/blog/radial-perlin-noise-and-generative-tree-rings'
					}
					fontFamily={'SF Pro'}
					fontSize={{ base: 'sm', md: 'md' }}
					color={'white'}
					_dark={{ color: 'blackAlpha.900' }}
					fontWeight={600}
				>
					Generative circles inspired by AHMAD MOUSSA &apos;s Perlin noise rings
				</StyledNextLink>

				<VStack position={'relative'} zIndex={-5}>
					<Unfold num={-1000}>
						<Image
							filter={'auto'}
							invert={useColorModeValue('null', '50%')}
							alt={'A vector image of a grassy hill '}
							src={useBreakpointValue({ base: '/baseL.png', md: '/ground.png' })}
							width={'100%'}
							alignSelf={'stretch'}
						/>
					</Unfold>
				</VStack>
			</PageWrapper>
		</>
	)
}

Home.noFooter = true
