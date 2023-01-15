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
			<Appear>
				<Heading
					fontWeight={'900'}
					fontFamily={'Alice'}
					fontSize={{ base: 80, sm: 80, md: 90 }}
					textAlign={{ base: 'center', sm: 'auto' }}
					pb={{ md: 4 }}
				>
					Hello World
				</Heading>
			</Appear>

			<VStack
				my={{ sm: 16 }}
				height={{ base: '300px', md: '500px' }}
				width={{ base: '300px', md: '500px' }}
			>
				<Brain />
			</VStack>
			<Intro />
		</PageWrapper>
	)
}
