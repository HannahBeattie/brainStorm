import { Heading, VStack } from '@chakra-ui/react'
import Appear from '~/components/framerMotion/Appear'
import Scroll from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import Intro from '~/components/landingPage/Intro'
import Brain from '~/components/p5/hero/Brain'

export default function Home() {
	return (
		<PageWrapper>
			<ScrollToTop />
			<Scroll />
			<Appear width={{ width: '100vw' }}>
				<Heading
					fontWeight={'900'}
					fontFamily={'Alice'}
					fontSize={{ base: 80, sm: 80, md: 90 }}
					textAlign={{ base: 'center', sm: 'auto' }}
					py={{ base: 4, md: 8 }}
					pb={{ md: 10, base: 10 }}
					lineHeight={{ base: '0.9', md: 1 }}
				>
					Hello World
				</Heading>
			</Appear>

			<VStack height={{ base: '320px', md: '500px' }} width={{ base: '320px', md: '500px' }}>
				<Brain />
			</VStack>
			<Intro />
		</PageWrapper>
	)
}

Home.noFooter = true
