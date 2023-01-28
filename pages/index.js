import ScrollProgress from '~/components/pages/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/pages/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import HelloWorld from '~/components/pages/landingPage/HelloWorld'
import { Image, useColorModeValue, VStack } from '@chakra-ui/react'
import StyledNextLink from '~/components/base/StyledNextLink'
import { Unfold, UnfoldSm } from '~/components/pages/framerMotion/EnterStage'
import MainIntro from '~/components/pages/landingPage/MainIntro'
import VineWorld from '~/components/pages/p5/hero/VineWorld'
import Head from 'next/head'

export default function Home() {
	const invert = useColorModeValue('null', '0%')
	const src = { base: '/baseL.png', md: '/ground.png' }
	return (
		<>
			<Head>
				<title>Hello, hello.</title>
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
					Generative circles enspired by AHMAD MOUSSA &apos;s Perlin noise rings
				</StyledNextLink>

				<VStack position={'relative'} zIndex={-5}>
					<UnfoldSm>
						<Image
							display={{ base: 'auto', md: 'none' }}
							alt={'A vector image of a grassy hill '}
							src={'/baseL.png'}
							width={'100%'}
							alignSelf={'stretch'}
							position={'auto'}
						/>
					</UnfoldSm>
					<Unfold num={-1000}>
						<Image
							filter={'auto'}
							invert={invert}
							display={{ base: 'none', md: 'flex' }}
							alt={'A vector image of a grassy hill '}
							src={'/ground.png'}
							width={'100%'}
							alignSelf={'stretch'}
							position={'auto'}
						/>
					</Unfold>
				</VStack>
			</PageWrapper>
		</>
	)
}

Home.noFooter = true
