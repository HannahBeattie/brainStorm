import ScrollProgress from '~/components/pages/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/pages/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import HelloWorld from '~/components/pages/landingPage/HelloWorld'
import { Image, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
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
				<link rel='icon' href='/fav.png' />
			</Head>
			<PageWrapper>
				<ScrollToTop />
				<ScrollProgress />
				<HelloWorld />
				<VineWorld />
				<MainIntro />
				<Text fontSize={'sm'} className='sideT'>
					Hannah B 2023
				</Text>

				<VStack zIndex={-5} position={'absolute'} right={0} left={0} bottom={-100}>
					<Unfold num={-1000}>
						<Image
							filter={'auto'}
							alt={'A vector image of a grassy hill '}
							src={useBreakpointValue({ base: '/grass.png', md: '/grass.png' })}
							width={'100vw'}
							alignSelf={'stretch'}
						/>
					</Unfold>
				</VStack>
			</PageWrapper>
		</>
	)
}

Home.noFooter = true
